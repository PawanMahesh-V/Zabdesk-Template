export interface Student {
  id: string;
  name: string;
  program: string;
  semester: number;
  campus: string;
  gpa: number;
  attendance: number;
  avatar?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  instructor: string;
  credits: number;
  attendance: number;
  grade?: string;
  announcements: number;
  assignments: number;
}

export interface Assignment {
  id: string;
  courseId: string;
  courseName: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  feedback?: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  courseName: string;
  room: string;
  type: 'Lecture' | 'Lab' | 'Seminar';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
}
