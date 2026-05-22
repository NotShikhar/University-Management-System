import { Chart } from 'primereact/chart';
import React from 'react';
import { RESPONSE_DATA } from '../constants';
import { FEEDBACK_STYLES } from '../styles';

const ResponseAnalytics: React.FC = () => {
  return (
    <section className={FEEDBACK_STYLES.responseAnalytics.card}>
      <h2 className={FEEDBACK_STYLES.responseAnalytics.title}>
        Response Rate Analytics
      </h2>
      <div className={FEEDBACK_STYLES.responseAnalytics.chartWrapper}>
        <Chart
          type="bar"
          data={RESPONSE_DATA}
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

export default ResponseAnalytics;
