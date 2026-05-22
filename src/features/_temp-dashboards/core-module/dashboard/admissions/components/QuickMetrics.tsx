import React from 'react';
import { NOTICE_METRICS } from '../constants';
import { ADMISSIONS_STYLES } from '../styles';

const QuickMetrics: React.FC = () => {
  return (
    <div className={ADMISSIONS_STYLES.metrics.grid}>
      {NOTICE_METRICS.map(metric => (
        <div key={metric.label} className={ADMISSIONS_STYLES.metrics.card}>
          <div className={ADMISSIONS_STYLES.metrics.iconWrapper}>
            <i className={`${metric.icon} text-rose-500`} />
          </div>
          <p className={ADMISSIONS_STYLES.metrics.value}>{metric.value}</p>
          <p className={ADMISSIONS_STYLES.metrics.label}>{metric.label}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickMetrics;
