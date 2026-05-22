import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { ProgressBar } from 'primereact/progressbar';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';

const CasDashboard: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState('2025-2026');

  const kpis = [
    {
      label: 'APAR Applications',
      total: 120,
      pending: 45,
      completed: 75,
      color: 'blue',
    },
    {
      label: 'PBAS Applications',
      total: 85,
      pending: 20,
      completed: 65,
      color: 'purple',
    },
    {
      label: 'CAS Promotions',
      total: 42,
      pending: 15,
      completed: 27,
      color: 'orange',
    },
  ];

  const applications = [
    {
      id: 'APP101',
      name: 'Dr. John Watson',
      designation: 'Asst. Professor',
      type: 'CAS',
      session: '2025-26',
      stage: 'With HOD',
      status: 'In Progress',
      updated: '2h ago',
    },
    {
      id: 'APP102',
      name: 'Prof. Sherlock Holmes',
      designation: 'Professor',
      type: 'APAR',
      session: '2025-26',
      stage: 'With IQAC',
      status: 'Under Review',
      updated: '5h ago',
    },
    {
      id: 'APP103',
      name: 'Ms. Irene Adler',
      designation: 'Librarian',
      type: 'PBAS',
      session: '2024-25',
      stage: 'Completed',
      status: 'Approved',
      updated: '1d ago',
    },
    {
      id: 'APP104',
      name: 'Dr. James Moriarty',
      designation: 'Professor',
      type: 'CAS',
      session: '2025-26',
      stage: 'With Employee',
      status: 'Reverted',
      updated: '3h ago',
    },
  ];

  const activeSessions = [
    {
      name: 'PBAS Session 2025',
      type: 'PBAS',
      dates: 'July 24 - June 25',
      appStatus: 'OPEN',
      recordStatus: 'Active',
      count: 85,
    },
    {
      name: 'APAR Cycle 2025',
      type: 'APAR',
      dates: 'Jan 25 - Dec 25',
      appStatus: 'OPEN',
      recordStatus: 'Active',
      count: 120,
    },
  ];

  const getStatusSeverity = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'In Progress':
        return 'info';
      case 'Under Review':
        return 'warning';
      case 'Reverted':
        return 'danger';
      default:
        return 'secondary';
    }
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
            Modules &gt; CAS &gt; Dashboard
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            CAS Admin Dashboard
          </h1>
          <p className="text-gray-500 text-sm font-medium italic">
            Overview of Career Advancement & Performance Appraisal applications
          </p>
        </div>
        <div className="flex gap-3">
          <Dropdown
            value={selectedSession}
            options={['2025-2026', '2024-2025']}
            onChange={e => setSelectedSession(e.value)}
            className="w-48 rounded-xl"
          />
          <Button
            label="Track Application"
            icon="pi pi-map-marker"
            className="p-button-outlined p-button-secondary rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white p-6 rounded-2xl border-l-[6px] border-${kpi.color}-500 shadow-sm`}
          >
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              {kpi.label}
            </h3>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold text-gray-900">{kpi.total}</p>
                <p className="text-[10px] text-gray-400 font-bold">
                  TOTAL APPLICATIONS
                </p>
              </div>
              <div className="text-right">
                <div className="flex gap-4 mb-2">
                  <div>
                    <p className="text-sm font-bold text-orange-500">
                      {kpi.pending}
                    </p>
                    <p className="text-[8px] text-gray-400 font-bold uppercase">
                      Pending
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-500">
                      {kpi.completed}
                    </p>
                    <p className="text-[8px] text-gray-400 font-bold uppercase">
                      Done
                    </p>
                  </div>
                </div>
                <ProgressBar
                  value={Math.round((kpi.completed / kpi.total) * 100)}
                  showValue={false}
                  style={{ height: '4px', width: '80px' }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Main Applications List */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-50 flex flex-wrap gap-4 items-center justify-between">
            <h3 className="font-bold text-gray-800">
              Recent Applications status
            </h3>
            <div className="flex gap-2">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search Employee..."
                  className="p-inputtext-sm rounded-lg"
                />
              </span>
              <Button
                icon="pi pi-filter"
                className="p-button-text p-button-secondary"
              />
            </div>
          </div>
          <DataTable
            value={applications}
            className="p-datatable-sm"
            responsiveLayout="scroll"
          >
            <Column
              field="id"
              header="App ID"
              className="font-bold text-blue-600"
            />
            <Column field="name" header="Employee Name" className="font-bold" />
            <Column
              field="type"
              header="Type"
              body={r => (
                <span className="font-bold text-[10px] bg-gray-50 px-2 py-1 rounded">
                  {r.type}
                </span>
              )}
            />
            <Column field="stage" header="Current Stage" className="text-xs" />
            <Column
              field="status"
              header="Status"
              body={r => (
                <Tag value={r.status} severity={getStatusSeverity(r.status)} />
              )}
            />
            <Column
              field="updated"
              header="Last Activity"
              className="text-xs text-gray-400"
            />
            <Column
              header="Actions"
              body={() => (
                <div className="flex gap-1">
                  <Button
                    icon="pi pi-eye"
                    className="p-button-text p-button-secondary p-button-rounded"
                  />
                  <Button
                    icon="pi pi-map-marker"
                    className="p-button-text p-button-info p-button-rounded"
                  />
                </div>
              )}
            />
          </DataTable>
          <div className="p-3 bg-gray-50 text-center">
            <Button
              label="View All Applications"
              className="p-button-text p-button-sm font-bold text-blue-600"
            />
          </div>
        </div>

        {/* Side Panel: Quick Actions & Sessions */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl text-white">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <i className="pi pi-bolt text-yellow-400" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Configure Sessions', icon: 'pi-calendar-plus' },
                { label: 'Track All App', icon: 'pi-map' },
                { label: 'Generate Reports', icon: 'pi-file-pdf' },
                { label: 'View APAR list', icon: 'pi-list' },
              ].map(action => (
                <button
                  key={action.label}
                  className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                >
                  <i
                    className={`pi ${action.icon} text-white/40 group-hover:text-white mb-2`}
                  />
                  <span className="text-[10px] font-bold text-white/70 group-hover:text-white text-center">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Active Sessions</h3>
            <div className="space-y-4">
              {activeSessions.map((session, i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-50 rounded-xl bg-gray-50/50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs font-bold text-gray-900">
                        {session.name}
                      </p>
                      <p className="text-[9px] text-gray-400 font-medium">
                        {session.dates}
                      </p>
                    </div>
                    <Tag
                      value={session.appStatus}
                      severity={
                        session.appStatus === 'OPEN' ? 'success' : 'danger'
                      }
                      className="text-[8px]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {session.count} Applications
                    </span>
                    <Button
                      icon="pi pi-chevron-right"
                      className="p-button-text p-button-sm p-button-secondary p-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Insights */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-8">
          Role-wise Application Funnel
        </h3>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
          {[
            { stage: 'Employee', count: 15, icon: 'pi-user' },
            { stage: 'Reporting Off', count: 12, icon: 'pi-file-edit' },
            { stage: 'Reviewing Off', count: 8, icon: 'pi-search-plus' },
            { stage: 'HOD', count: 5, icon: 'pi-briefcase' },
            { stage: 'IQAC', count: 18, icon: 'pi-shield' },
            { stage: 'Dean Academics', count: 3, icon: 'pi-award' },
            { stage: 'Final Approval', count: 27, icon: 'pi-check-circle' },
          ].map((step, i) => (
            <React.Fragment key={step.stage}>
              <div className="flex flex-col items-center flex-1 min-w-[100px]">
                <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center mb-2 relative group cursor-help">
                  <i className={`pi ${step.icon} text-blue-600`} />
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {step.count}
                  </div>

                  {/* Tooltip mockup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-gray-900 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center">
                    {step.count} applications pending at {step.stage}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-tighter">
                  {step.stage}
                </span>
              </div>
              {i < 6 && (
                <div className="hidden lg:block w-full h-[1px] bg-gray-100 shrink flex-1 mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasDashboard;
