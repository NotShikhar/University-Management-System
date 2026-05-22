import { motion } from 'motion/react';
import React from 'react';
import { KPIS } from '../constants';
import { COMMUNICATION_STYLES } from '../styles';

const KPISection: React.FC = () => {
  return (
    <div className={COMMUNICATION_STYLES.kpi.grid}>
      {KPIS.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className={COMMUNICATION_STYLES.kpi.card}
        >
          <div
            className={`${COMMUNICATION_STYLES.kpi.iconWrapper} bg-${kpi.color}-50 group-hover:bg-${kpi.color}-500`}
          >
            <i
              className={`pi ${kpi.icon} text-${kpi.color}-500 group-hover:text-white text-2xl transition-colors duration-300`}
            />
          </div>
          <p className={COMMUNICATION_STYLES.kpi.value}>{kpi.value}</p>
          <p className={COMMUNICATION_STYLES.kpi.label}>{kpi.label}</p>
          <p className={COMMUNICATION_STYLES.kpi.sub}>{kpi.sub}</p>
          <div className={COMMUNICATION_STYLES.kpi.decoration} />
        </motion.div>
      ))}
    </div>
  );
};

export default KPISection;
