import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Calendar as CalendarIcon,
  ChevronRight,
  MoreVertical,
  BookOpen
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { MOCK_STUDENT, MOCK_COURSES, MOCK_ASSIGNMENTS, MOCK_SCHEDULE } from '../../constants';
import { cn } from '../../lib/utils';

const ATTENDANCE_DATA = [
  { name: 'Mon', value: 90 },
  { name: 'Tue', value: 85 },
  { name: 'Wed', value: 95 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 88 },
];

const PERFORMANCE_DATA = [
  { name: 'Sem 1', gpa: 3.5 },
  { name: 'Sem 2', gpa: 3.6 },
  { name: 'Sem 3', gpa: 3.4 },
  { name: 'Sem 4', gpa: 3.8 },
  { name: 'Sem 5', gpa: 3.7 },
  { name: 'Sem 6', gpa: 3.82 },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#003366] tracking-tight">Welcome back, {MOCK_STUDENT.name.split(' ')[0]}! 👋</h1>
          <p className="text-gray-500 font-medium">Here's what's happening with your academics today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-2xl border border-gray-100 flex items-center gap-3 pr-6 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <CalendarIcon size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Current Date</p>
              <p className="text-sm font-bold text-gray-900">April 5, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Current GPA', value: MOCK_STUDENT.gpa, icon: <TrendingUp />, color: 'blue', trend: '+0.12' },
          { label: 'Attendance', value: `${MOCK_STUDENT.attendance}%`, icon: <Users />, color: 'emerald', trend: 'Good' },
          { label: 'Pending Tasks', value: MOCK_ASSIGNMENTS.filter(a => a.status === 'pending').length, icon: <Clock />, color: 'amber', trend: '2 Due Soon' },
          { label: 'Courses', value: MOCK_COURSES.length, icon: <BookOpen />, color: 'purple', trend: 'Semester 6' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center",
                stat.color === 'blue' && "bg-blue-50 text-blue-600",
                stat.color === 'emerald' && "bg-emerald-50 text-emerald-600",
                stat.color === 'amber' && "bg-amber-50 text-amber-600",
                stat.color === 'purple' && "bg-purple-50 text-purple-600",
              )}>
                {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
              </div>
              <span className={cn(
                "text-xs font-bold px-2.5 py-1 rounded-full",
                stat.color === 'blue' && "bg-blue-50 text-blue-600",
                stat.color === 'emerald' && "bg-emerald-50 text-emerald-600",
                stat.color === 'amber' && "bg-amber-50 text-amber-600",
                stat.color === 'purple' && "bg-purple-50 text-purple-600",
              )}>
                {stat.trend}
              </span>
            </div>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
            <h3 className="text-3xl font-black text-[#003366] mt-1">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Charts Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#003366]">Academic Performance</h3>
                <p className="text-sm text-gray-500">GPA trend over semesters</p>
              </div>
              <select className="bg-gray-50 border-none rounded-xl text-sm font-bold px-4 py-2 outline-none">
                <option>All Semesters</option>
                <option>Last 3 Semesters</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PERFORMANCE_DATA}>
                  <defs>
                    <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                    domain={[0, 4]}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 700, color: '#003366' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="gpa" 
                    stroke="#3b82f6" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorGpa)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#003366] mb-6">Upcoming Classes</h3>
              <div className="space-y-4">
                {MOCK_SCHEDULE.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl group hover:bg-blue-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-xl flex flex-col items-center justify-center border border-gray-100 shadow-sm">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">{item.startTime}</span>
                      <span className="text-xs font-black text-[#003366]">{item.endTime}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#003366] group-hover:text-blue-600 transition-colors">{item.courseName}</h4>
                      <p className="text-xs text-gray-500 font-medium">{item.room} • {item.type}</p>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#003366] mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Submit Assignment', icon: <CheckCircle2 />, color: 'blue' },
                  { label: 'View Timetable', icon: <CalendarIcon />, color: 'emerald' },
                  { label: 'Contact Faculty', icon: <Users />, color: 'purple' },
                  { label: 'Help Desk', icon: <AlertCircle />, color: 'amber' },
                ].map((action, idx) => (
                  <button key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100 group">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                      action.color === 'blue' && "bg-blue-100 text-blue-600",
                      action.color === 'emerald' && "bg-emerald-100 text-emerald-600",
                      action.color === 'purple' && "bg-purple-100 text-purple-600",
                      action.color === 'amber' && "bg-amber-100 text-amber-600",
                    )}>
                      {React.cloneElement(action.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 text-center uppercase tracking-wider">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          {/* Notifications */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#003366]">Notifications</h3>
              <button className="text-xs font-bold text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { title: 'New Grade Posted', time: '2h ago', type: 'success', desc: 'Software Engineering Quiz 2' },
                { title: 'Attendance Alert', time: '5h ago', type: 'warning', desc: 'AI attendance dropped to 78%' },
                { title: 'Fee Deadline', time: '1d ago', type: 'info', desc: 'Last date for fee is April 15' },
              ].map((notif, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-2 shrink-0",
                    notif.type === 'success' && "bg-emerald-500",
                    notif.type === 'warning' && "bg-amber-500",
                    notif.type === 'info' && "bg-blue-500",
                  )} />
                  <div>
                    <h4 className="text-sm font-bold text-[#003366]">{notif.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{notif.desc}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase mt-2">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Widget */}
          <div className="bg-[#003366] p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Attendance Goal</h3>
              <p className="text-white/60 text-sm mb-6">You're on track to maintain 85%+</p>
              <div className="flex items-end justify-between gap-2 h-24">
                {ATTENDANCE_DATA.map((d, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${d.value}%` }}
                      className="w-full bg-blue-400/30 rounded-t-lg relative group"
                    >
                      <div className="absolute inset-0 bg-blue-400 rounded-t-lg scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                    </motion.div>
                    <span className="text-[10px] font-bold text-white/40 uppercase">{d.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black">88%</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase">Overall</p>
                </div>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
