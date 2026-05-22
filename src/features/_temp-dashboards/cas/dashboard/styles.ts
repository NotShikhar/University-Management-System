export const CAS_STYLES = {
  container: 'p-8 max-w-[1600px] mx-auto min-h-screen',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10',
    breadcrumb:
      'text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1',
    title: 'text-3xl font-bold text-gray-900',
    subtitle: 'text-gray-500 text-sm font-medium italic',
    actions: 'flex gap-3',
    dropdown: 'w-48 rounded-xl',
  },
  kpi: {
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-6 mb-10',
    card: 'bg-white p-6 rounded-2xl border-l-[6px] shadow-sm',
    label: 'text-xs font-bold text-gray-400 uppercase tracking-widest mb-4',
    valueWrapper: 'flex justify-between items-end',
    totalValue: 'text-3xl font-bold text-gray-900',
    totalLabel: 'text-[10px] text-gray-400 font-bold',
    statsWrapper: 'text-right',
    statGroup: 'flex gap-4 mb-2',
    statValue: 'text-sm font-bold',
    statLabel: 'text-[8px] text-gray-400 font-bold uppercase',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10',
  applicationTable: {
    wrapper:
      'lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col',
    header:
      'p-6 border-b border-gray-50 flex flex-wrap gap-4 items-center justify-between',
    title: 'font-bold text-gray-800',
    searchWrapper: 'flex gap-2',
    table: 'p-datatable-sm',
    badge: 'font-bold text-[10px] bg-gray-50 px-2 py-1 rounded',
    footer: 'p-3 bg-gray-50 text-center',
  },
  sidebar: {
    wrapper: 'lg:col-span-4 space-y-6',
    quickActions: {
      card: 'bg-gray-900 p-6 rounded-2xl shadow-xl text-white',
      title: 'font-bold mb-4 flex items-center gap-2',
      grid: 'grid grid-cols-2 gap-3',
      button:
        'flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group',
      buttonIcon: 'text-white/40 group-hover:text-white mb-2',
      buttonLabel:
        'text-[10px] font-bold text-white/70 group-hover:text-white text-center',
    },
    activeSessions: {
      card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
      title: 'font-bold text-gray-800 mb-4',
      item: 'p-4 border border-gray-50 rounded-xl bg-gray-50/50',
      itemHeader: 'flex justify-between items-start mb-2',
      itemName: 'text-xs font-bold text-gray-900',
      itemDates: 'text-[9px] text-gray-400 font-medium',
      itemFooter: 'flex justify-between items-center mt-4',
      itemCount:
        'text-[10px] font-bold text-gray-500 uppercase tracking-widest',
    },
  },
  funnel: {
    card: 'bg-white p-8 rounded-2xl border border-gray-100 shadow-sm',
    title: 'font-bold text-gray-800 mb-8',
    wrapper: 'flex flex-wrap lg:flex-nowrap items-center justify-between gap-4',
    stepWrapper: 'flex flex-col items-center flex-1 min-w-[100px]',
    iconCircle:
      'w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center mb-2 relative group cursor-help',
    badge:
      'absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold',
    tooltip:
      'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-gray-900 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center',
    stepLabel:
      'text-[10px] font-bold text-gray-500 text-center uppercase tracking-tighter',
    divider: 'hidden lg:block w-full h-[1px] bg-gray-100 shrink flex-1 mx-2',
  },
};
