import { motion } from 'motion/react';
import type { PageConfig } from './mockData';

function getSeverity(
  value: string
): 'success' | 'info' | 'warning' | 'danger' | 'secondary' {
  const v = value.toLowerCase();
  if (
    [
      'active',
      'open',
      'published',
      'completed',
      'approved',
      'issued',
      'occupied',
    ].some(s => v.includes(s))
  )
    return 'success';
  if (
    [
      'in progress',
      'pending',
      'processing',
      'scheduled',
      'draft',
      'upcoming',
      'provisional',
      'vacant',
      'on leave',
    ].some(s => v.includes(s))
  )
    return 'warning';
  if (
    ['inactive', 'closed', 'reverted', 'under maintenance'].some(s =>
      v.includes(s)
    )
  )
    return 'danger';
  return 'info';
}

function getBadgeStyle(value: string): string {
  const v = value.toLowerCase();
  const maps: Record<string, Record<string, string>> = {
    level: {
      ug: 'bg-blue-50 text-blue-600',
      pg: 'bg-purple-50 text-purple-600',
      doctoral: 'bg-orange-50 text-orange-600',
      diploma: 'bg-teal-50 text-teal-600',
      certificate: 'bg-gray-50 text-gray-600',
    },
    category: {
      core: 'bg-blue-50 text-blue-600',
      elective: 'bg-green-50 text-green-600',
      foundation: 'bg-amber-50 text-amber-600',
    },
    grade: {
      'a+': 'bg-green-50 text-green-700',
      a: 'bg-blue-50 text-blue-600',
      'b+': 'bg-indigo-50 text-indigo-600',
      b: 'bg-gray-50 text-gray-600',
      'b-': 'bg-amber-50 text-amber-600',
    },
    area: {
      urban: 'bg-gray-900 text-white',
      'semi-urban': 'bg-gray-700 text-white',
      rural: 'bg-emerald-50 text-emerald-600',
    },
    employment: {
      regular: 'bg-blue-50 text-blue-600',
      contractual: 'bg-amber-50 text-amber-600',
      temporary: 'bg-orange-50 text-orange-600',
    },
    type: {
      teaching: 'bg-blue-50 text-blue-600',
      'non-teaching': 'bg-gray-50 text-gray-600',
      government: 'bg-green-50 text-green-600',
      aided: 'bg-purple-50 text-purple-600',
      unaided: 'bg-amber-50 text-amber-600',
    },
  };
  for (const [, map] of Object.entries(maps)) {
    for (const [key, cls] of Object.entries(map)) {
      if (v.includes(key)) return cls;
    }
  }
  return 'bg-gray-50 text-gray-700';
}

/* ── Skeleton Components ── */

function SkeletonBlock({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-100 rounded-xl ${className}`} />
  );
}

function SkeletonRow() {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-50">
      {[1, 2, 3, 4, 5].map(i => (
        <SkeletonBlock key={i} className="h-4 flex-1" />
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <SkeletonBlock className="h-4 w-1/3 mb-4" />
      <SkeletonBlock className="h-3 w-full mb-2" />
      <SkeletonBlock className="h-3 w-2/3 mb-2" />
      <SkeletonBlock className="h-3 w-1/2" />
    </div>
  );
}

export function SkeletonPage({
  layout,
}: {
  layout: string;
  config?: PageConfig;
}) {
  if (layout === 'table')
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <SkeletonBlock className="h-5 w-24" />
        </div>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <SkeletonRow key={i} />
        ))}
        <div className="p-4 bg-gray-50/50 border-t border-gray-50">
          <SkeletonBlock className="h-4 w-32" />
        </div>
      </div>
    );
  if (layout === 'dashboard')
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[1, 2, 3, 4].map(i => (
            <SkeletonCard key={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {[1, 2].map(i => (
              <SkeletonCard key={i} />
            ))}
          </div>
          <div className="lg:col-span-4 space-y-6">{<SkeletonCard />}</div>
        </div>
      </>
    );
  if (layout === 'form')
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i}>
                <SkeletonBlock className="h-3 w-24 mb-2" />
                <SkeletonBlock className="h-11 w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
          {<SkeletonCard />}
          {<SkeletonCard />}
        </div>
      </div>
    );
  if (layout === 'workflow')
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <SkeletonBlock key={i} className="h-16 w-full" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          {<SkeletonCard />}
          {<SkeletonCard />}
        </div>
      </div>
    );
  if (layout === 'grid')
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  return (
    <div className="space-y-6">
      {[1, 2, 3].map(i => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

/* ── Table Layout ── */

export function TableLayout({ config }: { config: PageConfig }) {
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-gray-800">All Records</h3>
            <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-lg font-medium">
              {config.rows?.length ?? 0} entries
            </span>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
              <input
                type="text"
                placeholder="Search records..."
                className="pl-8 pr-4 py-2 text-xs bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-200 w-48 text-gray-500 placeholder:text-gray-300"
                readOnly
              />
            </div>
            {config.actions?.map(action => (
              <button
                key={action}
                className="px-4 py-2 text-xs font-bold bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50 bg-gray-50/30">
                <th className="text-left p-4 w-10">
                  <input
                    type="checkbox"
                    className="rounded border-gray-200"
                    readOnly
                  />
                </th>
                {config.columns?.map(col => (
                  <th
                    key={col.field}
                    className="text-left p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest"
                  >
                    {col.header}
                  </th>
                ))}
                <th className="text-right p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {config.rows?.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-200"
                      readOnly
                    />
                  </td>
                  {config.columns?.map(col => {
                    const value = row[col.field] ?? '—';
                    return (
                      <td key={col.field} className="p-4">
                        {col.type === 'tag' ? (
                          <span
                            className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full ${getSeverity(value) === 'success' ? 'bg-green-50 text-green-700' : getSeverity(value) === 'warning' ? 'bg-amber-50 text-amber-700' : getSeverity(value) === 'danger' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}
                          >
                            {value}
                          </span>
                        ) : col.type === 'badge' ? (
                          <span
                            className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full ${getBadgeStyle(value)}`}
                          >
                            {value}
                          </span>
                        ) : (
                          <span className="text-gray-700 font-medium">
                            {value}
                          </span>
                        )}
                      </td>
                    );
                  })}
                  <td className="p-4 text-right">
                    <div className="flex gap-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
                        <i className="pi pi-eye text-gray-400 text-[10px]" />
                      </button>
                      <button className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
                        <i className="pi pi-pencil text-gray-400 text-[10px]" />
                      </button>
                      <button className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
                        <i className="pi pi-trash text-gray-400 text-[10px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-gray-50/50 border-t border-gray-50 flex justify-between items-center">
          <span className="text-[10px] text-gray-400 font-medium">
            Showing 1–{config.rows?.length ?? 0} of {config.rows?.length ?? 0}{' '}
            records
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(p => (
              <button
                key={p}
                className={`w-7 h-7 rounded-lg text-[10px] font-bold ${p === 1 ? 'bg-gray-900 text-white' : 'bg-white text-gray-400 border border-gray-100'} hover:bg-gray-900 hover:text-white transition-colors`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Records', value: String(config.rows?.length ?? 0) },
          {
            label: 'Active',
            value: String(
              config.rows?.filter(r => r.status === 'Active' || !r.status)
                .length ?? 0
            ),
          },
          { label: 'Last Updated', value: 'Today, 2:30 PM' },
          { label: 'Pending Changes', value: '0' },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
          >
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              {stat.label}
            </p>
            <p className="text-sm font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Dashboard Layout ── */

export function DashboardLayout({
  config,
  title,
}: {
  config: PageConfig;
  title: string;
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {config.kpis?.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-gray-200 transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {kpi.label}
              </p>
              <i className="pi pi-chevron-right text-gray-200 group-hover:text-gray-400 transition-colors text-[10px]" />
            </div>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">
              {kpi.value}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`inline-block w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-green-400' : 'bg-blue-400'}`}
              />
              <span className="text-[9px] text-gray-400 font-medium">
                {i % 2 === 0 ? '↑ 12% from last month' : '↑ 8% from last month'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {config.sections?.map((section, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + si * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="p-5 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-gray-800 text-sm">
                  {section.title}
                </h3>
                <button className="text-[10px] font-bold text-gray-400 hover:text-gray-600 transition-colors">
                  View All →
                </button>
              </div>
              <div className="divide-y divide-gray-50">
                {section.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="p-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-gray-100 transition-colors">
                      <i
                        className={`pi ${item.icon || 'pi-user'} text-gray-400 text-xs`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 truncate">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] text-gray-300">
                        {ii % 2 === 0 ? 'Just now' : '2h ago'}
                      </span>
                      <i className="pi pi-chevron-right text-gray-200 group-hover:text-gray-400 transition-colors text-[10px]" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <i className="pi pi-bolt text-gray-400" /> Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {config.actions?.map(action => (
                <button
                  key={action}
                  className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                >
                  <i className="pi pi-chevron-right text-white/20 group-hover:text-white mb-1" />
                  <span className="text-[9px] font-bold text-white/50 group-hover:text-white text-center leading-tight">
                    {action}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 text-sm">
              System Overview
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              {title} provides comprehensive management for the university
              system. Monitor key metrics, manage records, and track activity.
            </p>
            <div className="space-y-3 pt-4 border-t border-gray-50">
              {[
                {
                  label: 'System Status',
                  value: 'Operational',
                  dot: 'bg-green-400',
                },
                { label: 'Last Sync', value: '2 min ago' },
                { label: 'Data Version', value: 'v2.4.1' },
              ].map(d => (
                <div
                  key={d.label}
                  className="flex justify-between items-center"
                >
                  <span className="text-[10px] text-gray-400 font-medium">
                    {d.label}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-700">
                    {d.dot && (
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full ${d.dot}`}
                      />
                    )}
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Form Layout ── */

export function FormLayout({ config }: { config: PageConfig }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">Application Form</h3>
              <p className="text-xs text-gray-400 mt-1">
                Fill in the required details below
              </p>
            </div>
            <span className="text-[10px] text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">
              Draft
            </span>
          </div>
          <div className="p-6 space-y-5">
            {config.formFields?.map((field, i) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
              >
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pt-3">
                  {field.label}{' '}
                  {field.required && (
                    <span className="text-red-400 ml-0.5">*</span>
                  )}
                </label>
                <div className="md:col-span-2">
                  {field.type === 'textarea' ? (
                    <div className="w-full h-24 bg-gray-50 rounded-xl border border-gray-100 p-4 text-gray-300 text-sm italic">
                      Enter {field.label.toLowerCase()}...
                    </div>
                  ) : field.type === 'select' ? (
                    <div className="w-full h-11 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 text-gray-300 text-sm select-none">
                      <span>Select {field.label.toLowerCase()}</span>
                      <i className="pi pi-chevron-down ml-auto text-gray-200 text-xs" />
                    </div>
                  ) : field.type === 'file' ? (
                    <div className="w-full h-28 bg-gray-50 rounded-xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-gray-300 hover:border-gray-200 transition-colors cursor-pointer">
                      <i className="pi pi-upload text-xl mb-1" />
                      <span className="text-xs font-medium">
                        Click to upload or drag & drop
                      </span>
                      <span className="text-[9px] text-gray-200 mt-1">
                        PDF, JPG, PNG up to 5MB
                      </span>
                    </div>
                  ) : field.type === 'email' ? (
                    <div className="w-full h-11 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 text-gray-300 text-sm">
                      <i className="pi pi-envelope text-gray-200 mr-2 text-xs" />
                      <span>Enter email address</span>
                    </div>
                  ) : field.type === 'tel' ? (
                    <div className="w-full h-11 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 text-gray-300 text-sm">
                      <span className="text-gray-300 mr-2">+91 |</span>
                      <span>Enter mobile number</span>
                    </div>
                  ) : (
                    <div className="w-full h-11 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 text-gray-300 text-sm">
                      {field.label === 'Date of Birth' && (
                        <i className="pi pi-calendar text-gray-200 mr-2 text-xs" />
                      )}
                      Enter {field.label.toLowerCase()}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="p-6 bg-gray-50/50 border-t border-gray-50 flex flex-wrap gap-3 justify-between items-center">
            <button className="px-5 py-2.5 text-xs font-bold bg-white text-gray-500 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 text-xs font-bold bg-white text-gray-600 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                Save as Draft
              </button>
              {config.actions
                ?.filter(a => a !== 'Save Draft')
                .map(action => (
                  <button
                    key={action}
                    className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-colors ${action === 'Submit Application' || action === 'Save Information' ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'}`}
                  >
                    {action}
                  </button>
                ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 text-sm">
            Submission Guidelines
          </h3>
          <ul className="space-y-3">
            {[
              'All fields marked with * are required',
              'Upload documents in PDF or JPG format',
              'Max file size: 2MB per document',
              'Verify all info before submission',
              'Incomplete apps will be rejected',
              'Keep a copy for your records',
            ].map((inst, i) => (
              <li key={i} className="flex gap-3 text-xs text-gray-400">
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${i < 2 ? 'bg-red-200' : 'bg-gray-200'}`}
                />
                {inst}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 text-sm">
            Required Documents
          </h3>
          <div className="space-y-2">
            {[
              { name: 'Photograph', size: '50KB' },
              { name: 'Signature', size: '20KB' },
              { name: '10th Marksheet', size: '200KB' },
              { name: '12th Marksheet', size: '200KB' },
              { name: 'ID Proof (Aadhaar)', size: '500KB' },
              { name: 'Category Certificate', size: '150KB' },
            ].map(doc => (
              <div
                key={doc.name}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 group hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <i className="pi pi-file text-gray-300 text-xs group-hover:text-gray-500" />
                <span className="text-xs text-gray-500 font-medium">
                  {doc.name}
                </span>
                <span className="ml-auto text-[9px] text-gray-300">
                  {doc.size}
                </span>
                <i className="pi pi-upload text-gray-200 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">
            Application Timeline
          </h3>
          <div className="space-y-3">
            {[
              { step: 'Form Filling', status: 'In Progress', active: true },
              { step: 'Document Upload', status: 'Pending', active: false },
              { step: 'Fee Payment', status: 'Pending', active: false },
              { step: 'Submission', status: 'Pending', active: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${s.active ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-300'}`}
                >
                  {s.active ? <i className="pi pi-pencil text-[9px]" /> : i + 1}
                </div>
                <div>
                  <p
                    className={`text-xs font-bold ${s.active ? 'text-gray-800' : 'text-gray-300'}`}
                  >
                    {s.step}
                  </p>
                  <p className="text-[9px] text-gray-300">{s.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Workflow Layout ── */

export function WorkflowLayout({ config }: { config: PageConfig }) {
  const total = config.workflowStages?.reduce((a, s) => a + s.count, 0) ?? 0;
  const completed =
    config.workflowStages
      ?.filter(s => s.status === 'Completed')
      .reduce((a, s) => a + s.count, 0) ?? 0;
  const inProgress =
    config.workflowStages
      ?.filter(s => s.status === 'In Progress')
      .reduce((a, s) => a + s.count, 0) ?? 0;
  const pending =
    config.workflowStages
      ?.filter(s => s.status === 'Pending')
      .reduce((a, s) => a + s.count, 0) ?? 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800">Application Workflow</h3>
            <span className="text-[10px] text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">
              {total} Total
            </span>
          </div>
          <div className="space-y-0">
            {config.workflowStages?.map((stage, i) => (
              <div key={stage.stage} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 ${stage.status === 'Completed' ? 'bg-green-50 border-green-200 text-green-600' : stage.status === 'In Progress' ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-300'}`}
                  >
                    {stage.status === 'Completed' ? (
                      <i className="pi pi-check text-xs" />
                    ) : (
                      i + 1
                    )}
                  </div>
                  {i < (config.workflowStages?.length ?? 1) - 1 && (
                    <div className="w-0.5 h-10 bg-gray-50 my-1" />
                  )}
                </div>
                <div
                  className={`flex-1 pb-6 ${i === (config.workflowStages?.length ?? 1) - 1 ? 'pb-0' : ''}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {stage.stage}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {stage.count} applications
                      </p>
                    </div>
                    <span
                      className={`inline-block px-2.5 py-1 text-[9px] font-bold rounded-full ${stage.status === 'Completed' ? 'bg-green-50 text-green-600' : stage.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}
                    >
                      {stage.status}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${stage.status === 'Completed' ? 'bg-green-400 w-full' : stage.status === 'In Progress' ? 'bg-blue-400 w-3/5' : 'bg-gray-200 w-1/5'}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <i className="pi pi-bolt text-gray-400" /> Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {config.actions?.map(action => (
              <button
                key={action}
                className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
              >
                <i className="pi pi-chevron-right text-white/20 group-hover:text-white mb-1" />
                <span className="text-[9px] font-bold text-white/50 group-hover:text-white text-center leading-tight">
                  {action}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 text-sm">
            Pipeline Summary
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-xs text-gray-400">Total Applications</span>
              <span className="text-lg font-bold text-gray-800">{total}</span>
            </div>
            <div className="h-3 bg-gray-50 rounded-full overflow-hidden flex">
              <div
                className="bg-green-400 h-full transition-all"
                style={{ width: `${total ? (completed / total) * 100 : 0}%` }}
              />
              <div
                className="bg-blue-400 h-full transition-all"
                style={{ width: `${total ? (inProgress / total) * 100 : 0}%` }}
              />
              <div
                className="bg-gray-200 h-full transition-all"
                style={{ width: `${total ? (pending / total) * 100 : 0}%` }}
              />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { label: 'Completed', value: completed, color: 'bg-green-400' },
                {
                  label: 'In Progress',
                  value: inProgress,
                  color: 'bg-blue-400',
                },
                { label: 'Pending', value: pending, color: 'bg-gray-200' },
              ].map(d => (
                <div key={d.label} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${d.color}`}
                    />
                    <span className="text-xs font-bold text-gray-800">
                      {d.value}
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-400">{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4 text-sm">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
              >
                <div
                  className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-400' : i === 2 ? 'bg-blue-400' : 'bg-gray-200'}`}
                />
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-700">
                    Application #{['APP245', 'APP312', 'APP178'][i - 1]}
                  </p>
                  <p className="text-[9px] text-gray-400">
                    {['Approved', 'Under review', 'Payment pending'][i - 1]} •{' '}
                    {['2m ago', '1h ago', '3h ago'][i - 1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Grid Layout ── */

export function GridLayout({ config }: { config: PageConfig }) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs text-gray-400 font-medium">
          {config.gridItems?.length ?? 0} categories
        </p>
        <input
          type="text"
          placeholder="Filter categories..."
          className="pl-4 pr-4 py-2 text-xs bg-white border border-gray-100 rounded-xl outline-none focus:border-gray-200 w-56 text-gray-500 placeholder:text-gray-300"
          readOnly
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.gridItems?.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <i
                  className={`pi ${['pi-tag', 'pi-book', 'pi-star', 'pi-cog', 'pi-chart-bar', 'pi-folder'][i % 6]} text-gray-400 text-sm`}
                />
              </div>
              <i className="pi pi-chevron-right text-gray-200 group-hover:text-gray-400 transition-colors text-xs" />
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              {item.desc}
            </p>
            {item.count && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg">
                <span className="text-[10px] font-bold text-gray-500">
                  {item.count}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 items-center justify-between">
        <div className="flex gap-2">
          {config.actions?.map(action => (
            <button
              key={action}
              className="px-5 py-2.5 text-xs font-bold bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-300">Rows per page: 12</span>
          <div className="flex gap-1">
            {[1, 2, 3].map(p => (
              <button
                key={p}
                className={`w-7 h-7 rounded-lg text-[10px] font-bold ${p === 1 ? 'bg-gray-900 text-white' : 'bg-white text-gray-400 border border-gray-100'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Info Layout ── */

export function InfoLayout({ config }: { config: PageConfig }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        {config.infoSections?.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                <i
                  className={`pi ${['pi-info-circle', 'pi-check-circle', 'pi-file', 'pi-wallet'][i % 4]} text-gray-400 text-xs`}
                />
              </div>
              <h3 className="font-bold text-gray-800 text-sm">
                {section.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <i className="pi pi-bolt text-gray-400" /> Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {config.actions?.map(action => (
              <button
                key={action}
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group w-full text-left"
              >
                <i className="pi pi-chevron-right text-white/20 group-hover:text-white" />
                <span className="text-xs font-bold text-white/70 group-hover:text-white">
                  {action}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">
            Important Dates
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Application Start', date: '01 Feb 2027', active: true },
              { label: 'Last Date', date: '31 Mar 2027', active: true },
              {
                label: 'Document Verification',
                date: '01-15 Apr 2027',
                active: false,
              },
              { label: 'Merit List', date: '15 Apr 2027', active: false },
              { label: 'Commencement', date: '01 Jun 2027', active: false },
            ].map(d => (
              <div key={d.label} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${d.active ? 'bg-blue-400' : 'bg-gray-200'}`}
                  />
                  <span className="text-xs text-gray-400">{d.label}</span>
                </div>
                <span className="text-xs font-bold text-gray-700">
                  {d.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Applications', value: '2,450' },
              { label: 'Approved', value: '1,820' },
              { label: 'Pending', value: '380' },
              { label: 'Rejected', value: '250' },
            ].map(s => (
              <div
                key={s.label}
                className="p-3 bg-gray-50 rounded-xl text-center"
              >
                <p className="text-sm font-bold text-gray-800">{s.value}</p>
                <p className="text-[9px] text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
