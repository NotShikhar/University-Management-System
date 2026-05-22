import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';

export default function EmployeeRegistration() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="Employee Registration" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          Employee Services &gt; Registration
        </p>
        <h1 className="text-3xl font-bold text-gray-900">
          Employee Registration
        </h1>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Choose an onboarding method to register a new employee
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group"
          onClick={() => navigate('/employee-management/quick-onboarding')}
        >
          <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center mb-6">
            <i className="pi pi-bolt text-white text-xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Quick Onboarding
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Register an employee with just the essentials — name, department,
            designation, and joining date. Takes under 2 minutes.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 group-hover:gap-3 transition-all">
            Start Quick Onboarding
            <i className="pi pi-arrow-right text-xs" />
          </div>
          <div className="mt-6 pt-6 border-t border-gray-50">
            <div className="flex gap-4 text-[10px] text-gray-300">
              <span>3 fields</span>
              <span>•</span>
              <span>Instant save</span>
              <span>•</span>
              <span>No documents</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group"
          onClick={() => navigate('/employee-management/onboarding')}
        >
          <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center mb-6">
            <i className="pi pi-file-edit text-white text-xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Full Onboarding
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Complete employee registration with personal details, education,
            experience, documents, and bank information.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 group-hover:gap-3 transition-all">
            Start Full Onboarding
            <i className="pi pi-arrow-right text-xs" />
          </div>
          <div className="mt-6 pt-6 border-t border-gray-50">
            <div className="flex gap-4 text-[10px] text-gray-300">
              <span>6 sections</span>
              <span>•</span>
              <span>Document upload</span>
              <span>•</span>
              <span>Bank details</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
