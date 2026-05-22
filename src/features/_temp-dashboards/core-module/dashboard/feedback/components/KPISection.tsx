import { motion } from 'motion/react';
import React from 'react';
import { KPIS } from '../constants';
import { FEEDBACK_STYLES } from '../styles';

const KPISection: React.FC = () => {
  return (
    <div className={FEEDBACK_STYLES.kpi.grid}>
      {KPIS.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className={FEEDBACK_STYLES.kpi.card}
        >
          <div
            className={`${FEEDBACK_STYLES.kpi.iconWrapper} bg-${kpi.color}-50`}
          >
            <i className={`pi ${kpi.icon} text-${kpi.color}-500 text-lg`} />
          </div>
          <p className={FEEDBACK_STYLES.kpi.value}>{kpi.value}</p>
          <p className={FEEDBACK_STYLES.kpi.label}>{kpi.label}</p>
          <p className={FEEDBACK_STYLES.kpi.sub}>{kpi.sub}</p>
          <div
            className={`${FEEDBACK_STYLES.kpi.border} bg-${kpi.color}-500`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default KPISection;
