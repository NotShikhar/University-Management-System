import { Chart } from 'primereact/chart';
import React from 'react';
import { NATURE_DATA } from '../constants';
import { EMPLOYEE_STYLES } from '../styles';

const EmploymentNature: React.FC = () => {
  return (
    <div className={EMPLOYEE_STYLES.natureChart.wrapper}>
      <h3 className={EMPLOYEE_STYLES.natureChart.title}>
        Nature of Employment
      </h3>
      <div className={EMPLOYEE_STYLES.natureChart.chartWrapper}>
        <Chart
          type="doughnut"
          data={NATURE_DATA}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className={EMPLOYEE_STYLES.natureChart.legendWrapper}>
        {NATURE_DATA.labels.map((l, i) => (
          <div key={l} className={EMPLOYEE_STYLES.natureChart.legendItem}>
            <div className={EMPLOYEE_STYLES.natureChart.legendLabelWrapper}>
              <div
                className={EMPLOYEE_STYLES.natureChart.legendDot}
                style={{
                  backgroundColor: NATURE_DATA.datasets[0].backgroundColor[i],
                }}
              />
              <span className={EMPLOYEE_STYLES.natureChart.legendLabel}>
                {l}
              </span>
            </div>
            <span className={EMPLOYEE_STYLES.natureChart.legendValue}>
              {NATURE_DATA.datasets[0].data[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmploymentNature;
