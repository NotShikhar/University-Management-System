export const EHOUSING_STYLES = {
  container: 'p-8 max-w-[1600px] mx-auto min-h-screen bg-gray-50/20',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10',
    breadcrumb:
      'text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1',
    title: 'text-3xl font-black text-gray-900 tracking-tight',
    toggleWrapper:
      'flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm',
    toggleLabel:
      'text-xs font-bold text-gray-400 pl-2 uppercase tracking-widest',
  },
  admin: {
    kpiGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
    kpiCard:
      'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group',
    iconWrapper: 'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
    kpiValue: 'text-3xl font-black text-gray-900 leading-none mb-1',
    kpiLabel: 'text-xs font-bold text-gray-400 uppercase tracking-tight',
    kpiSub: 'text-[10px] text-gray-400 mt-2 font-medium',
    kpiBorder:
      'absolute bottom-0 left-0 h-1 transition-all w-0 group-hover:w-full',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-12 gap-8',
  tableSection: {
    wrapper:
      'lg:col-span-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm',
    header: 'flex justify-between items-center mb-8',
    title: 'text-xl font-bold text-gray-800',
    actions: 'flex gap-2',
  },
  sidebar: {
    wrapper: 'lg:col-span-4 space-y-8',
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm',
    title: 'text-xl font-bold text-gray-800 mb-6',
    chartWrapper: 'h-64 flex justify-center',
    tipBox: 'p-4 bg-teal-50 rounded-2xl border border-teal-100',
    tipTitle: 'text-xs font-bold text-teal-800 mb-1 italic',
    tipText: 'text-[11px] text-teal-700 leading-tight',
  },
  employee: {
    grid: 'grid grid-cols-1 lg:grid-cols-12 gap-10',
    leftCol: 'lg:col-span-8 space-y-10',
    kpiGrid: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    kpiCard: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm',
    iconWrapper: 'w-12 h-12 rounded-2xl flex items-center justify-center mb-6',
    kpiValue: 'text-4xl font-black text-gray-900 mb-1',
    kpiLabel: 'text-sm font-bold text-gray-400 uppercase tracking-widest',
    kpiSub: 'text-xs text-gray-400 mt-2 font-medium',
    highlightCard:
      'bg-indigo-600 p-8 rounded-[2rem] shadow-2xl shadow-indigo-100 text-white relative overflow-hidden',
    highlightTitle: 'text-4xl font-black mb-2 tracking-tight',
    highlightDesc: 'text-indigo-100 mb-6 font-medium max-w-sm opacity-90',
    highlightIconWrapper:
      'w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm relative',
    badge:
      'absolute -top-2 -right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white shadow-lg',
  },
  schemes: {
    wrapper: 'lg:col-span-4',
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full',
    title: 'text-xl font-bold text-gray-800 mb-8',
    item: 'p-5 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-white hover:border-indigo-100 transition-all cursor-pointer group',
    itemTitle:
      'font-bold text-gray-800 group-hover:text-indigo-600 transition-colors',
    itemMeta: 'flex justify-between items-center mt-3',
    deadline: 'text-[10px] uppercase font-bold text-gray-400',
  },
};
