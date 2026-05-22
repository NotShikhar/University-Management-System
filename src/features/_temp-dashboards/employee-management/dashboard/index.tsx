import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import React from 'react';
import PageNav from 'shared/new-components/PageNav';
import DepartmentDistribution from './components/DepartmentDistribution';
import EmploymentNature from './components/EmploymentNature';
import KPISection from './components/KPISection';
import { EMPLOYEE_STYLES } from './styles';

const EmployeeDashboard: React.FC = () => {
  return (
    <div className={EMPLOYEE_STYLES.container}>
      <PageNav title="Employee Management Dashboard" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={EMPLOYEE_STYLES.header.wrapper}
      >
        <div>
          <p className={EMPLOYEE_STYLES.header.breadcrumb}>
            Base Modules &gt; Employee Management &gt; Dashboard
          </p>
          <h1 className={EMPLOYEE_STYLES.header.title}>
            Employee Management Dashboard
          </h1>
        </div>
        <div className={EMPLOYEE_STYLES.header.searchWrapper}>
          <span className={EMPLOYEE_STYLES.header.searchIconWrapper}>
            <i className="pi pi-search" />
            <input
              type="text"
              placeholder="Global Employee Search..."
              className={EMPLOYEE_STYLES.header.searchInput}
            />
          </span>
          <Button
            icon="pi pi-filter"
            className="p-button-outlined p-button-secondary rounded-xl"
          />
        </div>
      </motion.div>

      {/* KPI Cards */}
      <KPISection />

      <div className={EMPLOYEE_STYLES.chartsGrid}>
        {/* Department Distribution */}
        <DepartmentDistribution />

        {/* Nature of Employment */}
        <EmploymentNature />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className={EMPLOYEE_STYLES.placeholder.wrapper}>
          <p className={EMPLOYEE_STYLES.placeholder.text}>
            Quick Actions and Approvals Management Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
