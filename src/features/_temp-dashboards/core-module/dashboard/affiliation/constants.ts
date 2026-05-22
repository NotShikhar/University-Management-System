export const KPIS = [
  {
    label: 'Registration Requests',
    value: '42',
    sub: 'New Colleges',
    icon: 'pi-id-card',
    color: 'blue',
  },
  {
    label: 'Profile Submissions',
    value: '156',
    sub: 'Verified: 120',
    icon: 'pi-building',
    color: 'indigo',
  },
  {
    label: 'Ongoing Apps',
    value: '88',
    sub: 'Under Review',
    icon: 'pi-file-import',
    color: 'purple',
  },
  {
    label: 'Fee Collection',
    value: '₹4.2M',
    sub: 'May 2026',
    icon: 'pi-money-bill',
    color: 'emerald',
  },
];

export const APPLICATIONS = [
  {
    id: 1,
    college: 'Larkin Arts College',
    type: 'Fresh Affiliation',
    date: '2026-05-18',
    reviewer: 'Dr. S. Mehta',
    status: 'Under Review',
  },
  {
    id: 2,
    college: 'St. Xavier Engineering',
    type: 'Extension',
    date: '2026-05-20',
    reviewer: 'Mr. A. Kapoor',
    status: 'Pending',
  },
  {
    id: 3,
    college: 'Imperial Law Institute',
    type: 'Renewal',
    date: '2026-05-15',
    reviewer: 'Dr. K. Sharma',
    status: 'Approved',
  },
  {
    id: 4,
    college: 'Metro Pharma College',
    type: 'Fresh Affiliation',
    date: '2026-05-12',
    reviewer: 'Unassigned',
    status: 'Rejected',
  },
  {
    id: 5,
    college: 'Global Business School',
    type: 'Extension',
    date: '2026-05-21',
    reviewer: 'Ms. R. Iyer',
    status: 'Draft',
  },
];

export const PAYMENT_REPORT = [
  {
    id: 'TXN8912',
    college: 'Larkin Arts',
    amount: '₹50,000',
    method: 'Net Banking',
    date: '2026-05-21',
  },
  {
    id: 'TXN8913',
    college: 'St. Xavier',
    amount: '₹25,000',
    method: 'UPI',
    date: '2026-05-20',
  },
  {
    id: 'TXN8914',
    college: 'Imperial Law',
    amount: '₹75,000',
    method: 'NEFT',
    date: '2026-05-20',
  },
];

export const REVENUE_DATA = {
  labels: ['Fresh', 'Renewal', 'Extension'],
  datasets: [
    {
      data: [54, 28, 18],
      backgroundColor: ['#6366f1', '#a855f7', '#ec4899'],
      hoverBackgroundColor: ['#4f46e5', '#9333ea', '#db2777'],
    },
  ],
};
