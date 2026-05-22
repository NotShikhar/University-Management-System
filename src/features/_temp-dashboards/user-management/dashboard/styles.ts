export const USER_STYLES = {
  container: 'p-8 max-w-7xl mx-auto',
  header: {
    wrapper: 'flex justify-between items-center mb-10',
    breadcrumb: 'text-xs font-semibold text-gray-400 uppercase tracking-wider',
    title: 'text-3xl font-bold text-gray-900',
  },
  kpi: {
    grid: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10',
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center',
    iconWrapper: 'w-12 h-12 rounded-full flex items-center justify-center mb-3',
    label: 'text-sm font-medium text-gray-500',
    value: 'text-2xl font-bold text-gray-900',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
  placeholder: {
    card: 'lg:col-span-1 bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-gray-200 text-center flex flex-col items-center justify-center',
    text: 'text-gray-400 font-medium font-bold',
  },
  activities: {
    wrapper: 'lg:col-span-2',
    title: 'text-lg font-bold text-gray-800 mb-4',
    listWrapper:
      'bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden',
    item: 'p-4 flex items-center justify-between',
    itemContent: 'flex items-center gap-4',
    iconWrapper:
      'w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0',
    userName: 'text-sm font-bold text-gray-900',
    actionText: 'font-normal text-gray-500',
    typeText: 'text-xs text-gray-400 font-medium',
    timeText: 'text-xs text-gray-400',
    footer: 'p-3 bg-gray-50 text-center',
  },
};
