export const COMMUNICATION_STYLES = {
  container: 'p-8 max-w-[1600px] mx-auto min-h-screen bg-gray-50/20',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10',
    breadcrumb:
      'text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1',
    titleWrapper: 'flex items-center gap-3',
    title: 'text-3xl font-black text-gray-900 tracking-tight',
    actions: 'flex gap-3',
  },
  kpi: {
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-8 mb-10',
    card: 'bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl hover:scale-[1.02] transition-all duration-300',
    iconWrapper:
      'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-100 transition-colors duration-300',
    value: 'text-4xl font-black text-gray-900 leading-none mb-2',
    label: 'text-[11px] font-bold text-gray-400 uppercase tracking-widest',
    sub: 'text-[10px] text-gray-300 mt-4 font-medium',
    decoration:
      'absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 z-0 group-hover:bg-blue-50/50 transition-colors',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-12 gap-8',
  analytics: {
    wrapper: 'lg:col-span-8 flex flex-col gap-8',
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm',
    title: 'text-xl font-bold text-gray-800 mb-8',
    chartWrapper: 'h-80',
  },
  history: {
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm',
    header: 'flex justify-between items-center mb-8',
    title: 'text-xl font-bold text-gray-800',
    table: 'w-full text-left',
    tableHead:
      'text-[10px] uppercase font-bold text-gray-400 border-b border-gray-50',
    tableRow: 'group hover:bg-gray-50/50 transition-colors',
    subject: 'py-4 text-sm font-semibold text-gray-700',
    target: 'py-4 text-xs text-gray-500 font-medium',
    count: 'py-4 text-xs font-bold text-gray-900',
    date: 'py-4 text-[10px] text-gray-400 font-medium',
  },
  sidebar: {
    wrapper: 'lg:col-span-4 flex flex-col gap-8',
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full',
    title: 'text-xl font-bold text-gray-800 mb-8',
    chartWrapper: 'h-64 mb-8',
    distributionItem:
      'p-4 bg-gray-50 rounded-2xl flex justify-between items-center border border-gray-100',
    itemLabel: 'text-xs font-bold text-gray-600',
    itemValue: 'text-sm font-black text-gray-900',
    footer: 'mt-8 pt-8 border-t border-gray-100 text-center',
  },
};
