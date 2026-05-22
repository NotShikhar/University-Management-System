import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';

const SETTINGS_SECTIONS = [
  {
    title: 'Nature of Employment',
    description:
      'Manage permanent, contractual, probation, and guest faculty types',
    icon: 'pi pi-briefcase',
    path: '/temp/nature-of-employment',
    tag: 'Master Data',
  },
  {
    title: 'Employee ID Generation',
    description: 'Configure auto-ID format, prefix and sequence rules',
    icon: 'pi pi-id-card',
    path: '#',
    tag: 'Coming Soon',
  },
  {
    title: 'Document Requirements',
    description: 'Configure mandatory documents for employee onboarding',
    icon: 'pi pi-file',
    path: '#',
    tag: 'Coming Soon',
  },
  {
    title: 'Approval Workflow',
    description: 'Set up onboarding approval chain and notification rules',
    icon: 'pi pi-share-alt',
    path: '#',
    tag: 'Coming Soon',
  },
  {
    title: 'Email Templates',
    description: 'Customize welcome emails and notification templates',
    icon: 'pi pi-envelope',
    path: '#',
    tag: 'Coming Soon',
  },
  {
    title: 'Role Permissions',
    description: 'Manage HR role access and feature visibility',
    icon: 'pi pi-shield',
    path: '#',
    tag: 'Coming Soon',
  },
];

export default function SettingsPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="Settings" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          Employee Services &gt; Settings
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Configure employee management system settings and masters
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SETTINGS_SECTIONS.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            onClick={() => section.path !== '#' && navigate(section.path)}
            className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ${section.path !== '#' ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all group' : ''}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center">
                <i className={`${section.icon} text-gray-600`} />
              </div>
              <span
                className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  section.tag === 'Master Data'
                    ? 'bg-blue-50 text-blue-600'
                    : section.tag === 'Coming Soon'
                      ? 'bg-gray-50 text-gray-300'
                      : 'bg-green-50 text-green-600'
                }`}
              >
                {section.tag}
              </span>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              {section.title}
            </h3>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              {section.description}
            </p>
            {section.path !== '#' && (
              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-gray-900 group-hover:gap-2.5 transition-all">
                Configure
                <i className="pi pi-arrow-right text-[9px]" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
