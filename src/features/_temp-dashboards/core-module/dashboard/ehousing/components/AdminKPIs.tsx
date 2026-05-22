import { motion } from 'motion/react';
import React from 'react';
import { ADMIN_KPIS } from '../constants';
import { EHOUSING_STYLES } from '../styles';

const AdminKPIs: React.FC = () => {
  return (
    <div className={EHOUSING_STYLES.admin.kpiGrid}>
      {ADMIN_KPIS.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className={EHOUSING_STYLES.admin.kpiCard}
        >
          <div
            className={`${EHOUSING_STYLES.admin.iconWrapper} bg-${kpi.color}-50`}
          >
            <i className={`pi ${kpi.icon} text-${kpi.color}-500 text-xl`} />
          </div>
          <p className={EHOUSING_STYLES.admin.kpiValue}>{kpi.value}</p>
          <p className={EHOUSING_STYLES.admin.kpiLabel}>{kpi.label}</p>
          <p className={EHOUSING_STYLES.admin.kpiSub}>{kpi.sub}</p>
          <div
            className={`${EHOUSING_STYLES.admin.kpiBorder} bg-${kpi.color}-500`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AdminKPIs;
