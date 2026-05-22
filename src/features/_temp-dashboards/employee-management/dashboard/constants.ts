export const KPIS = [
  {
    label: 'Total Employees',
    value: '840',
    sub: 'Teaching: 450 | Non-Teaching: 390',
    icon: 'pi-users',
    color: 'blue',
  },
  {
    label: 'Posts Status',
    value: '1,200',
    sub: 'Sanctioned: 1.2k | Filled: 840 | Vacant: 360',
    icon: 'pi-briefcase',
    color: 'red',
  },
  {
    label: 'Active Status',
    value: '825',
    sub: 'Active: 825 | Inactive: 15',
    icon: 'pi-user-check',
    color: 'green',
  },
  {
    label: 'Pending Approvals',
    value: '12',
    sub: 'Profiles: 8 | Verification: 4',
    icon: 'pi-clock',
    color: 'orange',
  },
];

export const DEPARTMENT_DATA = {
  labels: ['Comp Sci', 'Mechanical', 'Civil', 'Physics', 'Chemistry', 'Admin'],
  datasets: [
    {
      label: 'Employee Count',
      data: [120, 95, 80, 60, 55, 110],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderRadius: 8,
    },
  ],
};

export const NATURE_DATA = {
  labels: ['Permanent', 'Contract', 'Probation', 'Guest'],
  datasets: [
    {
      data: [500, 200, 100, 40],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    },
  ],
};
