import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  BarChart3, 
  Bell, 
  MessageSquare, 
  Settings, 
  LogOut,
  GraduationCap,
  HelpCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'academic', label: 'Academic', icon: BookOpen },
  { id: 'attendance', label: 'Attendance', icon: BarChart3 },
  { id: 'assignments', label: 'Assignments', icon: CheckSquare },
  { id: 'timetable', label: 'Timetable', icon: Calendar },
  { id: 'results', label: 'Results', icon: GraduationCap },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
];

const BOTTOM_ITEMS = [
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'help', label: 'Help & Support', icon: HelpCircle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  return (
    <aside className="w-72 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#003366] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
          <GraduationCap size={24} />
        </div>
        <span className="text-2xl font-bold tracking-tight text-[#003366]">ZAB<span className="text-blue-500">DESK</span></span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Main Menu</p>
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all group",
              activeTab === item.id 
                ? "bg-blue-50 text-blue-600 shadow-sm" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <item.icon size={20} className={cn(
              "transition-colors",
              activeTab === item.id ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
            )} />
            {item.label}
            {activeTab === item.id && (
              <motion.div 
                layoutId="activeTab"
                className="ml-auto w-1.5 h-1.5 bg-blue-600 rounded-full"
              />
            )}
          </button>
        ))}

        <div className="pt-8">
          <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">System</p>
          {BOTTOM_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all group",
                activeTab === item.id 
                  ? "bg-blue-50 text-blue-600 shadow-sm" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon size={20} className={cn(
                "transition-colors",
                activeTab === item.id ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
              )} />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all group"
        >
          <LogOut size={20} className="text-red-400 group-hover:text-red-50" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
