import { Chart } from 'primereact/chart';
import React from 'react';
import { VOLUME_DATA } from '../constants';
import { COMMUNICATION_STYLES } from '../styles';

const ActivityTrend: React.FC = () => {
  return (
    <section className={COMMUNICATION_STYLES.analytics.card}>
      <h2 className={COMMUNICATION_STYLES.analytics.title}>
        Weekly Mail Activity Trend
      </h2>
      <div className={COMMUNICATION_STYLES.analytics.chartWrapper}>
        <Chart
          type="line"
          data={VOLUME_DATA}
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
            scales: {
              x: { grid: { display: false } },
              y: { border: { dash: [5, 5] }, grid: { color: '#f3f4f6' } },
            },
          }}
        />
      </div>
    </section>
  );
};

export default ActivityTrend;
