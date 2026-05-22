export const FEEDBACK_STYLES = {
  container: 'p-8 max-w-[1600px] mx-auto min-h-screen bg-gray-50/20',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10',
    breadcrumb:
      'text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1',
    titleWrapper: 'flex items-center gap-3',
    title: 'text-3xl font-bold text-gray-900 tracking-tight',
    actions: 'flex gap-3',
  },
  kpi: {
    grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10',
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group',
    iconWrapper: 'w-10 h-10 rounded-xl flex items-center justify-center mb-4',
    value: 'text-2xl font-black text-gray-900 leading-none mb-1',
    label: 'text-[10px] font-bold text-gray-400 uppercase tracking-tight',
    sub: 'text-[9px] text-gray-300 mt-2',
    border:
      'absolute bottom-0 left-0 h-1 transition-all w-0 group-hover:w-full',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-12 gap-8',
  leftCol: 'lg:col-span-8 space-y-8',
  statusDistribution: {
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm',
    header: 'flex justify-between items-center mb-8',
    title: 'text-xl font-bold text-gray-800',
    content: 'flex flex-col md:flex-row items-center gap-12',
    chartWrapper: 'w-full md:w-1/2 flex justify-center h-64',
    legendWrapper: 'w-full md:w-1/2 space-y-4',
    legendItem: 'flex justify-between items-center p-3 bg-gray-50 rounded-xl',
    legendLabel: 'text-sm font-bold text-gray-600',
    legendValue: 'text-sm font-black text-gray-900',
  },
  responseAnalytics: {
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm',
    title: 'text-xl font-bold text-gray-800 mb-8',
    chartWrapper: 'h-80',
  },
  timeline: {
    wrapper: 'lg:col-span-4',
    card: 'bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full',
    header: 'flex justify-between items-center mb-8',
    title: 'text-xl font-bold text-gray-800',
    item: 'bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4',
    itemTitle: 'font-bold text-gray-800',
    itemMeta: 'text-xs text-gray-400 font-medium',
    tipBox: 'mt-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100',
    tipHeader: 'flex items-center gap-3 mb-2',
    tipTitle: 'text-sm font-bold text-indigo-900',
    tipText: 'text-xs text-indigo-700 leading-relaxed',
  },
};
