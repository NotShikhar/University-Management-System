import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';
import PageNav from 'shared/new-components/PageNav';
import ActiveSessions from './components/ActiveSessions';
import ApplicationTable from './components/ApplicationTable';
import KPISection from './components/KPISection';
import QuickActions from './components/QuickActions';
import WorkflowFunnel from './components/WorkflowFunnel';
import { SESSIONS } from './constants';
import { CAS_STYLES } from './styles';

const CasDashboard: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState('2025-2026');

  return (
    <div className={CAS_STYLES.container}>
      <PageNav title="CAS Admin Dashboard" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={CAS_STYLES.header.wrapper}
      >
        <div>
          <p className={CAS_STYLES.header.breadcrumb}>
            Modules &gt; CAS &gt; Dashboard
          </p>
          <h1 className={CAS_STYLES.header.title}>CAS Admin Dashboard</h1>
          <p className={CAS_STYLES.header.subtitle}>
            Overview of Career Advancement & Performance Appraisal applications
          </p>
        </div>
        <div className={CAS_STYLES.header.actions}>
          <Dropdown
            value={selectedSession}
            options={SESSIONS}
            onChange={e => setSelectedSession(e.value)}
            className={CAS_STYLES.header.dropdown}
          />
          <Button
            label="Track Application"
            icon="pi pi-map-marker"
            className="p-button-outlined p-button-secondary rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* KPI Cards */}
      <KPISection />

      <div className={CAS_STYLES.mainGrid}>
        {/* Main Applications List */}
        <ApplicationTable />

        {/* Side Panel: Quick Actions & Sessions */}
        <div className={CAS_STYLES.sidebar.wrapper}>
          <QuickActions />
          <ActiveSessions />
        </div>
      </div>

      {/* Workflow Insights */}
      <WorkflowFunnel />
    </div>
  );
};

export default CasDashboard;
