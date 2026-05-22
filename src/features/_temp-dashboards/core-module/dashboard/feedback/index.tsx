import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import PageNav from 'shared/new-components/PageNav';
import FeedbackTimeline from './components/FeedbackTimeline';
import KPISection from './components/KPISection';
import ResponseAnalytics from './components/ResponseAnalytics';
import StatusDistribution from './components/StatusDistribution';
import { FEEDBACK_STYLES } from './styles';

const FeedbackDashboard: React.FC = () => {
  return (
    <div className={FEEDBACK_STYLES.container}>
      <PageNav title="Feedback Dashboard" />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={FEEDBACK_STYLES.header.wrapper}
      >
        <div>
          <p className={FEEDBACK_STYLES.header.breadcrumb}>
            Core Module &gt; Feedback Management &gt; Admin Dashboard
          </p>
          <div className={FEEDBACK_STYLES.header.titleWrapper}>
            <h1 className={FEEDBACK_STYLES.header.title}>
              Student Feedback Management
            </h1>
            <Tag
              value="Feedback_Admin"
              severity="info"
              className="rounded-md font-bold px-3"
            />
          </div>
        </div>
        <div className={FEEDBACK_STYLES.header.actions}>
          <Button
            label="New Template"
            icon="pi pi-plus"
            className="p-button-dark rounded-xl font-bold"
          />
          <Button
            label="Question Bank"
            icon="pi pi-database"
            className="p-button-outlined p-button-secondary rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* KPI Row */}
      <KPISection />

      <div className={FEEDBACK_STYLES.mainGrid}>
        {/* Left Column (Charts) */}
        <div className={FEEDBACK_STYLES.leftCol}>
          <StatusDistribution />
          <ResponseAnalytics />
        </div>

        {/* Right Column (Timeline) */}
        <div className={FEEDBACK_STYLES.timeline.wrapper}>
          <FeedbackTimeline />
        </div>
      </div>
    </div>
  );
};

export default FeedbackDashboard;
