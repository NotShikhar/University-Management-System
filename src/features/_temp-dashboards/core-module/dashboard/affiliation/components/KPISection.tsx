import { motion } from 'motion/react';
import React from 'react';
import { KPIS } from '../constants';
import { AFFILIATION_STYLES } from '../styles';

const KPISection: React.FC = () => {
  return (
    <div className={AFFILIATION_STYLES.kpi.grid}>
      {KPIS.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className={AFFILIATION_STYLES.kpi.card}
        >
          <div
            className={`${AFFILIATION_STYLES.kpi.iconWrapper} bg-${kpi.color}-50 group-hover:bg-${kpi.color}-500`}
          >
            <i
              className={`pi ${kpi.icon} text-${kpi.color}-500 group-hover:text-white text-xl transition-colors duration-300`}
            />
          </div>
          <p className={AFFILIATION_STYLES.kpi.value}>{kpi.value}</p>
          <p className={AFFILIATION_STYLES.kpi.label}>{kpi.label}</p>
          <p className={AFFILIATION_STYLES.kpi.sub}>{kpi.sub}</p>
          <div
            className={`${AFFILIATION_STYLES.kpi.border} bg-${kpi.color}-500`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default KPISection;
