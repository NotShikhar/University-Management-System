import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import React from 'react';

const EmployeeDashboard: React.FC = () => {
  const kpis = [
    {
      label: 'Total Employees',
      value: '840',
      sub: 'Teaching: 450 | Non-Teaching: 390',
      icon: 'pi-users',
      color: 'blue',
    },
    {
      label: 'Posts Status',
      value: '1,200',
      sub: 'Sanctioned: 1.2k | Filled: 840 | Vacant: 360',
      icon: 'pi-briefcase',
      color: 'red',
    },
    {
      label: 'Active Status',
      value: '825',
      sub: 'Active: 825 | Inactive: 15',
      icon: 'pi-user-check',
      color: 'green',
    },
    {
      label: 'Pending Approvals',
      value: '12',
      sub: 'Profiles: 8 | Verification: 4',
      icon: 'pi-clock',
      color: 'orange',
    },
  ];

  const departmentData = {
    labels: [
      'Comp Sci',
      'Mechanical',
      'Civil',
      'Physics',
      'Chemistry',
      'Admin',
    ],
    datasets: [
      {
        label: 'Employee Count',
        data: [120, 95, 80, 60, 55, 110],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderRadius: 8,
      },
    ],
  };

  const natureData = {
    labels: ['Permanent', 'Contract', 'Probation', 'Guest'],
    datasets: [
      {
        data: [500, 200, 100, 40],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10"
      >
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Base Modules &gt; Employee Management &gt; Dashboard
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            Employee Management Dashboard
          </h1>
        </div>
        <div className="flex gap-2">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <input
              type="text"
              placeholder="Global Employee Search..."
              className="p-2 pl-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-64 lg:w-96 text-sm"
            />
          </span>
          <Button
            icon="pi pi-filter"
            className="p-button-outlined p-button-secondary rounded-xl"
          />
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  {kpi.label}
                </p>
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              </div>
              <div
                className={`w-10 h-10 rounded-lg bg-${kpi.color}-50 flex items-center justify-center`}
              >
                <i className={`pi ${kpi.icon} text-${kpi.color}-500 text-lg`} />
              </div>
            </div>
            <p className="text-[11px] font-semibold text-gray-400 truncate">
              {kpi.sub}
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-${kpi.color}-500 transition-all w-0 group-hover:w-full`}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Department Distribution */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">
              Department-wise Distribution
            </h3>
            <Button
              label="View Details"
              className="p-button-text p-button-sm font-bold"
            />
          </div>
          <Chart
            type="bar"
            data={departmentData}
            options={{ maintainAspectRatio: false, aspectRatio: 2 }}
          />
        </div>

        {/* Nature of Employment */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-6">Nature of Employment</h3>
          <div className="h-64">
            <Chart
              type="doughnut"
              data={natureData}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="mt-4 space-y-2">
            {natureData.labels.map((l, i) => (
              <div
                key={l}
                className="flex justify-between items-center text-xs"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        natureData.datasets[0].backgroundColor[i],
                    }}
                  />
                  <span className="text-gray-600">{l}</span>
                </div>
                <span className="font-bold text-gray-900">
                  {natureData.datasets[0].data[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions & Recent removed because additional pages were removed */}
        <div className="lg:col-span-3 bg-gray-50 p-12 rounded-2xl border-2 border-dashed border-gray-200 text-center">
          <p className="text-gray-400 font-medium">
            Quick Actions and Approvals Management Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
