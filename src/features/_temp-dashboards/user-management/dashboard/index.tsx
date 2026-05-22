import { motion } from 'motion/react';
import React from 'react';
import PageNav from 'shared/new-components/PageNav';
import ActivityLogs from './components/ActivityLogs';
import KPISection from './components/KPISection';
import { USER_STYLES } from './styles';

const UserDashboard: React.FC = () => {
  return (
    <div className={USER_STYLES.container}>
      <PageNav title="User Management Dashboard" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={USER_STYLES.header.wrapper}
      >
        <div className="mb-2">
          <p className={USER_STYLES.header.breadcrumb}>
            Base Modules &gt; User Management &gt; Dashboard
          </p>
          <h1 className={USER_STYLES.header.title}>User Management</h1>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <KPISection />

      <div className={USER_STYLES.mainGrid}>
        <div className={USER_STYLES.placeholder.card}>
          <p className={USER_STYLES.placeholder.text}>Quick Links Hidden</p>
        </div>

        {/* Recent Activity */}
        <ActivityLogs />
      </div>
    </div>
  );
};

export default UserDashboard;
