export const EMPLOYEE_STYLES = {
  container: 'p-8 max-w-[1600px] mx-auto min-h-screen',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10',
    breadcrumb:
      'text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1',
    title: 'text-3xl font-bold text-gray-900',
    searchWrapper: 'flex gap-2',
    searchInput:
      'p-2 pl-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-64 lg:w-96 text-sm',
    searchIconWrapper: 'p-input-icon-left',
  },
  kpi: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10',
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group',
    header: 'flex justify-between items-start mb-4',
    label: 'text-sm font-medium text-gray-500 mb-1',
    value: 'text-2xl font-bold text-gray-900',
    iconWrapper: 'w-10 h-10 rounded-lg flex items-center justify-center',
    sub: 'text-[11px] font-semibold text-gray-400 truncate',
    border:
      'absolute bottom-0 left-0 h-1 transition-all w-0 group-hover:w-full',
  },
  chartsGrid: 'grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10',
  departmentChart: {
    wrapper:
      'lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
    header: 'flex justify-between items-center mb-6',
    title: 'font-bold text-gray-800',
  },
  natureChart: {
    wrapper:
      'lg:col-span-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
    title: 'font-bold text-gray-800 mb-6',
    chartWrapper: 'h-64',
    legendWrapper: 'mt-4 space-y-2',
    legendItem: 'flex justify-between items-center text-xs',
    legendLabelWrapper: 'flex items-center gap-2',
    legendDot: 'w-2 h-2 rounded-full',
    legendLabel: 'text-gray-600',
    legendValue: 'font-bold text-gray-900',
  },
  placeholder: {
    wrapper:
      'lg:col-span-3 bg-gray-50 p-12 rounded-2xl border-2 border-dashed border-gray-200 text-center',
    text: 'text-gray-400 font-medium',
  },
};
