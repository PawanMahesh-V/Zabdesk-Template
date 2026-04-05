import React, { useState } from 'react';
import LandingPage from './components/landing/LandingPage';
import Login from './components/auth/Login';
import Sidebar from './components/layout/Sidebar';
import Overview from './components/dashboard/Overview';
import CourseList from './components/academic/CourseList';
import AssignmentList from './components/assignments/AssignmentList';
import WeeklySchedule from './components/timetable/WeeklySchedule';
import Transcript from './components/results/Transcript';
import AIAssistant from './components/ai/AIAssistant';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Search, User, ChevronDown } from 'lucide-react';
import { MOCK_STUDENT } from './constants';

type ViewState = 'landing' | 'login' | 'dashboard';

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleLogin = (role: string) => {
    setView('dashboard');
  };

  const handleLogout = () => {
    setView('landing');
  };

  if (view === 'landing') {
    return <LandingPage onLogin={() => setView('login')} />;
  }

  if (view === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search anything (courses, grades, files)..." 
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all relative"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
            </div>

            <div className="h-8 w-px bg-gray-100" />

            <button className="flex items-center gap-3 p-1.5 pr-4 hover:bg-gray-50 rounded-2xl transition-all group">
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                <img src={MOCK_STUDENT.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-bold text-[#003366] leading-none">{MOCK_STUDENT.name}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">{MOCK_STUDENT.program}</p>
              </div>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'dashboard' && <Overview />}
              {activeTab === 'academic' && <CourseList />}
              {activeTab === 'assignments' && <AssignmentList />}
              {activeTab === 'timetable' && <WeeklySchedule />}
              {activeTab === 'results' && <Transcript />}
              {/* Fallback for other tabs */}
              {!['dashboard', 'academic', 'assignments', 'timetable'].includes(activeTab) && (
                <div className="flex flex-col items-center justify-center py-40 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-300 mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-400">Section Under Development</h3>
                  <p className="text-sm text-gray-400 mt-2">We're working hard to bring you this feature soon!</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* AI Assistant Overlay */}
      <AIAssistant />
    </div>
  );
}
