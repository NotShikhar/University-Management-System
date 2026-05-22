export const READINESS_CHECKS = [
  { item: 'Registration dates', status: 'Set', severity: 'success' },
  { item: 'Eligibility criteria', status: 'Complete', severity: 'success' },
  { item: 'Basic fees', status: 'Missing', severity: 'danger' },
  { item: 'Portal content', status: 'Incomplete', severity: 'warning' },
];

export const NOTICE_METRICS = [
  { label: 'Total Notices', value: 12, icon: 'pi pi-bell' },
  { label: 'Featured', value: 3, icon: 'pi pi-star-fill' },
  { label: 'Active FAQs', value: 45, icon: 'pi pi-question-circle' },
  { label: 'Open Programs', value: 18, icon: 'pi pi-folder-open' },
];

export const PROGRAM_FEES = [
  {
    program: 'B.Tech CS',
    criteria: 'Entrance',
    feeMapped: 'Yes',
    categoryFee: 'Yes',
  },
  {
    program: 'M.Sc Physics',
    criteria: 'Merit',
    feeMapped: 'Yes',
    categoryFee: 'No',
  },
  {
    program: 'B.A English',
    criteria: 'Both',
    feeMapped: 'No',
    categoryFee: 'No',
  },
  {
    program: 'PhD Biology',
    criteria: 'Entrance',
    feeMapped: 'Yes',
    categoryFee: 'Yes',
  },
];

export const KNOWN_ISSUES = [
  {
    issue: 'Fee not reflecting after update',
    workaround: 'Use /flush command',
    status: 'Active',
  },
  {
    issue: 'Featured notice display delay',
    workaround: 'Info message shown',
    status: 'Under Review',
  },
];

export const PORTAL_CHECKS = {
  content: [
    { label: 'Intro Content', status: 'Yes' },
    { label: 'Prospectus Link', status: 'Yes' },
    { label: 'Reg. Instructions', status: 'Yes' },
  ],
  visibility: [
    { label: 'Notices Visible', status: 'Yes' },
    { label: 'Contact Info', status: 'Yes' },
    { label: 'FAQs Accessible', status: 'Yes' },
  ],
  audit: [
    { label: 'PDF Output Reviewed', status: 'No' },
    { label: 'Fees Displayed Correct', status: 'Yes' },
    { label: 'Last Fee Update', status: '2h ago', value: '2h ago' },
  ],
};
