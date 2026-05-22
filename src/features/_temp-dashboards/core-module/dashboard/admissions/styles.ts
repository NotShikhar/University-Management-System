export const ADMISSIONS_STYLES = {
  container: 'p-8 max-w-[1600px] mx-auto min-h-screen bg-gray-50/30',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8',
    breadcrumb:
      'text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1',
    titleWrapper: 'flex items-center gap-3',
    title: 'text-3xl font-bold text-gray-900 tracking-tight',
    actions: 'flex gap-3',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-12 gap-8',
  leftCol: 'lg:col-span-8 space-y-8',
  rightCol: 'lg:col-span-4 space-y-8',
  readiness: {
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
    title: 'text-lg font-bold text-gray-800 mb-4',
    itemWrapper: 'flex justify-between items-center p-3 bg-gray-50 rounded-xl',
    itemLabel: 'text-sm font-medium text-gray-700',
  },
  metrics: {
    grid: 'grid grid-cols-2 gap-4',
    card: 'bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center',
    iconWrapper:
      'w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2',
    value: 'text-2xl font-bold text-gray-900',
    label: 'text-[10px] uppercase font-bold text-gray-400',
  },
  feeConfig: {
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
    header: 'flex justify-between items-center mb-6',
    title: 'text-lg font-bold text-gray-800',
  },
  portalChecks: {
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
    title: 'text-lg font-bold text-gray-800 mb-6',
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
    box: 'p-4 rounded-xl border border-gray-50 bg-gray-50/50',
    boxTitle: 'text-xs font-bold text-gray-400 uppercase mb-2',
    item: 'flex justify-between text-sm',
  },
  support: {
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
    title: 'text-lg font-bold text-gray-800 mb-6',
    item: 'flex items-center gap-3',
    iconWrapper: 'w-8 h-8 rounded-lg flex items-center justify-center',
    label: 'text-[10px] text-gray-400 uppercase font-bold',
    value: 'text-sm font-semibold',
    footer: 'pt-4 border-t border-gray-100 mt-4',
  },
  helpCenter: {
    card: 'bg-slate-800 p-6 rounded-2xl shadow-xl text-white',
    title: 'text-lg font-bold mb-4',
    metric: 'flex items-end gap-2 mb-6',
    value: 'text-4xl font-bold',
    label: 'text-slate-400 mb-1 text-sm font-medium',
    progressWrapper: 'space-y-3',
  },
  knownIssues: {
    card: 'bg-amber-50 p-6 rounded-2xl border border-amber-100',
    header: 'flex items-center gap-2 mb-4',
    title: 'text-lg font-bold text-amber-900',
    item: 'bg-white p-3 rounded-xl border border-amber-100 shadow-sm',
    itemTitle: 'text-sm font-bold text-gray-800 mb-1',
    itemWorkaround: 'text-[11px] text-amber-600 font-bold uppercase mb-2',
  },
};
