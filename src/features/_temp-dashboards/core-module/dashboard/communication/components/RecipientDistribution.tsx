import { Chart } from 'primereact/chart';
import React from 'react';
import { DISTRIBUTION_DATA } from '../constants';
import { COMMUNICATION_STYLES } from '../styles';

const RecipientDistribution: React.FC = () => {
  return (
    <section className={COMMUNICATION_STYLES.sidebar.card}>
      <h2 className={COMMUNICATION_STYLES.sidebar.title}>
        Recipient Distribution
      </h2>
      <div className="flex-1 flex flex-col justify-center">
        <div className={COMMUNICATION_STYLES.sidebar.chartWrapper}>
          <Chart
            type="pie"
            data={DISTRIBUTION_DATA}
            options={{
              maintainAspectRatio: false,
              plugins: { legend: { position: 'bottom' } },
            }}
          />
        </div>
        <div className="space-y-4">
          {DISTRIBUTION_DATA.labels.map((label, i) => (
            <div
              key={label}
              className={COMMUNICATION_STYLES.sidebar.distributionItem}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      DISTRIBUTION_DATA.datasets[0].backgroundColor[i],
                  }}
                />
                <span className={COMMUNICATION_STYLES.sidebar.itemLabel}>
                  {label}
                </span>
              </div>
              <span className={COMMUNICATION_STYLES.sidebar.itemValue}>
                {Math.round(
                  (DISTRIBUTION_DATA.datasets[0].data[i] / 84210) * 100
                )}
                %
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={COMMUNICATION_STYLES.sidebar.footer}>
        <p className="text-[11px] text-gray-400 font-medium">
          Mail server status:{' '}
          <span className="text-green-500 font-bold">Operational 100%</span>
        </p>
      </div>
    </section>
  );
};

export default RecipientDistribution;
