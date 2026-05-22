import { motion } from 'motion/react';
import React from 'react';
import { KPIS } from '../constants';
import { FSCM_STYLES } from '../styles';

const KPISection: React.FC = () => {
  return (
    <div className={FSCM_STYLES.kpi.grid}>
      {KPIS.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className={FSCM_STYLES.kpi.card}
        >
          <div
            className={`w-12 h-12 rounded-xl bg-${kpi.color}-50 flex items-center justify-center shrink-0`}
          >
            <i className={`pi ${kpi.icon} text-${kpi.color}-500 text-xl`} />
          </div>
          <div>
            <p className={FSCM_STYLES.kpi.label}>{kpi.label}</p>
            <p className={FSCM_STYLES.kpi.value}>{kpi.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default KPISection;
