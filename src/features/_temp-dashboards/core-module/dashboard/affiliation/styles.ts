export const AFFILIATION_STYLES = {
  container: 'p-8 max-w-[1600px] mx-auto min-h-screen bg-gray-50/20',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10',
    breadcrumb:
      'text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1',
    titleWrapper: 'flex items-center gap-3',
    title: 'text-3xl font-black text-gray-900 tracking-tight',
    actions: 'flex gap-3',
  },
  kpi: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10',
    card: 'bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300',
    iconWrapper:
      'w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300',
    value: 'text-3xl font-black text-gray-900 leading-none mb-1',
    label: 'text-[10px] font-bold text-gray-400 uppercase tracking-tight',
    sub: 'text-[9px] text-gray-400 mt-2 italic font-medium',
    border:
      'absolute bottom-0 left-0 h-1 transition-all w-0 group-hover:w-full',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-12 gap-8',
  tableSection: {
    wrapper: 'lg:col-span-8 space-y-8',
    card: 'bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden',
    header: 'flex justify-between items-center mb-8',
    title: 'text-xl font-black text-gray-800',
    actions: 'flex gap-2',
  },
  quickActions: {
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
    cardIndigo:
      'p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl text-white shadow-lg shadow-indigo-100 flex flex-col justify-between',
    cardWhite:
      'p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-purple-200 transition-all flex flex-col justify-between',
    cardEmerald:
      'p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-emerald-200 transition-all flex flex-col justify-between',
    title: 'text-lg font-bold mb-1',
    desc: 'text-xs opacity-70 mb-4',
  },
  sidebar: {
    wrapper: 'lg:col-span-4 flex flex-col gap-8',
    card: 'bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col',
    title: 'text-xl font-black text-gray-800 mb-8',
    chartWrapper: 'h-64 mb-8',
    itemWrapper: 'flex justify-between items-center p-3 bg-gray-50 rounded-2xl',
    itemLabel: 'text-xs font-bold text-gray-600',
    itemValue: 'text-sm font-black text-gray-900',
  },
  recentPayments: {
    card: 'bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm',
    title: 'text-xl font-black text-gray-800 mb-6',
    item: 'p-4 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer',
    itemTitle: 'text-sm font-bold text-gray-800',
    itemAmount: 'text-sm font-black text-emerald-600',
    itemMeta: 'text-[10px] text-gray-400 font-bold',
  },
};
