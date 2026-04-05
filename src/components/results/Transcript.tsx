import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Download, 
  TrendingUp, 
  Award, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { MOCK_STUDENT, MOCK_COURSES } from '../../constants';
import { cn } from '../../lib/utils';

export default function Transcript() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#003366] tracking-tight">Academic Results</h1>
          <p className="text-gray-500 font-medium">View your semester-wise performance and transcripts.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#003366] text-white rounded-2xl font-bold hover:bg-[#004080] transition-all shadow-lg shadow-blue-900/10">
          <Download size={20} />
          Download Full Transcript (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Current Semester Results */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#003366]">Current Semester (Spring 2026)</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase">Semester GPA:</span>
                <span className="text-lg font-black text-blue-600">3.82</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Course</th>
                    <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Credits</th>
                    <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Grade</th>
                    <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {MOCK_COURSES.map((course, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold text-[#003366]">{course.name}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">{course.code}</p>
                      </td>
                      <td className="px-8 py-6 text-sm font-bold text-gray-600">{course.credits}</td>
                      <td className="px-8 py-6">
                        <span className={cn(
                          "px-3 py-1 rounded-lg text-xs font-black",
                          course.grade?.startsWith('A') ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                        )}>
                          {course.grade}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                          <Award size={14} />
                          Passed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Previous Semesters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[5, 4, 3, 2].map((sem) => (
              <div key={sem} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-blue-600 transition-colors">
                    <FileText size={20} />
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                </div>
                <h4 className="text-lg font-bold text-[#003366]">Semester {sem}</h4>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase">GPA: <span className="text-blue-600">3.75</span></p>
                  <p className="text-xs font-bold text-gray-400 uppercase">Total Credits: <span className="text-gray-900">18</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#003366] p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            <h3 className="text-xl font-bold mb-6">Performance Summary</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Cumulative GPA</p>
                  <p className="text-3xl font-black">{MOCK_STUDENT.gpa}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Total Credits Earned</p>
                  <p className="text-3xl font-black">102</p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-medium text-white/60 leading-relaxed italic">
                  "You are in the top 5% of your batch. Keep up the excellent work!"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#003366] mb-6">GPA Calculator</h3>
            <p className="text-sm text-gray-500 mb-6">Predict your CGPA by entering expected grades for current courses.</p>
            <button className="w-full py-4 bg-gray-50 text-[#003366] rounded-2xl font-bold hover:bg-gray-100 transition-all border border-gray-100">
              Open Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
