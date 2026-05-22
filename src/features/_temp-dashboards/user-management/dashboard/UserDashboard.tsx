import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import React from 'react';

const UserDashboard: React.FC = () => {
  const stats = [
    {
      label: 'Total Users',
      value: '1,280',
      icon: 'pi pi-users',
      color: 'blue',
    },
    {
      label: 'Active Users',
      value: '1,245',
      icon: 'pi pi-user-check',
      color: 'green',
    },
    { label: 'Blocked', value: '12', icon: 'pi pi-user-minus', color: 'red' },
    {
      label: 'Admin Accounts',
      value: '45',
      icon: 'pi pi-shield',
      color: 'purple',
    },
    {
      label: 'Guest Accounts',
      value: '23',
      icon: 'pi pi-id-card',
      color: 'orange',
    },
  ];

  const activities = [
    {
      type: 'Role Change',
      user: 'johndoe',
      action: 'Assigned "Faculty" role',
      time: '10 mins ago',
      icon: 'pi-key',
      iconColor: 'text-purple-500',
    },
    {
      type: 'Password Reset',
      user: 'admin_jane',
      action: 'Requested manual reset',
      time: '1 hour ago',
      icon: 'pi-refresh',
      iconColor: 'text-orange-500',
    },
    {
      type: 'Login',
      user: 'prof_smith',
      action: 'Logged in from MH, India',
      time: '2 hours ago',
      icon: 'pi-sign-in',
      iconColor: 'text-green-500',
    },
    {
      type: 'Role Removal',
      user: 'k.kumar',
      action: 'Removed "Registrar" role',
      time: '5 hours ago',
      icon: 'pi-trash',
      iconColor: 'text-red-500',
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <div className="mb-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Base Modules &gt; User Management &gt; Dashboard
          </p>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center"
          >
            <div
              className={`w-12 h-12 rounded-full bg-${stat.color}-50 flex items-center justify-center mb-3`}
            >
              <i className={`${stat.icon} text-${stat.color}-500 text-xl`} />
            </div>
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Links removed because additional pages were removed */}
        <div className="lg:col-span-1 bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-gray-200 text-center flex flex-col items-center justify-center">
          <p className="text-gray-400 font-medium font-bold">
            Quick Links Hidden
          </p>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {activities.map((act, i) => (
              <div
                key={i}
                className={`p-4 flex items-center justify-between ${i !== activities.length - 1 ? 'border-b border-gray-50' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                    <i className={`pi ${act.icon} ${act.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {act.user}{' '}
                      <span className="font-normal text-gray-500">
                        {act.action}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {act.type}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{act.time}</span>
              </div>
            ))}
            <div className="p-3 bg-gray-50 text-center">
              <Button
                label="View All Logs"
                className="p-button-text p-button-sm text-blue-600 font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
