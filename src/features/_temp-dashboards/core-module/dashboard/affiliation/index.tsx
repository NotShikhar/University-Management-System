import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import PageNav from 'shared/new-components/PageNav';
import ApplicationTable from './components/ApplicationTable';
import KPISection from './components/KPISection';
import QuickActions from './components/QuickActions';
import RecentPayments from './components/RecentPayments';
import RevenueChart from './components/RevenueChart';
import { AFFILIATION_STYLES } from './styles';

const AffiliationDashboard: React.FC = () => {
  return (
    <div className={AFFILIATION_STYLES.container}>
      <PageNav title="Affiliation Dashboard" />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={AFFILIATION_STYLES.header.wrapper}
      >
        <div>
          <p className={AFFILIATION_STYLES.header.breadcrumb}>
            Core Module &gt; Affiliation Management &gt; Admin Control
          </p>
          <div className={AFFILIATION_STYLES.header.titleWrapper}>
            <h1 className={AFFILIATION_STYLES.header.title}>
              Affiliation Dashboard
            </h1>
            <Tag
              value="Affiliation_Admin"
              severity="info"
              className="rounded-md font-bold px-3"
            />
          </div>
        </div>
        <div className={AFFILIATION_STYLES.header.actions}>
          <Button
            label="Registration Requests"
            icon="pi pi-list"
            className="p-button-outlined p-button-secondary rounded-xl font-bold"
          />
          <Button
            label="Configure Masters"
            icon="pi pi-sliders-h"
            className="p-button-dark rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* KPI Row */}
      <KPISection />

      <div className={AFFILIATION_STYLES.mainGrid}>
        {/* Main Application Table */}
        <div className={AFFILIATION_STYLES.tableSection.wrapper}>
          <ApplicationTable />

          {/* Quick Actions Shortcuts */}
          <QuickActions />
        </div>

        {/* Sidebar */}
        <div className={AFFILIATION_STYLES.sidebar.wrapper}>
          <RevenueChart />
          <RecentPayments />
        </div>
      </div>
    </div>
  );
};

export default AffiliationDashboard;
