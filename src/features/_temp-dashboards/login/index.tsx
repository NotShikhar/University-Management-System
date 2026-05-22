import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex">
      {/* Left - Form side */}
      <div className="flex-1 flex items-center justify-center px-8 lg:px-16 xl:px-24">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center">
                <i className="pi pi-building text-white text-sm" />
              </div>
              <span className="text-lg font-extrabold text-gray-900 tracking-tight">
                UMS
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium">
              University Management System
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-1.5">
              Welcome back
            </h1>
            <p className="text-sm text-gray-400">
              Sign in to your account to continue
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={e => {
              e.preventDefault();
              navigate('/home');
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@university.edu"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border-gray-200 text-gray-900 focus:ring-0"
                />
                <span className="text-xs text-gray-400 font-medium">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-xs font-bold text-gray-900 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Sign In
              <i className="pi pi-arrow-right text-xs" />
            </button>
          </motion.form>

          {/* Footer */}
          <p className="mt-8 text-center text-[10px] text-gray-300 font-medium">
            &copy; 2026 University Management System. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right - Visual side */}
      <div className="hidden lg:flex flex-1 bg-gray-50 items-center justify-center p-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="max-w-md text-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-8">
            <i className="pi pi-shield text-white text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Centralized University Management
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Manage students, faculty, academics, finance, and governance — all
            from a single, unified platform.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
            {[
              { label: 'Students', value: '18K+' },
              { label: 'Faculty', value: '680+' },
              { label: 'Programmes', value: '86' },
            ].map(stat => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-4 border border-gray-100"
              >
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-[10px] text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
