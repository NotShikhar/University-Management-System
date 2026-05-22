export const KPIS = [
  {
    label: 'Total Mails Sent (Combined)',
    value: '84,210',
    sub: 'Student + Employees',
    icon: 'pi-envelope',
    color: 'blue',
  },
  {
    label: 'Mails to Students',
    value: '62,150',
    sub: 'Academic & Admin',
    icon: 'pi-user',
    color: 'indigo',
  },
  {
    label: 'Mails to Employees',
    value: '22,060',
    sub: 'Staff & Faculty',
    icon: 'pi-briefcase',
    color: 'teal',
  },
];

export const VOLUME_DATA = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Student Mails',
      data: [4500, 5200, 4800, 6100, 5800, 3200, 2100],
      fill: false,
      borderColor: '#6366f1',
      tension: 0.4,
    },
    {
      label: 'Employee Mails',
      data: [1200, 1500, 1400, 1800, 1600, 800, 500],
      fill: false,
      borderColor: '#14b8a6',
      tension: 0.4,
    },
  ],
};

export const DISTRIBUTION_DATA = {
  labels: ['Student Mails', 'Employee Mails'],
  datasets: [
    {
      data: [62150, 22060],
      backgroundColor: ['#6366f1', '#14b8a6'],
      hoverBackgroundColor: ['#4f46e5', '#0d9488'],
    },
  ],
};

export const RECENT_HISTORY = [
  {
    id: 1,
    subject: 'Semester Registration Reminder',
    target: 'Students',
    count: '12,500',
    status: 'Delivered',
    date: '2026-05-21 10:30 AM',
  },
  {
    id: 2,
    subject: 'Monthly Salary Slip - May 2026',
    target: 'Employees',
    count: '4,200',
    status: 'Delivered',
    date: '2026-05-21 09:00 AM',
  },
  {
    id: 3,
    subject: 'New Housing Scheme Announcement',
    target: 'Employees',
    count: '4,200',
    status: 'Delivered',
    date: '2026-05-20 02:15 PM',
  },
  {
    id: 4,
    subject: 'Campus Maintenance Notice',
    target: 'Combined',
    count: '16,700',
    status: 'Delivered',
    date: '2026-05-20 11:00 AM',
  },
];
