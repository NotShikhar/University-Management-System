import { Chart } from 'primereact/chart';
import React from 'react';
import { REVENUE_DATA } from '../constants';
import { AFFILIATION_STYLES } from '../styles';

const RevenueChart: React.FC = () => {
  return (
    <section className={AFFILIATION_STYLES.sidebar.card}>
      <h2 className={AFFILIATION_STYLES.sidebar.title}>Application Mix</h2>
      <div className={AFFILIATION_STYLES.sidebar.chartWrapper}>
        <Chart
          type="doughnut"
          data={REVENUE_DATA}
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
          }}
        />
      </div>
      <div className="space-y-4 flex-1">
        {REVENUE_DATA.labels.map((label, i) => (
          <div key={label} className={AFFILIATION_STYLES.sidebar.itemWrapper}>
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: REVENUE_DATA.datasets[0].backgroundColor[i],
                }}
              />
              <span className={AFFILIATION_STYLES.sidebar.itemLabel}>
                {label}
              </span>
            </div>
            <span className={AFFILIATION_STYLES.sidebar.itemValue}>
              {REVENUE_DATA.datasets[0].data[i]}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RevenueChart;
