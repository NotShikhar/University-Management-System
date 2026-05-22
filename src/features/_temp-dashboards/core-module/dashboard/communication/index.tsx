import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import PageNav from 'shared/new-components/PageNav';
import ActivityTrend from './components/ActivityTrend';
import HistoryTable from './components/HistoryTable';
import KPISection from './components/KPISection';
import RecipientDistribution from './components/RecipientDistribution';
import { COMMUNICATION_STYLES } from './styles';

const CommunicationDashboard: React.FC = () => {
  return (
    <div className={COMMUNICATION_STYLES.container}>
      <PageNav title="Communication Dashboard" />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={COMMUNICATION_STYLES.header.wrapper}
      >
        <div>
          <p className={COMMUNICATION_STYLES.header.breadcrumb}>
            Core Module &gt; Communication System &gt; Admin Dashboard
          </p>
          <div className={COMMUNICATION_STYLES.header.titleWrapper}>
            <h1 className={COMMUNICATION_STYLES.header.title}>
              Communication Overview
            </h1>
            <Tag
              value="Mail System"
              className="bg-blue-100 text-blue-600 font-bold px-3 border-none"
            />
          </div>
        </div>
        <div className={COMMUNICATION_STYLES.header.actions}>
          <Button
            label="New Campaign"
            icon="pi pi-plus"
            className="p-button-dark rounded-xl font-bold"
          />
          <Button
            label="Settings"
            icon="pi pi-cog"
            className="p-button-outlined p-button-secondary rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* KPI Row */}
      <KPISection />

      <div className={COMMUNICATION_STYLES.mainGrid}>
        {/* Analytics Section */}
        <div className={COMMUNICATION_STYLES.analytics.wrapper}>
          <ActivityTrend />
          <HistoryTable />
        </div>

        {/* Sidebar Section */}
        <div className={COMMUNICATION_STYLES.sidebar.wrapper}>
          <RecipientDistribution />
        </div>
      </div>
    </div>
  );
};

export default CommunicationDashboard;
