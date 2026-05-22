import { AnimatePresence, motion } from 'motion/react';
import { SelectButton } from 'primereact/selectbutton';
import React, { useState } from 'react';
import PageNav from 'shared/new-components/PageNav';
import AdminKPIs from './components/AdminKPIs';
import ApplicationTracking from './components/ApplicationTracking';
import AvailableSchemes from './components/AvailableSchemes';
import EmployeeView from './components/EmployeeView';
import InventorySidebar from './components/InventorySidebar';
import { ROLES } from './constants';
import { EHOUSING_STYLES } from './styles';

const EHousingDashboard: React.FC = () => {
  const [role, setRole] = useState('admin');

  return (
    <div className={EHOUSING_STYLES.container}>
      <PageNav title="Residence Allocation Dashboard" />
      {/* Header & Role Toggle */}
      <div className={EHOUSING_STYLES.header.wrapper}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className={EHOUSING_STYLES.header.breadcrumb}>
            Core Module &gt; E-Housing Management
          </p>
          <h1 className={EHOUSING_STYLES.header.title}>
            Residence Allocation Dashboard
          </h1>
        </motion.div>

        <div className={EHOUSING_STYLES.header.toggleWrapper}>
          <span className={EHOUSING_STYLES.header.toggleLabel}>Viewing As</span>
          <SelectButton
            value={role}
            options={ROLES}
            onChange={e => setRole(e.value || 'admin')}
            className="rounded-xl overflow-hidden custom-role-selector"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {role === 'admin' ? (
          <motion.div
            key="admin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            {/* Admin View */}
            <AdminKPIs />

            <div className={EHOUSING_STYLES.mainGrid}>
              <ApplicationTracking />
              <InventorySidebar />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="employee"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            {/* Employee View */}
            <div className={EHOUSING_STYLES.employee.grid}>
              <EmployeeView />
              <AvailableSchemes />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EHousingDashboard;
