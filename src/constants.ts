import { Student, Course, Assignment, ScheduleItem, Notification } from './types';

export const MOCK_STUDENT: Student = {
  id: '2112101',
  name: 'Ahmed Khan',
  program: 'BS Computer Science',
  semester: 6,
  campus: 'Karachi (90 Campus)',
  gpa: 3.82,
  attendance: 88,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed'
};

export const MOCK_COURSES: Course[] = [
  { id: '1', code: 'CSC301', name: 'Software Engineering', instructor: 'Dr. Sarah Ahmed', credits: 3, attendance: 92, grade: 'A', announcements: 2, assignments: 1 },
  { id: '2', code: 'CSC302', name: 'Database Systems', instructor: 'Prof. Usman Ali', credits: 4, attendance: 85, grade: 'B+', announcements: 1, assignments: 0 },
  { id: '3', code: 'CSC303', name: 'Artificial Intelligence', instructor: 'Dr. Faisal Qureshi', credits: 3, attendance: 78, grade: 'A-', announcements: 4, assignments: 2 },
  { id: '4', code: 'MTH201', name: 'Linear Algebra', instructor: 'Ms. Hira Shah', credits: 3, attendance: 95, grade: 'A', announcements: 0, assignments: 1 },
  { id: '5', code: 'ENG101', name: 'Technical Writing', instructor: 'Mr. Bilal Raza', credits: 2, attendance: 90, grade: 'B', announcements: 1, assignments: 1 },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  { id: 'a1', courseId: '1', courseName: 'Software Engineering', title: 'SRS Documentation', dueDate: '2026-04-10T23:59:59', status: 'pending' },
  { id: 'a2', courseId: '3', courseName: 'Artificial Intelligence', title: 'Neural Network Implementation', dueDate: '2026-04-15T23:59:59', status: 'pending' },
  { id: 'a3', courseId: '2', courseName: 'Database Systems', title: 'SQL Normalization Project', dueDate: '2026-03-25T23:59:59', status: 'submitted' },
  { id: 'a4', courseId: '4', courseName: 'Linear Algebra', title: 'Matrix Operations Quiz', dueDate: '2026-03-20T23:59:59', status: 'graded', grade: '95/100', feedback: 'Excellent work on the transformations.' },
];

export const MOCK_SCHEDULE: ScheduleItem[] = [
  { id: 's1', day: 'Monday', startTime: '08:30', endTime: '10:00', courseName: 'Software Engineering', room: 'Lab 4', type: 'Lecture' },
  { id: 's2', day: 'Monday', startTime: '10:15', endTime: '11:45', courseName: 'Database Systems', room: 'Room 201', type: 'Lecture' },
  { id: 's3', day: 'Tuesday', startTime: '08:30', endTime: '11:30', courseName: 'Artificial Intelligence', room: 'Lab 1', type: 'Lab' },
  { id: 's4', day: 'Wednesday', startTime: '12:00', endTime: '13:30', courseName: 'Linear Algebra', room: 'Room 305', type: 'Lecture' },
  { id: 's5', day: 'Thursday', startTime: '14:00', endTime: '15:30', courseName: 'Technical Writing', room: 'Room 102', type: 'Lecture' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'New Grade Posted', message: 'Your grade for AI Assignment 1 has been posted.', time: '2 hours ago', type: 'success', read: false },
  { id: 'n2', title: 'Attendance Alert', message: 'Your attendance in AI is below 80%.', time: '1 day ago', type: 'warning', read: false },
  { id: 'n3', title: 'Fee Deadline', message: 'Last date for semester fee submission is April 15th.', time: '3 days ago', type: 'info', read: true },
];
