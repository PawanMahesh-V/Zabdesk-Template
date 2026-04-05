import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';
import { MOCK_SCHEDULE } from '../../constants';
import { cn } from '../../lib/utils';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const HOURS = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

export default function WeeklySchedule() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#003366] tracking-tight">Weekly Timetable</h1>
          <p className="text-gray-500 font-medium">Your personalized class schedule and exam dates.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:text-blue-600 transition-all shadow-sm">
            <Download size={18} />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#003366] text-white rounded-xl text-sm font-bold hover:bg-[#004080] transition-all shadow-lg shadow-blue-900/10">
            <Share2 size={18} />
            Share
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        {/* Day Selector */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
                  selectedDay === day 
                    ? "bg-blue-50 text-blue-600 shadow-sm" 
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                )}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <button className="p-2 hover:text-blue-600 transition-colors"><ChevronLeft size={20} /></button>
            <span className="text-sm font-bold text-[#003366]">Week 12</span>
            <button className="p-2 hover:text-blue-600 transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_SCHEDULE.filter(s => s.day === selectedDay).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-[2rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                    item.type === 'Lecture' ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                  )}>
                    {item.type}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#003366] group-hover:text-blue-600 transition-colors">{item.courseName}</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">Computer Science Dept.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Clock size={16} className="text-blue-500" />
                      </div>
                      <span className="text-sm font-bold">{item.startTime} - {item.endTime}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <MapPin size={16} className="text-emerald-500" />
                      </div>
                      <span className="text-sm font-bold">{item.room}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">
                        +24
                      </div>
                    </div>
                    <button className="text-xs font-bold text-blue-600 hover:underline">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
            {MOCK_SCHEDULE.filter(s => s.day === selectedDay).length === 0 && (
              <div className="lg:col-span-3 py-20 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-300 mb-6">
                  <CalendarIcon size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-400">No classes scheduled for {selectedDay}</h3>
                <p className="text-sm text-gray-400 mt-2">Enjoy your day off or catch up on assignments!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
