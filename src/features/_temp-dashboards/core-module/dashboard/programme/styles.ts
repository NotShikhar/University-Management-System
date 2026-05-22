export const PROGRAMME_STYLES = {
  container: 'p-8 max-w-[1800px] mx-auto min-h-screen bg-white',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10',
    breadcrumb:
      'text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1',
    title: 'text-4xl font-black text-gray-900 tracking-tight',
    actions: 'flex gap-3',
  },
  summaryTiles: {
    grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4',
    card: 'bg-white p-5 rounded-2xl border-b-4 shadow-sm hover:shadow-md transition-all',
    iconWrapper: 'w-10 h-10 rounded-xl flex items-center justify-center mb-4',
    value: 'text-3xl font-black text-gray-900',
    label: 'text-[11px] font-bold text-gray-400 uppercase tracking-tighter',
  },
  settings: {
    section: 'space-y-6',
    header: 'flex justify-between items-center bg-gray-50/50 p-4 rounded-2xl',
    title: 'text-2xl font-black text-gray-800',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4',
    card: 'p-5 rounded-2xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-blue-200 hover:shadow-lg transition-all group',
    iconWrapper:
      'w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-opacity-100 transition-colors',
    itemTitle: 'text-sm font-bold text-gray-800 leading-tight mb-1',
    itemDesc: 'text-[10px] text-gray-400 font-medium italic',
    megaLink:
      'mt-3 flex items-center gap-1 text-[10px] text-orange-500 font-bold uppercase',
  },
  programmeTable: {
    section: 'space-y-6',
    header: 'flex justify-between items-center bg-gray-50/50 p-4 rounded-2xl',
    title: 'text-2xl font-black text-gray-800',
    filters: 'flex gap-3',
    card: 'bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden',
  },
  expansion: {
    wrapper:
      'p-4 bg-gray-50 rounded-xl m-2 border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300',
    title: 'text-lg font-bold text-gray-800 mb-4',
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
    box: 'bg-white p-4 rounded-xl border border-gray-200',
    boxTitle: 'text-xs font-bold uppercase mb-3',
    boxValue: 'text-2xl font-bold text-gray-900 mb-1',
    boxMeta: 'text-xs text-gray-400',
  },
  floatingInfo:
    'fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-6 z-50 border border-white/10 backdrop-blur-md',
};
