import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type EventCategory = 'exam' | 'event' | 'holiday' | 'deadline' | 'meeting';

interface CalendarEvent {
  date: number;
  month: number;
  title: string;
  time?: string;
  category: EventCategory;
  description?: string;
  location?: string;
}

const CATEGORY_STYLES: Record<
  EventCategory,
  { dot: string; badge: string; label: string }
> = {
  exam: { dot: 'bg-red-400', badge: 'bg-red-50 text-red-600', label: 'Exam' },
  event: {
    dot: 'bg-blue-400',
    badge: 'bg-blue-50 text-blue-600',
    label: 'Event',
  },
  holiday: {
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-50 text-emerald-600',
    label: 'Holiday',
  },
  deadline: {
    dot: 'bg-amber-400',
    badge: 'bg-amber-50 text-amber-600',
    label: 'Deadline',
  },
  meeting: {
    dot: 'bg-purple-400',
    badge: 'bg-purple-50 text-purple-600',
    label: 'Meeting',
  },
};

const EVENTS: CalendarEvent[] = [
  // ───── January (12 events) ─────
  {
    date: 1,
    month: 0,
    title: 'New Year',
    category: 'holiday',
    description: 'University closed for New Year celebration',
  },
  {
    date: 2,
    month: 0,
    title: 'Campus Cleanliness Drive',
    category: 'event',
    time: '08:00 AM',
    location: 'Entire Campus',
  },
  {
    date: 5,
    month: 0,
    title: 'Department HoD Meeting',
    category: 'meeting',
    time: '10:00 AM',
    location: 'Conference Room',
  },
  {
    date: 10,
    month: 0,
    title: 'Winter Semester Registration Ends',
    category: 'deadline',
    time: '05:00 PM',
  },
  {
    date: 12,
    month: 0,
    title: 'Freshers Welcome',
    category: 'event',
    time: '10:00 AM',
    description: 'Welcome ceremony for new arrivals',
    location: 'Main Auditorium',
  },
  {
    date: 15,
    month: 0,
    title: 'Semester 1 Begins',
    category: 'event',
    description: 'Classes start for Spring semester',
  },
  {
    date: 18,
    month: 0,
    title: 'Library Orientation',
    category: 'event',
    time: '02:00 PM',
    location: 'Central Library',
  },
  {
    date: 20,
    month: 0,
    title: 'Academic Council Meeting',
    category: 'meeting',
    time: '11:00 AM',
    location: 'Board Room',
  },
  {
    date: 22,
    month: 0,
    title: 'Scholarship Application Deadline',
    category: 'deadline',
    time: '11:59 PM',
  },
  {
    date: 25,
    month: 0,
    title: 'Blood Donation Camp',
    category: 'event',
    time: '09:00 AM',
    location: 'Health Center',
  },
  {
    date: 26,
    month: 0,
    title: 'Republic Day',
    category: 'holiday',
    description: 'Celebration with flag hoisting',
  },
  {
    date: 28,
    month: 0,
    title: 'Department Club Registrations Close',
    category: 'deadline',
    time: '04:00 PM',
  },
  {
    date: 30,
    month: 0,
    title: 'Monthly Faculty Review',
    category: 'meeting',
    time: '02:30 PM',
    location: 'Dean Office',
  },

  // ───── February (11 events) ─────
  {
    date: 3,
    month: 1,
    title: 'Unit Test 1 begins',
    category: 'exam',
    time: '09:00 AM',
    description: 'First unit tests across all departments',
  },
  {
    date: 5,
    month: 1,
    title: 'Career Counselling Workshop',
    category: 'event',
    time: '10:00 AM',
    location: 'Seminar Hall',
  },
  {
    date: 7,
    month: 1,
    title: 'Sports Committee Meeting',
    category: 'meeting',
    time: '03:00 PM',
    location: 'Sports Complex',
  },
  {
    date: 10,
    month: 1,
    title: 'Mid-Term Exams Begin',
    category: 'exam',
    time: '09:00 AM',
    description: 'Mid-term examinations across all departments',
  },
  {
    date: 12,
    month: 1,
    title: 'Entrepreneurship Cell Meetup',
    category: 'event',
    time: '02:00 PM',
    location: 'Incubation Center',
  },
  {
    date: 14,
    month: 1,
    title: 'Faculty Meeting',
    category: 'meeting',
    time: '02:00 PM',
    location: 'Conference Hall A',
  },
  {
    date: 18,
    month: 1,
    title: 'Photography Exhibition',
    category: 'event',
    time: '10:00 AM',
    location: 'Art Gallery',
  },
  {
    date: 20,
    month: 1,
    title: 'Cultural Fest',
    category: 'event',
    time: '10:00 AM',
    description: 'Annual cultural festival with competitions',
    location: 'Main Auditorium',
  },
  {
    date: 22,
    month: 1,
    title: 'Debate Competition Finals',
    category: 'event',
    time: '11:00 AM',
    location: 'Seminar Hall',
  },
  {
    date: 25,
    month: 1,
    title: 'Hostel Committee Meeting',
    category: 'meeting',
    time: '05:00 PM',
    location: 'Hostel Warden Office',
  },
  { date: 28, month: 1, title: 'Maha Shivaratri', category: 'holiday' },

  // ───── March (12 events) ─────
  {
    date: 2,
    month: 2,
    title: 'Project Proposal Submission',
    category: 'deadline',
    time: '11:59 PM',
  },
  {
    date: 5,
    month: 2,
    title: 'Science Exhibition',
    category: 'event',
    time: '09:00 AM',
    location: 'Science Block',
  },
  {
    date: 8,
    month: 2,
    title: 'Project Submissions Due',
    category: 'deadline',
    time: '11:59 PM',
  },
  {
    date: 10,
    month: 2,
    title: 'Industrial Visit - Tech Park',
    category: 'event',
    time: '07:00 AM',
    location: 'Tech Park',
  },
  {
    date: 12,
    month: 2,
    title: 'Guest Lecture: Data Science',
    category: 'event',
    time: '02:00 PM',
    location: 'CS Department',
  },
  {
    date: 14,
    month: 2,
    title: 'Holi Break',
    category: 'holiday',
    description: 'University closed for Holi',
  },
  {
    date: 16,
    month: 2,
    title: 'Alumni Meet',
    category: 'event',
    time: '11:00 AM',
    location: 'Convention Center',
  },
  {
    date: 18,
    month: 2,
    title: 'Research Paper Submission Deadline',
    category: 'deadline',
    time: '05:00 PM',
  },
  {
    date: 20,
    month: 2,
    title: 'IQAC Meeting',
    category: 'meeting',
    time: '10:00 AM',
    location: 'Quality Assurance Office',
  },
  {
    date: 22,
    month: 2,
    title: 'Department Review Meeting',
    category: 'meeting',
    time: '11:00 AM',
    location: 'Dean Office',
  },
  {
    date: 25,
    month: 2,
    title: 'NSS Camp',
    category: 'event',
    description: 'Week-long NSS camp in adopted village',
  },
  {
    date: 28,
    month: 2,
    title: 'Monthly Progress Report Due',
    category: 'deadline',
    time: '04:00 PM',
  },
  {
    date: 30,
    month: 2,
    title: 'Cultural Committee Meeting',
    category: 'meeting',
    time: '03:00 PM',
    location: 'Student Affairs',
  },

  // ───── April (11 events) ─────
  {
    date: 1,
    month: 3,
    title: 'Admission Forms Open',
    category: 'event',
    description: 'Online admission forms for new academic year',
  },
  {
    date: 3,
    month: 3,
    title: 'Tech Fest - Hackathon',
    category: 'event',
    time: '09:00 AM',
    location: 'Computer Center',
  },
  {
    date: 5,
    month: 3,
    title: 'Guest Lecture - AI in Education',
    category: 'event',
    time: '02:00 PM',
    location: 'Seminar Hall',
  },
  {
    date: 8,
    month: 3,
    title: 'Unit Test 2',
    category: 'exam',
    time: '09:00 AM',
  },
  {
    date: 10,
    month: 3,
    title: 'NAAC Preparation Meeting',
    category: 'meeting',
    time: '11:00 AM',
    location: 'Admin Block',
  },
  {
    date: 12,
    month: 3,
    title: 'Poster Presentation Competition',
    category: 'event',
    time: '10:00 AM',
    location: 'Lobby',
  },
  { date: 14, month: 3, title: 'Ambedkar Jayanti', category: 'holiday' },
  {
    date: 16,
    month: 3,
    title: 'Parent-Teacher Meeting',
    category: 'meeting',
    time: '02:00 PM',
    location: 'All Departments',
  },
  {
    date: 18,
    month: 3,
    title: 'Coding Club Workshop',
    category: 'event',
    time: '03:00 PM',
    location: 'Lab 3',
  },
  {
    date: 20,
    month: 3,
    title: 'End-Term Exam Schedule Released',
    category: 'event',
  },
  {
    date: 22,
    month: 3,
    title: 'Cleanliness & Green Drive',
    category: 'event',
    time: '08:00 AM',
  },
  {
    date: 25,
    month: 3,
    title: 'Anti-Ragging Committee Meeting',
    category: 'meeting',
    time: '10:00 AM',
    location: 'Dean Office',
  },
  {
    date: 28,
    month: 3,
    title: 'Library Book Return Deadline',
    category: 'deadline',
    time: '05:00 PM',
  },

  // ───── May (10 events) ─────
  { date: 1, month: 4, title: 'Labour Day', category: 'holiday' },
  {
    date: 3,
    month: 4,
    title: 'Exam Review Session',
    category: 'event',
    time: '10:00 AM',
    location: 'All Departments',
  },
  {
    date: 5,
    month: 4,
    title: 'Last Working Day for Teaching',
    category: 'event',
  },
  {
    date: 8,
    month: 4,
    title: 'Exam Form Submission Deadline',
    category: 'deadline',
    time: '11:59 PM',
  },
  {
    date: 10,
    month: 4,
    title: 'End-Term Exams Begin',
    category: 'exam',
    time: '09:00 AM',
    description: 'End-term examinations commence',
  },
  {
    date: 12,
    month: 4,
    title: 'Library Summer Schedule Starts',
    category: 'event',
  },
  {
    date: 15,
    month: 4,
    title: 'Sports Meet',
    category: 'event',
    time: '08:00 AM',
    description: 'Annual sports meet',
    location: 'University Grounds',
  },
  {
    date: 18,
    month: 4,
    title: 'Exam Evaluation Week',
    category: 'exam',
    time: '09:00 AM',
  },
  { date: 22, month: 4, title: 'Campus Maintenance Begins', category: 'event' },
  {
    date: 25,
    month: 4,
    title: 'Result Declaration',
    category: 'event',
    description: 'End-term results published online',
  },
  {
    date: 28,
    month: 4,
    title: 'Departmental Annual Report Due',
    category: 'deadline',
    time: '05:00 PM',
  },
  {
    date: 30,
    month: 4,
    title: 'Hostel Checkout Deadline',
    category: 'deadline',
    time: '12:00 PM',
  },

  // ───── June (10 events) ─────
  {
    date: 1,
    month: 5,
    title: 'Summer Break Begins',
    category: 'holiday',
    description: 'University closed for summer',
  },
  {
    date: 5,
    month: 5,
    title: 'Admission Helpline Opens',
    category: 'event',
    description: 'Phone and email support for admissions',
  },
  {
    date: 8,
    month: 5,
    title: 'Infrastructure Audit',
    category: 'meeting',
    time: '09:00 AM',
    location: 'All Buildings',
  },
  {
    date: 10,
    month: 5,
    title: 'Faculty Development Program',
    category: 'meeting',
    time: '10:00 AM',
    location: 'Training Center',
  },
  {
    date: 12,
    month: 5,
    title: 'Provisional Merit List Published',
    category: 'event',
  },
  {
    date: 15,
    month: 5,
    title: 'Faculty Development Program',
    category: 'meeting',
    time: '10:00 AM',
    description: 'Week-long FDP on research methodology',
    location: 'Training Center',
  },
  {
    date: 18,
    month: 5,
    title: 'Admission Counselling Session',
    category: 'event',
    time: '11:00 AM',
    location: 'Admission Office',
  },
  {
    date: 20,
    month: 5,
    title: 'Fee Payment Deadline',
    category: 'deadline',
    time: '05:00 PM',
    description: 'Last date for fee payment with late fee',
  },
  {
    date: 22,
    month: 5,
    title: 'Campus Tour for Parents',
    category: 'event',
    time: '10:00 AM',
  },
  {
    date: 25,
    month: 5,
    title: 'Budget Planning Meeting',
    category: 'meeting',
    time: '02:00 PM',
    location: 'Finance Office',
  },
  {
    date: 28,
    month: 5,
    title: 'Second Merit List Published',
    category: 'event',
  },
  { date: 30, month: 5, title: 'Hostel Allocation Starts', category: 'event' },

  // ───── July (11 events) ─────
  {
    date: 1,
    month: 6,
    title: 'Academic Year Begins',
    category: 'event',
    description: 'New academic year commences',
  },
  { date: 3, month: 6, title: 'Semester 2 Registration', category: 'event' },
  {
    date: 5,
    month: 6,
    title: 'Department Budget Approval',
    category: 'meeting',
    time: '10:00 AM',
    location: 'Finance Office',
  },
  { date: 8, month: 6, title: 'Class Committee Formation', category: 'event' },
  {
    date: 10,
    month: 6,
    title: 'Orientation Day',
    category: 'event',
    time: '09:00 AM',
    description: 'Welcome ceremony for new students',
    location: 'Main Auditorium',
  },
  { date: 12, month: 6, title: 'Library Card Distribution', category: 'event' },
  {
    date: 15,
    month: 6,
    title: 'Course Preference Submission',
    category: 'deadline',
    time: '03:00 PM',
  },
  {
    date: 18,
    month: 6,
    title: 'Guest Lecture: Career Planning',
    category: 'event',
    time: '02:00 PM',
    location: 'Seminar Hall',
  },
  {
    date: 20,
    month: 6,
    title: 'Course Registration Deadline',
    category: 'deadline',
    time: '11:59 PM',
  },
  {
    date: 22,
    month: 6,
    title: 'Anti-Ragging Awareness Program',
    category: 'event',
    time: '10:00 AM',
    location: 'Main Auditorium',
  },
  {
    date: 25,
    month: 6,
    title: 'First Staff Council Meeting',
    category: 'meeting',
    time: '11:00 AM',
    location: 'Board Room',
  },
  {
    date: 28,
    month: 6,
    title: 'Hostel Inauguration',
    category: 'event',
    time: '10:00 AM',
    location: 'Hostel Complex',
  },
  {
    date: 30,
    month: 6,
    title: 'Monthly Attendance Report Due',
    category: 'deadline',
    time: '04:00 PM',
  },

  // ───── August (11 events) ─────
  {
    date: 2,
    month: 7,
    title: 'Unit Test 1',
    category: 'exam',
    time: '09:00 AM',
  },
  {
    date: 5,
    month: 7,
    title: 'Cultural Committee Formation',
    category: 'event',
  },
  {
    date: 8,
    month: 7,
    title: 'Faculty Research Proposal Review',
    category: 'meeting',
    time: '02:00 PM',
    location: 'Research Cell',
  },
  {
    date: 10,
    month: 7,
    title: 'Inter-Department Sports Begin',
    category: 'event',
    time: '04:00 PM',
    location: 'Sports Complex',
  },
  {
    date: 12,
    month: 7,
    title: "Women's Grievance Cell Meeting",
    category: 'meeting',
    time: '11:00 AM',
    location: 'Admin Block',
  },
  {
    date: 15,
    month: 7,
    title: 'Independence Day Celebration',
    category: 'event',
    time: '08:00 AM',
    description: 'Flag hoisting and cultural program',
    location: 'University Grounds',
  },
  {
    date: 17,
    month: 7,
    title: 'Essay Writing Competition',
    category: 'event',
    time: '10:00 AM',
    location: 'Arts Block',
  },
  { date: 19, month: 7, title: 'Raksha Bandhan', category: 'holiday' },
  {
    date: 22,
    month: 7,
    title: 'Industrial Visit Coordination Meeting',
    category: 'meeting',
    time: '03:00 PM',
    location: 'Placement Cell',
  },
  {
    date: 24,
    month: 7,
    title: 'Moot Court Competition',
    category: 'event',
    time: '09:00 AM',
    location: 'Law Department',
  },
  { date: 26, month: 7, title: 'Janmashtami', category: 'holiday' },
  {
    date: 28,
    month: 7,
    title: 'Club Activities Fair',
    category: 'event',
    time: '10:00 AM',
    location: 'Student Center',
  },
  {
    date: 30,
    month: 7,
    title: 'Library Fine Waiver Deadline',
    category: 'deadline',
    time: '05:00 PM',
  },

  // ───── September (12 events) ─────
  {
    date: 1,
    month: 8,
    title: 'Quiz Competition Finals',
    category: 'event',
    time: '11:00 AM',
    location: 'Main Auditorium',
  },
  {
    date: 3,
    month: 8,
    title: 'NAAC Visit Day 1',
    category: 'meeting',
    time: '09:00 AM',
    description: 'NAAC accreditation visit begins',
  },
  {
    date: 5,
    month: 8,
    title: 'Teachers Day',
    category: 'event',
    description: 'Celebration honoring faculty members',
  },
  {
    date: 7,
    month: 8,
    title: 'NAAC Visit Day 2',
    category: 'meeting',
    time: '09:00 AM',
  },
  {
    date: 8,
    month: 8,
    title: 'Blood Group Identification Camp',
    category: 'event',
    time: '09:00 AM',
    location: 'Health Center',
  },
  {
    date: 10,
    month: 8,
    title: 'Mid-Term Exams Begin',
    category: 'exam',
    time: '09:00 AM',
    description: 'Mid-term examinations',
  },
  {
    date: 12,
    month: 8,
    title: 'Photography Competition Results',
    category: 'event',
    time: '03:00 PM',
  },
  {
    date: 15,
    month: 8,
    title: 'Mid-Term Exams End',
    category: 'exam',
    time: '12:00 PM',
  },
  {
    date: 17,
    month: 8,
    title: 'Student Feedback Collection Starts',
    category: 'event',
  },
  {
    date: 20,
    month: 8,
    title: 'Research Symposium',
    category: 'event',
    time: '10:00 AM',
    description: 'Inter-department research symposium',
    location: 'Convention Center',
  },
  {
    date: 22,
    month: 8,
    title: 'Hindi Diwas Celebration',
    category: 'event',
    time: '10:00 AM',
  },
  {
    date: 25,
    month: 8,
    title: 'Self-Defense Workshop for Women',
    category: 'event',
    time: '02:00 PM',
    location: 'Sports Complex',
  },
  {
    date: 27,
    month: 8,
    title: 'Student Council Elections',
    category: 'event',
    time: '09:00 AM',
    description: 'Voting for student council representatives',
  },
  {
    date: 29,
    month: 8,
    title: 'Feedback Collection Ends',
    category: 'deadline',
    time: '05:00 PM',
  },

  // ───── October (12 events) ─────
  { date: 1, month: 9, title: 'Gandhi Jayanti', category: 'holiday' },
  {
    date: 3,
    month: 9,
    title: 'Cleanliness Campaign',
    category: 'event',
    time: '08:00 AM',
  },
  {
    date: 5,
    month: 9,
    title: 'Project Mid-Term Review',
    category: 'meeting',
    time: '10:00 AM',
    location: 'Department Labs',
  },
  {
    date: 7,
    month: 9,
    title: 'Wall Magazine Competition',
    category: 'event',
    time: '09:00 AM',
  },
  {
    date: 10,
    month: 9,
    title: 'Industry Visit',
    category: 'event',
    time: '07:00 AM',
    location: 'Various companies',
  },
  {
    date: 12,
    month: 9,
    title: 'Skill Development Workshop',
    category: 'event',
    time: '10:00 AM',
    location: 'Training Hall',
  },
  {
    date: 15,
    month: 9,
    title: 'Research Paper Submission Deadline',
    category: 'deadline',
    time: '11:59 PM',
  },
  {
    date: 18,
    month: 9,
    title: 'Cultural Night Rehearsal',
    category: 'event',
    time: '05:00 PM',
    location: 'Auditorium',
  },
  { date: 20, month: 9, title: 'Dussehra Break', category: 'holiday' },
  {
    date: 22,
    month: 9,
    title: 'Alumni Interaction Session',
    category: 'event',
    time: '11:00 AM',
    location: 'Conference Hall',
  },
  {
    date: 25,
    month: 9,
    title: 'Placement Drive',
    category: 'event',
    time: '09:00 AM',
    description: 'Campus recruitment drive by TCS, Infosys',
    location: 'Placement Cell',
  },
  {
    date: 27,
    month: 9,
    title: 'Guest Lecture: Cybersecurity',
    category: 'event',
    time: '02:00 PM',
    location: 'CS Lab',
  },
  {
    date: 30,
    month: 9,
    title: 'Hostel Mess Committee Meeting',
    category: 'meeting',
    time: '06:00 PM',
    location: 'Hostel Mess',
  },

  // ───── November (13 events) ─────
  {
    date: 1,
    month: 10,
    title: 'Diwali Break Begins',
    category: 'holiday',
    description: 'University closed for Diwali',
  },
  {
    date: 2,
    month: 10,
    title: 'Diwali Celebration Event',
    category: 'event',
    time: '06:00 PM',
    location: 'Main Ground',
  },
  { date: 5, month: 10, title: 'University Reopens', category: 'event' },
  {
    date: 7,
    month: 10,
    title: 'End-Term Practical Exams Begin',
    category: 'exam',
    time: '09:00 AM',
  },
  {
    date: 10,
    month: 10,
    title: 'End-Term Theory Exams Begin',
    category: 'exam',
    time: '09:00 AM',
    description: 'End-term theory examinations begin',
  },
  {
    date: 11,
    month: 10,
    title: 'Exam - Computer Science',
    category: 'exam',
    time: '09:00 AM',
    location: 'CS Department',
  },
  {
    date: 12,
    month: 10,
    title: 'Exam - Mathematics',
    category: 'exam',
    time: '09:00 AM',
    location: 'Math Block',
  },
  {
    date: 14,
    month: 10,
    title: 'Childrens Day Celebration',
    category: 'event',
  },
  {
    date: 16,
    month: 10,
    title: 'Exam - Physics',
    category: 'exam',
    time: '09:00 AM',
    location: 'Science Block',
  },
  {
    date: 18,
    month: 10,
    title: 'Exam - Chemistry',
    category: 'exam',
    time: '09:00 AM',
    location: 'Science Block',
  },
  {
    date: 20,
    month: 10,
    title: 'Project Exhibition',
    category: 'event',
    time: '10:00 AM',
    description: 'Final year project exhibition',
    location: 'Engineering Block',
  },
  {
    date: 22,
    month: 10,
    title: 'Exam - Mechanical',
    category: 'exam',
    time: '09:00 AM',
    location: 'Mechanical Block',
  },
  { date: 25, month: 10, title: 'Guru Nanak Jayanti', category: 'holiday' },
  {
    date: 28,
    month: 10,
    title: 'Library Books Return Deadline',
    category: 'deadline',
    time: '05:00 PM',
  },
  {
    date: 30,
    month: 10,
    title: 'Hostel Room Renewal Deadline',
    category: 'deadline',
    time: '05:00 PM',
  },

  // ───── December (13 events) ─────
  {
    date: 1,
    month: 11,
    title: 'Exam Evaluation Begins',
    category: 'exam',
    time: '09:00 AM',
  },
  {
    date: 3,
    month: 11,
    title: 'Departmental Meeting - Results',
    category: 'meeting',
    time: '11:00 AM',
    location: 'Conference Hall',
  },
  {
    date: 5,
    month: 11,
    title: 'Annual Day Rehearsals',
    category: 'event',
    time: '02:00 PM',
    description: 'Rehearsals for annual day program',
  },
  {
    date: 7,
    month: 11,
    title: 'Industry-Institute Interaction Meet',
    category: 'meeting',
    time: '10:00 AM',
    location: 'Board Room',
  },
  {
    date: 8,
    month: 11,
    title: 'Cultural Night Rehearsal',
    category: 'event',
    time: '05:00 PM',
    location: 'Auditorium',
  },
  {
    date: 10,
    month: 11,
    title: 'Staff Council Year-End Meeting',
    category: 'meeting',
    time: '02:00 PM',
    location: 'Admin Block',
  },
  {
    date: 12,
    month: 11,
    title: 'Merit Scholarship Distribution',
    category: 'event',
    time: '10:00 AM',
    location: 'Main Auditorium',
  },
  {
    date: 15,
    month: 11,
    title: 'Annual Day Celebration',
    category: 'event',
    time: '05:00 PM',
    description: 'Grand annual day with cultural performances',
    location: 'Main Auditorium',
  },
  {
    date: 17,
    month: 11,
    title: 'Fee Concession Application Deadline',
    category: 'deadline',
    time: '05:00 PM',
  },
  {
    date: 20,
    month: 11,
    title: 'Result Publication',
    category: 'event',
    description: 'End-term results published online',
  },
  { date: 22, month: 11, title: 'Hostel Closing Date', category: 'event' },
  {
    date: 25,
    month: 11,
    title: 'Christmas Break Begins',
    category: 'holiday',
    description: 'University closed for Christmas',
  },
  {
    date: 26,
    month: 11,
    title: 'Christmas Celebration',
    category: 'event',
    time: '06:00 PM',
    location: 'Main Ground',
  },
  {
    date: 28,
    month: 11,
    title: 'Year-End Audit',
    category: 'meeting',
    time: '09:00 AM',
    location: 'Finance Office',
  },
  {
    date: 30,
    month: 11,
    title: 'New Year Celebration',
    category: 'event',
    time: '07:00 PM',
    location: 'Main Ground',
  },
  { date: 31, month: 11, title: 'Year-End Closed', category: 'holiday' },
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function ViewEvents() {
  const navigate = useNavigate();
  const today = useMemo(() => new Date(), []);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(
    today.getDate()
  );
  const [animDir, setAnimDir] = useState(0);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthEvents = EVENTS.filter(e => e.month === month);
  const selectedEvents = monthEvents.filter(e => e.date === selectedDay);

  function prevMonth() {
    setAnimDir(-1);
    setMonth(m => (m === 0 ? (setYear(y => y - 1), 11) : m - 1));
    setSelectedDay(null);
  }
  function nextMonth() {
    setAnimDir(1);
    setMonth(m => (m === 11 ? (setYear(y => y + 1), 0) : m + 1));
    setSelectedDay(null);
  }

  function hasEvents(day: number) {
    return monthEvents.some(e => e.date === day);
  }

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const e of monthEvents) {
      counts[e.category] = (counts[e.category] || 0) + 1;
    }
    return counts;
  }, [monthEvents]);

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="View Events" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          Get Involved &gt; View Events
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Campus Calendar</h1>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Browse academic events, exams, holidays and activities
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Month/Year Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50">
            <button
              onClick={prevMonth}
              className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-center transition-colors"
            >
              <i className="pi pi-chevron-left text-xs text-gray-500" />
            </button>
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900">
                {MONTHS[month]}
              </h2>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-xl border border-gray-100">
                <button
                  onClick={() => setYear(y => y - 1)}
                  className="text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <i className="pi pi-chevron-left" />
                </button>
                <span className="text-sm font-bold text-gray-700 w-14 text-center">
                  {year}
                </span>
                <button
                  onClick={() => setYear(y => y + 1)}
                  className="text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <i className="pi pi-chevron-right" />
                </button>
              </div>
            </div>
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-center transition-colors"
            >
              <i className="pi pi-chevron-right text-xs text-gray-500" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 px-6 pt-6 pb-3">
            {DAYS.map(d => (
              <div
                key={d}
                className="text-center text-[10px] font-bold text-gray-300 uppercase tracking-wider"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="px-6 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${year}-${month}`}
                initial={{ opacity: 0, x: animDir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: animDir * -40 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="grid grid-cols-7 gap-1.5"
              >
                {/* Empty cells */}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {/* Day cells */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isToday =
                    day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear();
                  const isSelected = day === selectedDay;
                  const hasEv = hasEvents(day);
                  const dayEvents = monthEvents.filter(e => e.date === day);

                  return (
                    <motion.button
                      key={day}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedDay(day)}
                      className={`
                        relative flex flex-col items-center justify-center py-3 rounded-xl transition-all cursor-pointer
                        ${
                          isSelected
                            ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                            : isToday
                              ? 'bg-gray-50 border border-gray-100'
                              : 'hover:bg-gray-50'
                        }
                        ${!isSelected ? 'text-gray-700' : ''}
                      `}
                    >
                      <span
                        className={`text-sm font-bold leading-none ${isSelected ? 'text-white' : ''}`}
                      >
                        {day}
                      </span>
                      {hasEv && (
                        <div className="flex gap-1 mt-1.5">
                          {dayEvents.slice(0, 3).map((e, idx) => (
                            <span
                              key={idx}
                              className={`w-1 h-1 rounded-full ${CATEGORY_STYLES[e.category].dot}`}
                            />
                          ))}
                          {dayEvents.length > 3 && (
                            <span
                              className={`text-[8px] font-bold ${isSelected ? 'text-white/60' : 'text-gray-300'}`}
                            >
                              +{dayEvents.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Legend */}
          <div className="px-8 py-4 border-t border-gray-50 bg-gray-50/50 flex flex-wrap gap-5">
            {Object.entries(CATEGORY_STYLES).map(([key, style]) => (
              <div key={key} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                <span className="text-[10px] font-bold text-gray-400">
                  {style.label}
                </span>
              </div>
            ))}
            <span className="text-[10px] text-gray-200 ml-auto">
              {monthEvents.length} event{monthEvents.length !== 1 ? 's' : ''}{' '}
              this month
            </span>
          </div>
        </div>

        {/* Events Panel */}
        <div className="lg:col-span-4 space-y-6">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
          >
            <h3 className="text-xs font-bold text-gray-900 mb-4">
              {MONTHS[month]} Overview
            </h3>
            <div className="space-y-3">
              {Object.entries(categoryCounts).map(([cat, count]) => (
                <div key={cat} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${CATEGORY_STYLES[cat as EventCategory].dot}`}
                    />
                    <span className="text-xs text-gray-500">
                      {CATEGORY_STYLES[cat as EventCategory].label}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-800">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Selected Day Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
          >
            <h3 className="text-xs font-bold text-gray-900 mb-4">
              {selectedDay
                ? `${MONTHS[month]} ${selectedDay}, ${year}`
                : 'Select a day'}
            </h3>
            {selectedEvents.length > 0 ? (
              <div className="space-y-3">
                {selectedEvents.map((ev, i) => (
                  <motion.div
                    key={`${ev.date}-${ev.title}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 rounded-xl border border-gray-50 bg-gray-50/50"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">
                        {ev.title}
                      </h4>
                      <span
                        className={`shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full ${CATEGORY_STYLES[ev.category].badge}`}
                      >
                        {CATEGORY_STYLES[ev.category].label}
                      </span>
                    </div>
                    {ev.description && (
                      <p className="text-[11px] text-gray-400 mb-2">
                        {ev.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-[10px] text-gray-300 font-medium">
                      {ev.time && (
                        <span className="flex items-center gap-1">
                          <i className="pi pi-clock" />
                          {ev.time}
                        </span>
                      )}
                      {ev.location && (
                        <span className="flex items-center gap-1">
                          <i className="pi pi-map-marker" />
                          {ev.location}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <i className="pi pi-calendar text-2xl text-gray-200 mb-2" />
                <p className="text-xs text-gray-300 font-medium">
                  {selectedDay
                    ? 'No events on this day'
                    : 'Click a date to view events'}
                </p>
              </div>
            )}
          </motion.div>

          {/* Quick Add */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <button
              onClick={() => navigate('/get-involved/add-event')}
              className="w-full flex items-center justify-center gap-3 py-4 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-2xl transition-colors"
            >
              <i className="pi pi-plus" />
              Add New Event
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
