import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import React from 'react';
import { STATUS_DATA } from '../constants';
import { FEEDBACK_STYLES } from '../styles';

const StatusDistribution: React.FC = () => {
  return (
    <section className={FEEDBACK_STYLES.statusDistribution.card}>
      <div className={FEEDBACK_STYLES.statusDistribution.header}>
        <h2 className={FEEDBACK_STYLES.statusDistribution.title}>
          Template Status Distribution
        </h2>
        <Button
          icon="pi pi-ellipsis-h"
          className="p-button-text p-button-secondary"
        />
      </div>
      <div className={FEEDBACK_STYLES.statusDistribution.content}>
        <div className={FEEDBACK_STYLES.statusDistribution.chartWrapper}>
          <Chart
            type="doughnut"
            data={STATUS_DATA}
            options={{
              maintainAspectRatio: false,
              plugins: { legend: { position: 'bottom' } },
            }}
            className="w-full"
          />
        </div>
        <div className={FEEDBACK_STYLES.statusDistribution.legendWrapper}>
          {STATUS_DATA.labels.map((label, i) => (
            <div
              key={label}
              className={FEEDBACK_STYLES.statusDistribution.legendItem}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: STATUS_DATA.datasets[0].backgroundColor[i],
                  }}
                />
                <span
                  className={FEEDBACK_STYLES.statusDistribution.legendLabel}
                >
                  {label}
                </span>
              </div>
              <span className={FEEDBACK_STYLES.statusDistribution.legendValue}>
                {STATUS_DATA.datasets[0].data[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatusDistribution;
