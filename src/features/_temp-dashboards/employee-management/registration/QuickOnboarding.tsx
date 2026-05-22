import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';

export default function QuickOnboarding() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/employee-management'), 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-[1700px] mx-auto px-6 py-8 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
            <i className="pi pi-check text-green-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Employee Registered!
          </h2>
          <p className="text-sm text-gray-400">
            Redirecting to registration page...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="Quick Onboarding" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          Employee Services &gt; Registration &gt; Quick Onboarding
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Quick Onboarding</h1>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Register an employee with basic details
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              required
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="john@university.edu"
              required
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Department
            </label>
            <select
              required
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
            >
              <option value="">Select department</option>
              <option>Computer Science</option>
              <option>Mechanical Engineering</option>
              <option>Civil Engineering</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Mathematics</option>
              <option>Administration</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Designation
            </label>
            <select
              required
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
            >
              <option value="">Select designation</option>
              <option>Professor</option>
              <option>Associate Professor</option>
              <option>Assistant Professor</option>
              <option>Lecturer</option>
              <option>Administrative Officer</option>
              <option>Lab Assistant</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Joining Date
            </label>
            <input
              type="date"
              required
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Nature of Employment
            </label>
            <select
              required
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
            >
              <option value="">Select nature</option>
              <option>Permanent</option>
              <option>Contractual</option>
              <option>Probation</option>
              <option>Guest Faculty</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 text-xs font-bold text-gray-500 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-2.5 text-xs font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <i className="pi pi-check text-xs" />
            Register Employee
          </button>
        </div>
      </motion.form>
    </div>
  );
}
