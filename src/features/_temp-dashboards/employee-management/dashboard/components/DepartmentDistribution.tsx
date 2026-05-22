import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import React from 'react';
import { DEPARTMENT_DATA } from '../constants';
import { EMPLOYEE_STYLES } from '../styles';

const DepartmentDistribution: React.FC = () => {
  return (
    <div className={EMPLOYEE_STYLES.departmentChart.wrapper}>
      <div className={EMPLOYEE_STYLES.departmentChart.header}>
        <h3 className={EMPLOYEE_STYLES.departmentChart.title}>
          Department-wise Distribution
        </h3>
        <Button
          label="View Details"
          className="p-button-text p-button-sm font-bold"
        />
      </div>
      <Chart
        type="bar"
        data={DEPARTMENT_DATA}
        options={{ maintainAspectRatio: false, aspectRatio: 2 }}
      />
    </div>
  );
};

export default DepartmentDistribution;
