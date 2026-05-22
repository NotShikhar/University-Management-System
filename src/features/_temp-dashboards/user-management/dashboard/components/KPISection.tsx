import { motion } from 'motion/react';
import React from 'react';
import { STATS } from '../constants';
import { USER_STYLES } from '../styles';

const KPISection: React.FC = () => {
  return (
    <div className={USER_STYLES.kpi.grid}>
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className={USER_STYLES.kpi.card}
        >
          <div className={`${USER_STYLES.kpi.iconWrapper} bg-${stat.color}-50`}>
            <i className={`${stat.icon} text-${stat.color}-500 text-xl`} />
          </div>
          <p className={USER_STYLES.kpi.label}>{stat.label}</p>
          <p className={USER_STYLES.kpi.value}>{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default KPISection;
