import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tag } from 'primereact/tag';
import React, { useRef, useState } from 'react';

const ProgrammeDashboardV2: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const op = useRef<any>(null);

  const summaryTiles = [
    {
      label: 'Total active',
      value: '118',
      sub: 'Programs',
      icon: 'pi-check-circle',
      color: 'green',
    },
    {
      label: 'Total inactive',
      value: '6',
      sub: 'Programs',
      icon: 'pi-times-circle',
      color: 'red',
    },
    {
      label: 'UG programmes',
      value: '45',
      sub: 'Bachelor Level',
      icon: 'pi-book',
      color: 'blue',
    },
    {
      label: 'PG programmes',
      value: '32',
      sub: 'Master Level',
      icon: 'pi-graduation-cap',
      color: 'purple',
    },
    {
      label: 'Diploma / Cert',
      value: '28',
      sub: 'Specialized',
      icon: 'pi-id-card',
      color: 'teal',
    },
    {
      label: 'NEP-based',
      value: '64',
      sub: 'Credit Scheme',
      icon: 'pi-verified',
      color: 'amber',
    },
  ];

  const settingsActions = [
    {
      label: 'Add New Programme',
      icon: 'pi-plus-circle',
      color: 'blue',
      desc: 'Create new programmes',
    },
    {
      label: 'Programme',
      icon: 'pi-list',
      color: 'indigo',
      desc: 'Configured programmes',
    },
    {
      label: 'Courses',
      icon: 'pi-book',
      color: 'teal',
      desc: 'Course management',
    },
    {
      label: 'Academic Distinction',
      icon: 'pi-star',
      color: 'amber',
      desc: 'Degree, Diploma, etc.',
    },
    {
      label: 'Bulk import courses',
      icon: 'pi-upload',
      color: 'cyan',
      desc: 'Upload via Excel',
    },
    {
      label: 'Uploaded Documents',
      icon: 'pi-file-pdf',
      color: 'rose',
      desc: 'Document repository',
    },
    {
      label: 'Programme Re-Registration',
      icon: 'pi-refresh',
      color: 'emerald',
      desc: 'Student management',
    },
    {
      label: 'Advance Settings',
      icon: 'pi-sliders-h',
      color: 'orange',
      desc: 'Hierarchy settings',
      isMega: true,
    },
    {
      label: 'Admission Settings',
      icon: 'pi-user-plus',
      color: 'violet',
      desc: 'Admin configs',
    },
    {
      label: 'Access Control',
      icon: 'pi-key',
      color: 'slate',
      desc: 'Rights & permissions',
    },
  ];

  const advanceSubItems = [
    'Programme Disciplines',
    'UGC Specified Degree',
    'Admission Quotas',
    'Enrolment Types',
    'Enrolment Status',
    'Exam Schemes',
  ];

  const programmes = [
    {
      id: 1,
      code: 'BSCCS',
      shortCode: 'BSCCS01',
      title: 'B.Sc. Computer Science',
      titleHi: 'बी.एस.सी. कंप्यूटर साइंस',
      ugcDegree: 'B.Sc.',
      type: 'Degree',
      level: 'Bachelor',
      mode: 'Regular',
      examScheme: 'Semester',
      creditScheme: 'Yes (NEP)',
      totalCredits: 120,
      minDuration: '3 Years',
      maxDuration: '5 Years',
      lateralEntry: 'Yes',
      interimExit: 'Yes',
      yearOfStart: 2020,
      status: 'Active',
      orgUnit: 'School of CS & IT',
      seatSnapshot: { sanctioned: 60, general: 30, sc: 9, st: 5, obc: 16 },
      feeRange: 'From ₹15,000 / Sem',
      completeness: {
        orgUnits: true,
        criteria: true,
        docs: true,
        seatFee: true,
        courses: true,
      },
    },
    {
      id: 2,
      code: 'MABIO',
      shortCode: 'MABIO02',
      title: 'M.A. Biotechnology',
      titleHi: 'एम.ए. जैव प्रौद्योगिकी',
      ugcDegree: 'M.A.',
      type: 'Degree',
      level: 'Master',
      mode: 'Regular',
      examScheme: 'Semester',
      creditScheme: 'No',
      totalCredits: 80,
      minDuration: '2 Years',
      maxDuration: '4 Years',
      lateralEntry: 'No',
      interimExit: 'No',
      yearOfStart: 2018,
      status: 'Active',
      orgUnit: 'School of Bioscience',
      seatSnapshot: { sanctioned: 30, general: 15, sc: 4, st: 2, obc: 9 },
      feeRange: 'From ₹25,000 / Sem',
      completeness: {
        orgUnits: true,
        criteria: true,
        docs: false,
        seatFee: true,
        courses: true,
      },
    },
  ];

  const levels = [
    { label: 'Bachelor', value: 'Bachelor' },
    { label: 'Master', value: 'Master' },
    { label: 'Diploma', value: 'Diploma' },
    { label: 'Doctoral', value: 'Doctoral' },
  ];

  const completenessTemplate = (completeness: any) => {
    return (
      <div className="flex gap-1">
        <div
          title="Org Units"
          className={`w-2 h-2 rounded-full ${completeness.orgUnits ? 'bg-green-500' : 'bg-gray-300'}`}
        />
        <div
          title="Criteria"
          className={`w-2 h-2 rounded-full ${completeness.criteria ? 'bg-green-500' : 'bg-gray-300'}`}
        />
        <div
          title="Docs"
          className={`w-2 h-2 rounded-full ${completeness.docs ? 'bg-green-500' : 'bg-gray-300'}`}
        />
        <div
          title="Seat/Fee"
          className={`w-2 h-2 rounded-full ${completeness.seatFee ? 'bg-green-500' : 'bg-gray-300'}`}
        />
        <div
          title="Courses"
          className={`w-2 h-2 rounded-full ${completeness.courses ? 'bg-green-500' : 'bg-gray-300'}`}
        />
      </div>
    );
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <Tag
        value={rowData.status}
        severity={rowData.status === 'Active' ? 'success' : 'danger'}
        className="rounded-full px-3 text-[10px]"
      />
    );
  };

  const rowExpansionTemplate = (data: any) => {
    return (
      <div className="p-4 bg-gray-50 rounded-xl m-2 border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Detailed Snapshot: {data.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="text-xs font-bold text-blue-600 uppercase mb-3">
              Seat Distribution
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sanctioned</span>{' '}
                <span className="font-bold">
                  {data.seatSnapshot.sanctioned}
                </span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '100%' }} />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 text-[11px]">
                <div className="flex justify-between">
                  <span>Gen: {data.seatSnapshot.general}</span>
                </div>
                <div className="flex justify-between">
                  <span>SC: {data.seatSnapshot.sc}</span>
                </div>
                <div className="flex justify-between">
                  <span>ST: {data.seatSnapshot.st}</span>
                </div>
                <div className="flex justify-between">
                  <span>OBC: {data.seatSnapshot.obc}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="text-xs font-bold text-purple-600 uppercase mb-3">
              Fee Structure
            </h4>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              {data.feeRange}
            </p>
            <p className="text-xs text-gray-400">Currency: INR (₹)</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="text-xs font-bold text-teal-600 uppercase mb-3">
              Configuration Check
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(data.completeness).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2 text-xs">
                  <i
                    className={`pi ${val ? 'pi-check-circle text-green-500' : 'pi-times-circle text-red-500'}`}
                  />
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 max-w-[1800px] mx-auto min-h-screen bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10"
      >
        <div>
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Core Module &gt; Programme Management &gt; Admin Control Center
          </p>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Programme Dashboard <span className="text-blue-600">v2</span>
          </h1>
        </div>
        <div className="flex gap-3">
          <Button
            icon="pi pi-bell"
            className="p-button-rounded p-button-text p-button-secondary"
          />
          <Button
            label="New Programme"
            icon="pi pi-plus"
            className="p-button-primary rounded-xl font-bold shadow-lg shadow-blue-200"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-12 space-y-12">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {summaryTiles.map((tile, index) => (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white p-5 rounded-2xl border-b-4 border-${tile.color}-500 shadow-sm hover:shadow-md transition-all`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-${tile.color}-50 flex items-center justify-center mb-4`}
                >
                  <i
                    className={`pi ${tile.icon} text-${tile.color}-600 text-lg`}
                  />
                </div>
                <p className="text-3xl font-black text-gray-900">
                  {tile.value}
                </p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                  {tile.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Section 1: Settings */}
          <section className="space-y-6">
            <div className="flex justify-between items-center bg-gray-50/50 p-4 rounded-2xl">
              <h2 className="text-2xl font-black text-gray-800">
                1. Settings & Configurations
              </h2>
              <Tag value="Admin Access Only" severity="info" className="px-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {settingsActions.map(action => (
                <motion.div
                  key={action.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={e => (action.isMega ? op.current.toggle(e) : null)}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-blue-200 hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-${action.color}-50 flex items-center justify-center mb-4 group-hover:bg-${action.color}-500 transition-colors`}
                  >
                    <i
                      className={`pi ${action.icon} text-${action.color}-500 group-hover:text-white text-xl`}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 leading-tight mb-1">
                    {action.label}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-medium italic">
                    {action.desc}
                  </p>

                  {action.isMega && (
                    <div className="mt-3 flex items-center gap-1 text-[10px] text-orange-500 font-bold uppercase">
                      <span>View 6 Sub-items</span>
                      <i className="pi pi-chevron-down" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <OverlayPanel
              ref={op}
              className="shadow-2xl rounded-2xl border-none p-2 bg-gray-900 text-white w-64"
            >
              <div className="p-3">
                <p className="text-[10px] font-bold uppercase text-orange-400 mb-3 tracking-widest">
                  Advance Settings
                </p>
                <div className="space-y-1">
                  {advanceSubItems.map(item => (
                    <div
                      key={item}
                      className="p-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors text-xs font-medium flex items-center justify-between group"
                    >
                      <span>{item}</span>
                      <i className="pi pi-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </OverlayPanel>
          </section>

          {/* Section 2: Programme Management */}
          <section className="space-y-6">
            <div className="flex justify-between items-center bg-gray-50/50 p-4 rounded-2xl">
              <h2 className="text-2xl font-black text-gray-800">
                2. Programme Management
              </h2>
              <div className="flex gap-3">
                <span className="p-input-icon-left">
                  <i className="pi pi-search text-gray-400" />
                  <InputText
                    value={globalFilter}
                    onChange={e => setGlobalFilter(e.target.value)}
                    placeholder="Quick Search..."
                    className="p-inputtext-sm rounded-xl border-gray-200 w-64"
                  />
                </span>
                <Dropdown
                  value={selectedLevel}
                  options={levels}
                  onChange={e => setSelectedLevel(e.value)}
                  placeholder="All Levels"
                  className="p-dropdown-sm rounded-xl border-gray-200 w-40"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <DataTable
                value={programmes}
                expandedRows={[]}
                rowExpansionTemplate={rowExpansionTemplate}
                dataKey="id"
                paginator
                rows={5}
                className="p-datatable-sm"
                globalFilter={globalFilter}
                responsiveLayout="scroll"
              >
                <Column expander={true} style={{ width: '3rem' }} />
                <Column
                  field="shortCode"
                  header="Code"
                  sortable
                  className="font-bold text-blue-600 text-xs"
                ></Column>
                <Column
                  header="Programme"
                  sortable
                  field="title"
                  body={d => (
                    <div className="w-56">
                      <div className="font-bold text-gray-900 leading-tight">
                        {d.title}
                      </div>
                      <div className="text-[10px] text-gray-400 font-hindi">
                        {d.titleHi}
                      </div>
                    </div>
                  )}
                />
                <Column
                  field="level"
                  header="Level"
                  sortable
                  className="text-xs"
                ></Column>
                <Column field="type" header="Type" className="text-xs"></Column>
                <Column field="mode" header="Mode" className="text-xs"></Column>
                <Column
                  field="examScheme"
                  header="Scheme"
                  className="text-xs"
                ></Column>
                <Column
                  header="NEP"
                  field="creditScheme"
                  className="text-xs text-center"
                  body={d => (
                    <Tag
                      value={d.creditScheme.includes('Yes') ? '✓' : '✗'}
                      severity={
                        d.creditScheme.includes('Yes') ? 'success' : 'secondary'
                      }
                      className="rounded-md"
                    />
                  )}
                />
                <Column
                  header="Duration"
                  body={d => <span className="text-xs">{d.minDuration}</span>}
                  className="text-xs"
                />
                <Column
                  header="Config"
                  body={d => completenessTemplate(d.completeness)}
                />
                <Column
                  field="status"
                  header="Status"
                  body={statusBodyTemplate}
                ></Column>
                <Column
                  header="Actions"
                  body={() => (
                    <div className="flex gap-1">
                      <Button
                        icon="pi pi-pencil"
                        className="p-button-text p-button-sm p-button-info"
                      />
                      <Button
                        icon="pi pi-cog"
                        className="p-button-text p-button-sm p-button-warning"
                      />
                    </div>
                  )}
                />
              </DataTable>
            </div>
          </section>
        </div>
      </div>

      {/* Floating System Info */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-6 z-50 border border-white/10 backdrop-blur-md"
      >
        <div className="flex gap-6 border-r border-white/20 pr-6">
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-gray-400">
              NEP Enabled
            </p>
            <p className="text-xl font-black text-green-400">64</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-gray-400">
              Lateral Entry
            </p>
            <p className="text-xl font-black text-amber-400">22</p>
          </div>
        </div>
        <Button
          label="Global Stats"
          icon="pi pi-chart-line"
          className="p-button-text text-white p-button-sm font-bold"
        />
      </motion.div>
    </div>
  );
};

export default ProgrammeDashboardV2;
