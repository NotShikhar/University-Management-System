import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';
import PageNav from 'shared/new-components/PageNav';
import AccountBooksTable from './components/AccountBooksTable';
import BudgetEstimatesTable from './components/BudgetEstimatesTable';
import KPISection from './components/KPISection';
import MastersSetup from './components/MastersSetup';
import ReportsDownloads from './components/ReportsDownloads';
import RolesResponsibilities from './components/RolesResponsibilities';
import { SESSIONS } from './constants';
import { FSCM_STYLES } from './styles';

const FscmDashboard: React.FC = () => {
  const [selectedFy, setSelectedFy] = useState('2025-2026');

  return (
    <div className={FSCM_STYLES.container}>
      <PageNav title="Financial Supply Chain Management" />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={FSCM_STYLES.header.wrapper}
      >
        <div>
          <p className={FSCM_STYLES.header.breadcrumb}>
            Modules &gt; FSCM &gt; Dashboard
          </p>
          <div className={FSCM_STYLES.header.titleWrapper}>
            <h1 className={FSCM_STYLES.header.title}>
              Financial Supply Chain Management
            </h1>
            <Tag value="FSCM Admin" className={FSCM_STYLES.header.badge} />
          </div>
        </div>
        <div className={FSCM_STYLES.header.actions}>
          <Dropdown
            value={selectedFy}
            options={SESSIONS}
            onChange={e => setSelectedFy(e.value)}
            className={FSCM_STYLES.header.dropdown}
          />
          <Button
            label="Generate Reports"
            icon="pi pi-file-export"
            className="p-button-dark rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* KPI Row */}
      <KPISection />

      <div className={FSCM_STYLES.mainGrid}>
        {/* Financial Year & Books */}
        <div className={FSCM_STYLES.leftCol}>
          <AccountBooksTable />
          <BudgetEstimatesTable />
        </div>

        {/* Side Bar: Masters & Role Hints */}
        <div className={FSCM_STYLES.sidebar.wrapper}>
          <MastersSetup />
          <RolesResponsibilities />
        </div>
      </div>

      {/* Reports Section */}
      <ReportsDownloads />
    </div>
  );
};

export default FscmDashboard;
