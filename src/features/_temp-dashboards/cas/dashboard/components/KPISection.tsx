import { motion } from 'motion/react';
import { ProgressBar } from 'primereact/progressbar';
import React from 'react';
import { KPIS } from '../constants';
import { CAS_STYLES } from '../styles';

const KPISection: React.FC = () => {
  return (
    <div className={CAS_STYLES.kpi.grid}>
      {KPIS.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`${CAS_STYLES.kpi.card} border-${kpi.color}-500`}
        >
          <h3 className={CAS_STYLES.kpi.label}>{kpi.label}</h3>
          <div className={CAS_STYLES.kpi.valueWrapper}>
            <div>
              <p className={CAS_STYLES.kpi.totalValue}>{kpi.total}</p>
              <p className={CAS_STYLES.kpi.totalLabel}>TOTAL APPLICATIONS</p>
            </div>
            <div className={CAS_STYLES.kpi.statsWrapper}>
              <div className={CAS_STYLES.kpi.statGroup}>
                <div>
                  <p className={`${CAS_STYLES.kpi.statValue} text-orange-500`}>
                    {kpi.pending}
                  </p>
                  <p className={CAS_STYLES.kpi.statLabel}>Pending</p>
                </div>
                <div>
                  <p className={`${CAS_STYLES.kpi.statValue} text-green-500`}>
                    {kpi.completed}
                  </p>
                  <p className={CAS_STYLES.kpi.statLabel}>Done</p>
                </div>
              </div>
              <ProgressBar
                value={Math.round((kpi.completed / kpi.total) * 100)}
                showValue={false}
                style={{ height: '4px', width: '80px' }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default KPISection;
