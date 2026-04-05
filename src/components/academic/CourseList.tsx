import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  FileText, 
  ChevronRight, 
  Star,
  Download,
  MessageCircle,
  Info
} from 'lucide-react';
import { MOCK_COURSES } from '../../constants';
import { cn } from '../../lib/utils';

export default function CourseList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<typeof MOCK_COURSES[0] | null>(null);

  const filteredCourses = MOCK_COURSES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#003366] tracking-tight">Academic Courses</h1>
          <p className="text-gray-500 font-medium">Manage your enrolled subjects and course materials.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none w-64 shadow-sm"
            />
          </div>
          <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-500 hover:text-blue-600 transition-colors shadow-sm">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedCourse(course)}
              className={cn(
                "p-6 rounded-[2.5rem] border transition-all cursor-pointer group relative overflow-hidden",
                selectedCourse?.id === course.id 
                  ? "bg-blue-600 border-blue-600 shadow-xl shadow-blue-900/20" 
                  : "bg-white border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md"
              )}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                    selectedCourse?.id === course.id ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                  )}>
                    <BookOpen size={24} />
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                    selectedCourse?.id === course.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  )}>
                    {course.code}
                  </div>
                </div>
                <h3 className={cn(
                  "text-xl font-bold mb-1 group-hover:translate-x-1 transition-transform",
                  selectedCourse?.id === course.id ? "text-white" : "text-[#003366]"
                )}>
                  {course.name}
                </h3>
                <p className={cn(
                  "text-sm font-medium mb-6",
                  selectedCourse?.id === course.id ? "text-white/70" : "text-gray-500"
                )}>
                  {course.instructor}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-current opacity-10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <FileText size={14} />
                      <span className="text-xs font-bold">{course.assignments} Tasks</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={14} />
                      <span className="text-xs font-bold">{course.attendance}%</span>
                    </div>
                  </div>
                  <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {selectedCourse ? (
              <motion.div
                key={selectedCourse.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm sticky top-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-[#003366]">Course Details</h3>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Star size={20} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Instructor</p>
                      <p className="text-sm font-bold text-[#003366]">{selectedCourse.instructor}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#003366] mb-4 flex items-center gap-2">
                      <Info size={16} className="text-blue-500" />
                      Course Materials
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Syllabus_2026.pdf', size: '1.2 MB' },
                        { name: 'Lecture_01_Intro.pptx', size: '4.5 MB' },
                      ].map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 group-hover:text-blue-600 transition-colors">
                              <FileText size={16} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-700">{file.name}</p>
                              <p className="text-[10px] font-medium text-gray-400">{file.size}</p>
                            </div>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <Download size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-gray-50 p-12 rounded-[2.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-300 mb-4 shadow-sm">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-400">Select a course to view details</h3>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
