import { motion } from 'motion/react';
import React from 'react';
import { KPIS } from '../constants';
import { EMPLOYEE_STYLES } from '../styles';

const KPISection: React.FC = () => {
  return (
    <div className={EMPLOYEE_STYLES.kpi.grid}>
      {KPIS.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className={EMPLOYEE_STYLES.kpi.card}
        >
          <div className={EMPLOYEE_STYLES.kpi.header}>
            <div>
              <p className={EMPLOYEE_STYLES.kpi.label}>{kpi.label}</p>
              <p className={EMPLOYEE_STYLES.kpi.value}>{kpi.value}</p>
            </div>
            <div
              className={`${EMPLOYEE_STYLES.kpi.iconWrapper} bg-${kpi.color}-50`}
            >
              <i className={`pi ${kpi.icon} text-${kpi.color}-500 text-lg`} />
            </div>
          </div>
          <p className={EMPLOYEE_STYLES.kpi.sub}>{kpi.sub}</p>
          <div
            className={`absolute bottom-0 left-0 h-1 bg-${kpi.color}-500 ${EMPLOYEE_STYLES.kpi.border}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default KPISection;
