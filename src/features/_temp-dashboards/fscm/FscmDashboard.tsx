import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';

const FscmDashboard: React.FC = () => {
  const [selectedFy, setSelectedFy] = useState('2025-2026');

  const kpis = [
    {
      label: 'Active Financial Years',
      value: '3',
      icon: 'pi-calendar',
      color: 'blue',
    },
    {
      label: 'Books of Accounts',
      value: '5 Total / 2 Active',
      icon: 'pi-book',
      color: 'purple',
    },
    {
      label: 'Budget Categories',
      value: '12 Active',
      icon: 'pi-tags',
      color: 'green',
    },
    {
      label: 'Heads & Subheads',
      value: '145 Mapped',
      icon: 'pi-sitemap',
      color: 'orange',
    },
    {
      label: 'Pending Requests',
      value: '8 In Draft',
      icon: 'pi-clock',
      color: 'red',
    },
  ];

  const financialYearBooks = [
    {
      name: 'University Main Fund',
      ou: 'Main Campus',
      project: 'General Fund',
      type: 'Accrual',
      currency: 'INR',
      status: 'Active',
    },
    {
      name: 'Research Project A',
      ou: 'Sci Faculty',
      project: 'DST-SERB',
      type: 'Cash',
      currency: 'INR',
      status: 'Active',
    },
  ];

  const budgetEstimates = [
    {
      category: 'Capital Expenditure',
      headsCount: 15,
      totalEstimate: '₹ 5.2 Cr',
      status: 'Submitted',
    },
    {
      category: 'Revenue Expenditure',
      headsCount: 42,
      totalEstimate: '₹ 12.8 Cr',
      status: 'Draft',
    },
  ];

  const masters = [
    { label: 'Tags', count: 8, desc: 'Reporting classifications' },
    { label: 'Categories', count: 12, desc: 'Budget classifications' },
    { label: 'Heads', count: 145, desc: 'General ledger heads' },
    { label: 'Banks', count: 4, desc: 'Linked bank accounts' },
    { label: 'Vendors', count: 28, desc: 'Registered suppliers' },
    { label: 'Hierarchy', status: 'Configured', desc: 'Approval workflow' },
  ];

  return (
    <div className="p-8 max-w-425 mx-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10"
      >
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Modules &gt; FSCM &gt; Dashboard
          </p>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">
              Financial Supply Chain Management
            </h1>
            <Tag
              value="FSCM Admin"
              className="bg-blue-50 text-blue-600 text-[10px] font-bold"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Dropdown
            value={selectedFy}
            options={['2025-2026', '2024-2025']}
            onChange={e => setSelectedFy(e.value)}
            className="w-48 rounded-xl"
          />
          <Button
            label="Generate Reports"
            icon="pi pi-file-export"
            className="p-button-dark rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-blue-200 transition-all cursor-pointer group"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-${kpi.color}-50 flex items-center justify-center shrink-0`}
            >
              <i className={`pi ${kpi.icon} text-${kpi.color}-500 text-xl`} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mb-1">
                {kpi.label}
              </p>
              <p className="text-lg font-bold text-gray-900 leading-tight">
                {kpi.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Financial Year & Books */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-gray-800">
                  Financial Year & Account Books
                </h3>
                <p className="text-xs text-gray-400">
                  3 years configured, 2 currently active
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  label="Add FY"
                  icon="pi pi-plus"
                  className="p-button-text p-button-sm font-bold"
                />
                <Button
                  label="Create Book"
                  icon="pi pi-folder-plus"
                  className="p-button-outlined p-button-secondary p-button-sm font-bold"
                />
              </div>
            </div>
            <DataTable
              value={financialYearBooks}
              className="p-datatable-sm"
              responsiveLayout="scroll"
            >
              <Column field="name" header="Book Name" className="font-bold" />
              <Column field="ou" header="Main OU" />
              <Column field="project" header="Project/Uni" />
              <Column
                field="type"
                header="Type"
                body={r => (
                  <span className="text-xs bg-gray-50 px-2 py-1 rounded">
                    {r.type}
                  </span>
                )}
              />
              <Column
                field="status"
                header="Status"
                body={r => (
                  <Tag
                    value={r.status}
                    severity="success"
                    className="text-[9px]"
                  />
                )}
              />
              <Column
                header="Open"
                body={() => (
                  <Button
                    icon="pi pi-arrow-right"
                    className="p-button-text p-button-secondary p-button-sm"
                  />
                )}
              />
            </DataTable>
          </div>

          {/* Budget Estimates */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">
                Budget Estimates Overview
              </h3>
              <Button
                label="Request Budget"
                icon="pi pi-money-bill"
                className="p-button-dark p-button-sm font-bold"
              />
            </div>
            <DataTable
              value={budgetEstimates}
              className="p-datatable-sm"
              responsiveLayout="scroll"
            >
              <Column
                field="category"
                header="Category Name"
                className="font-bold"
              />
              <Column
                field="headsCount"
                header="Heads"
                className="text-center"
              />
              <Column
                field="totalEstimate"
                header="Total Estimate"
                className="font-bold text-blue-600"
              />
              <Column
                field="status"
                header="Status"
                body={r => (
                  <Tag
                    value={r.status}
                    severity={r.status === 'Submitted' ? 'info' : 'warning'}
                  />
                )}
              />
              <Column
                header="Progress"
                body={r => (
                  <div className="flex gap-1">
                    <div className="w-3 h-1 rounded bg-blue-500" />
                    <div className="w-3 h-1 rounded bg-blue-500" />
                    <div
                      className={`w-3 h-1 rounded ${r.status === 'Submitted' ? 'bg-blue-500' : 'bg-gray-200'}`}
                    />
                    <div className="w-3 h-1 rounded bg-gray-200" />
                  </div>
                )}
              />
              <Column
                header="Action"
                body={() => (
                  <Button
                    label="Add Breakup"
                    className="p-button-text p-button-info p-button-sm font-bold p-0"
                  />
                )}
              />
            </DataTable>
          </div>
        </div>

        {/* Side Bar: Masters & Role Hints */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-6">
              Masters Setup Status
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {masters.map((m, i) => (
                <div
                  key={i}
                  className="p-3 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      {m.label}
                    </p>
                    <i className="pi pi-external-link text-[8px] text-gray-300 group-hover:text-blue-500" />
                  </div>
                  <p className="text-lg font-bold text-gray-800 leading-none mb-1">
                    {m.count ?? m.status}
                  </p>
                  <p className="text-[9px] text-gray-400 font-medium leading-none">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
            <Button
              label="Configure All Masters"
              className="w-full mt-6 p-button-outlined p-button-secondary font-bold"
              icon="pi pi-cog"
            />
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <i className="pi pi-shield text-blue-400" />
              Roles & Responsibilities
            </h3>
            <div className="space-y-4">
              {[
                {
                  role: 'fscm_admin',
                  color: 'blue',
                  desc: 'Full module configuration',
                },
                {
                  role: 'fscm_department',
                  color: 'green',
                  desc: 'Raise budget estimates',
                },
                {
                  role: 'fscm_approver',
                  color: 'orange',
                  desc: 'Approve & Allocate',
                },
              ].map(r => (
                <div key={r.role} className="flex gap-3">
                  <div className={`w-1 h-8 rounded-full bg-${r.color}-500`} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                      {r.role}
                    </p>
                    <p className="text-[11px] text-gray-400">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reports Section */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-8">Reports & Downloads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Budget Estimation Report',
            'Budget Transfer Report',
            'Category Mapping Report',
            'Expenditure Report',
            'Bank Account Report',
            'Vendor Master Report',
          ].map(report => (
            <div
              key={report}
              className="p-4 border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-gray-50 hover:shadow-sm transition-all group flex flex-col justify-between h-32"
            >
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-1 leading-tight">
                  {report}
                </h4>
                <p className="text-[10px] text-gray-400">
                  Monthly/Yearly detailed breakdown
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-blue-600 uppercase">
                  PDF / Excel
                </span>
                <Button
                  icon="pi pi-download"
                  className="p-button-text p-button-sm p-button-secondary p-0 group-hover:text-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FscmDashboard;
