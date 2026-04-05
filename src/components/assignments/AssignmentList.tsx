import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  Upload, 
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import { MOCK_ASSIGNMENTS } from '../../constants';
import { cn } from '../../lib/utils';

export default function AssignmentList() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'submitted' | 'graded'>('all');

  const filteredAssignments = MOCK_ASSIGNMENTS.filter(a => 
    filter === 'all' ? true : a.status === filter
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#003366] tracking-tight">Assignments</h1>
          <p className="text-gray-500 font-medium">Track your deadlines and submit your work.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
          {(['all', 'pending', 'submitted', 'graded'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all",
                filter === f ? "bg-[#003366] text-white shadow-lg shadow-blue-900/20" : "text-gray-500 hover:bg-gray-50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {filteredAssignments.map((assignment, idx) => (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0",
                  assignment.status === 'pending' && "bg-amber-50 text-amber-600",
                  assignment.status === 'submitted' && "bg-blue-50 text-blue-600",
                  assignment.status === 'graded' && "bg-emerald-50 text-emerald-600",
                )}>
                  <FileText size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">{assignment.courseName}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-wider",
                      assignment.status === 'pending' && "text-amber-600",
                      assignment.status === 'submitted' && "text-blue-600",
                      assignment.status === 'graded' && "text-emerald-600",
                    )}>
                      {assignment.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#003366] truncate group-hover:text-blue-600 transition-colors">{assignment.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <Clock size={14} />
                      <span className="text-xs font-medium">Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                    </div>
                    {assignment.grade && (
                      <div className="flex items-center gap-1.5 text-emerald-600">
                        <CheckCircle2 size={14} />
                        <span className="text-xs font-bold">Grade: {assignment.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {assignment.status === 'pending' && (
                    <button className="px-6 py-2.5 bg-[#003366] text-white rounded-xl text-sm font-bold hover:bg-[#004080] transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2">
                      <Upload size={16} />
                      Submit
                    </button>
                  )}
                  <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-[#003366] p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-900/20">
            <h3 className="text-xl font-bold mb-6">Submission Stats</h3>
            <div className="space-y-6">
              {[
                { label: 'On Time', value: '92%', color: 'bg-emerald-400' },
                { label: 'Average Grade', value: 'A-', color: 'bg-blue-400' },
                { label: 'Completion Rate', value: '85%', color: 'bg-amber-400' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{stat.label}</span>
                    <span className="text-sm font-black">{stat.value}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      className={cn("h-full rounded-full", stat.color)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#003366] mb-6">Recent Feedback</h3>
            <div className="space-y-6">
              {MOCK_ASSIGNMENTS.filter(a => a.feedback).map((a, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">{a.courseName}</span>
                    <span className="text-xs font-bold text-emerald-600">{a.grade}</span>
                  </div>
                  <p className="text-xs text-gray-600 italic leading-relaxed">"{a.feedback}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
