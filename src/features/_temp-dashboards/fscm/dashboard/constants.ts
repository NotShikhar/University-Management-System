export const SESSIONS = ['2025-2026', '2024-2025'];

export const KPIS = [
  {
    label: 'Active Financial Years',
    value: '3',
    icon: 'pi-calendar',
    color: 'blue',
  },
  {
    label: 'Books of Accounts',
    value: '5 Total / 2 Active',
    icon: 'pi-book',
    color: 'purple',
  },
  {
    label: 'Budget Categories',
    value: '12 Active',
    icon: 'pi-tags',
    color: 'green',
  },
  {
    label: 'Heads & Subheads',
    value: '145 Mapped',
    icon: 'pi-sitemap',
    color: 'orange',
  },
  {
    label: 'Pending Requests',
    value: '8 In Draft',
    icon: 'pi-clock',
    color: 'red',
  },
];

export const FINANCIAL_YEAR_BOOKS = [
  {
    name: 'University Main Fund',
    ou: 'Main Campus',
    project: 'General Fund',
    type: 'Accrual',
    currency: 'INR',
    status: 'Active',
  },
  {
    name: 'Research Project A',
    ou: 'Sci Faculty',
    project: 'DST-SERB',
    type: 'Cash',
    currency: 'INR',
    status: 'Active',
  },
];

export const BUDGET_ESTIMATES = [
  {
    category: 'Capital Expenditure',
    headsCount: 15,
    totalEstimate: '₹ 5.2 Cr',
    status: 'Submitted',
  },
  {
    category: 'Revenue Expenditure',
    headsCount: 42,
    totalEstimate: '₹ 12.8 Cr',
    status: 'Draft',
  },
];

export const MASTERS = [
  { label: 'Tags', count: 8, desc: 'Reporting classifications' },
  { label: 'Categories', count: 12, desc: 'Budget classifications' },
  { label: 'Heads', count: 145, desc: 'General ledger heads' },
  { label: 'Banks', count: 4, desc: 'Linked bank accounts' },
  { label: 'Vendors', count: 28, desc: 'Registered suppliers' },
  { label: 'Hierarchy', status: 'Configured', desc: 'Approval workflow' },
];

export const ROLES_RESPONSIBILITIES = [
  {
    role: 'fscm_admin',
    color: 'blue',
    desc: 'Full module configuration',
  },
  {
    role: 'fscm_department',
    color: 'green',
    desc: 'Raise budget estimates',
  },
  {
    role: 'fscm_approver',
    color: 'orange',
    desc: 'Approve & Allocate',
  },
];

export const REPORTS = [
  'Budget Estimation Report',
  'Budget Transfer Report',
  'Category Mapping Report',
  'Expenditure Report',
  'Bank Account Report',
  'Vendor Master Report',
];
