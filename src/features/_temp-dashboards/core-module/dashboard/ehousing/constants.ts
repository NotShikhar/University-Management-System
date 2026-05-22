export const ROLES = [
  { label: 'Admin View', value: 'admin', icon: 'pi pi-shield' },
  { label: 'Employee View', value: 'employee', icon: 'pi pi-user' },
];

export const ADMIN_KPIS = [
  {
    label: 'Total Applications',
    value: '1,240',
    sub: 'Fresh: 800 | Upgrad.: 440',
    icon: 'pi-file',
    color: 'blue',
  },
  {
    label: 'Total Schemes',
    value: '12',
    sub: 'Housing Schemes',
    icon: 'pi-home',
    color: 'indigo',
  },
  {
    label: 'Occupied houses',
    value: '942',
    sub: 'Allotted',
    icon: 'pi-check-square',
    color: 'green',
  },
  {
    label: 'Vacant houses',
    value: '108',
    sub: 'Available',
    icon: 'pi-box',
    color: 'amber',
  },
];

export const RECENT_APPLICATIONS = [
  {
    id: 1,
    name: 'Dr. Ramesh Kumar',
    type: 'Fresh Allocation',
    status: 'Pending',
    date: '2026-05-20',
  },
  {
    id: 2,
    name: 'Smt. Seema Verma',
    type: 'Upgradation',
    status: 'Allotted',
    date: '2026-05-18',
  },
  {
    id: 3,
    name: 'Mr. Anuj Singh',
    type: 'Relocation',
    status: 'Rejected',
    date: '2026-05-15',
  },
  {
    id: 4,
    name: 'Dr. Anita Desai',
    type: 'Fresh Allocation',
    status: 'Under Review',
    date: '2026-05-12',
  },
];

export const EMPLOYEE_KPIS = [
  {
    label: 'My Applications',
    value: '2',
    sub: 'Pending: 1 | Confirmed: 1',
    icon: 'pi-file-edit',
    color: 'blue',
  },
  {
    label: 'Active Schemes',
    value: '4',
    sub: 'Apply Now',
    icon: 'pi-map',
    color: 'indigo',
  },
];

export const INVENTORY_DATA = {
  labels: ['Occupied', 'Vacant', 'Maintenance'],
  datasets: [
    {
      data: [942, 108, 45],
      backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
    },
  ],
};

export const SCHEMES = [
  {
    title: 'Type-IV Housing Scheme',
    deadline: '2026-06-15',
    status: 'Priority',
  },
  {
    title: 'West Campus Expansion',
    deadline: '2026-07-01',
    status: 'Open',
  },
  {
    title: 'Relocation Pool 2026',
    deadline: 'Ends in 2 days',
    status: 'Urgent',
  },
];
