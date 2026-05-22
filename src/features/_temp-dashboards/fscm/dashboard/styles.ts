export const FSCM_STYLES = {
  container: 'p-8 max-w-425 mx-auto min-h-screen',
  header: {
    wrapper:
      'flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10',
    breadcrumb:
      'text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1',
    titleWrapper: 'flex items-center gap-3',
    title: 'text-3xl font-bold text-gray-900',
    badge: 'bg-blue-50 text-blue-600 text-[10px] font-bold',
    actions: 'flex gap-3',
    dropdown: 'w-48 rounded-xl',
  },
  kpi: {
    grid: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10',
    card: 'bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-blue-200 transition-all cursor-pointer group',
    iconWrapper:
      'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
    label:
      'text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mb-1',
    value: 'text-lg font-bold text-gray-900 leading-tight',
  },
  mainGrid: 'grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10',
  leftCol: 'lg:col-span-8 space-y-8',
  tableSection: {
    card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
    header: 'flex justify-between items-center mb-6',
    titleWrapper: '',
    title: 'font-bold text-gray-800',
    subtitle: 'text-xs text-gray-400',
    actions: 'flex gap-2',
    table: 'p-datatable-sm',
    typeBadge: 'text-xs bg-gray-50 px-2 py-1 rounded',
  },
  sidebar: {
    wrapper: 'lg:col-span-4 space-y-8',
    masters: {
      card: 'bg-white p-6 rounded-2xl border border-gray-100 shadow-sm',
      title: 'font-bold text-gray-800 mb-6',
      grid: 'grid grid-cols-2 gap-4',
      item: 'p-3 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 transition-all cursor-pointer group',
      itemHeader: 'flex justify-between items-start mb-1',
      itemLabel: 'text-[10px] font-bold text-gray-400 uppercase',
      itemIcon:
        'pi pi-external-link text-[8px] text-gray-300 group-hover:text-blue-500',
      itemValue: 'text-lg font-bold text-gray-800 leading-none mb-1',
      itemDesc: 'text-[9px] text-gray-400 font-medium leading-none',
      fullConfigBtn:
        'w-full mt-6 p-button-outlined p-button-secondary font-bold',
    },
    roles: {
      card: 'bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6 rounded-2xl shadow-xl',
      title: 'font-bold mb-4 flex items-center gap-2',
      item: 'flex gap-3',
      itemBorder: 'w-1 h-8 rounded-full',
      itemRole: 'text-[10px] font-bold uppercase tracking-widest',
      itemDesc: 'text-[11px] text-gray-400',
    },
  },
  reports: {
    card: 'bg-white p-8 rounded-2xl border border-gray-100 shadow-sm',
    title: 'font-bold text-gray-800 mb-8',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
    item: 'p-4 border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-gray-50 hover:shadow-sm transition-all group flex flex-col justify-between h-32',
    itemTitle: 'text-sm font-bold text-gray-800 mb-1 leading-tight',
    itemDesc: 'text-[10px] text-gray-400',
    itemFooter: 'flex justify-between items-center',
    itemFormats: 'text-[9px] font-bold text-blue-600 uppercase',
  },
};
