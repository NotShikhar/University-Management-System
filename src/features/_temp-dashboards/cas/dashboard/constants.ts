export const SESSIONS = ['2025-2026', '2024-2025'];

export const KPIS = [
  {
    label: 'APAR Applications',
    total: 120,
    pending: 45,
    completed: 75,
    color: 'blue',
  },
  {
    label: 'PBAS Applications',
    total: 85,
    pending: 20,
    completed: 65,
    color: 'purple',
  },
  {
    label: 'CAS Promotions',
    total: 42,
    pending: 15,
    completed: 27,
    color: 'orange',
  },
];

export const APPLICATIONS = [
  {
    id: 'APP101',
    name: 'Dr. John Watson',
    designation: 'Asst. Professor',
    type: 'CAS',
    session: '2025-26',
    stage: 'With HOD',
    status: 'In Progress',
    updated: '2h ago',
  },
  {
    id: 'APP102',
    name: 'Prof. Sherlock Holmes',
    designation: 'Professor',
    type: 'APAR',
    session: '2025-26',
    stage: 'With IQAC',
    status: 'Under Review',
    updated: '5h ago',
  },
  {
    id: 'APP103',
    name: 'Ms. Irene Adler',
    designation: 'Librarian',
    type: 'PBAS',
    session: '2024-25',
    stage: 'Completed',
    status: 'Approved',
    updated: '1d ago',
  },
  {
    id: 'APP104',
    name: 'Dr. James Moriarty',
    designation: 'Professor',
    type: 'CAS',
    session: '2025-26',
    stage: 'With Employee',
    status: 'Reverted',
    updated: '3h ago',
  },
];

export const ACTIVE_SESSIONS = [
  {
    name: 'PBAS Session 2025',
    type: 'PBAS',
    dates: 'July 24 - June 25',
    appStatus: 'OPEN',
    recordStatus: 'Active',
    count: 85,
  },
  {
    name: 'APAR Cycle 2025',
    type: 'APAR',
    dates: 'Jan 25 - Dec 25',
    appStatus: 'OPEN',
    recordStatus: 'Active',
    count: 120,
  },
];

export const WORKFLOW_FUNNEL = [
  { stage: 'Employee', count: 15, icon: 'pi-user' },
  { stage: 'Reporting Off', count: 12, icon: 'pi-file-edit' },
  { stage: 'Reviewing Off', count: 8, icon: 'pi-search-plus' },
  { stage: 'HOD', count: 5, icon: 'pi-briefcase' },
  { stage: 'IQAC', count: 18, icon: 'pi-shield' },
  { stage: 'Dean Academics', count: 3, icon: 'pi-award' },
  { stage: 'Final Approval', count: 27, icon: 'pi-check-circle' },
];

export const QUICK_ACTIONS = [
  { label: 'Configure Sessions', icon: 'pi-calendar-plus' },
  { label: 'Track All App', icon: 'pi-map' },
  { label: 'Generate Reports', icon: 'pi-file-pdf' },
  { label: 'View APAR list', icon: 'pi-list' },
];
