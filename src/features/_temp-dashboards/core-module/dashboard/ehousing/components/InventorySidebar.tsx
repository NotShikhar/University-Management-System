import { Chart } from 'primereact/chart';
import React from 'react';
import { INVENTORY_DATA } from '../constants';
import { EHOUSING_STYLES } from '../styles';

const InventorySidebar: React.FC = () => {
  return (
    <section className={EHOUSING_STYLES.sidebar.wrapper}>
      <div className={EHOUSING_STYLES.sidebar.card}>
        <h2 className={EHOUSING_STYLES.sidebar.title}>Inventory Overview</h2>
        <div className={EHOUSING_STYLES.sidebar.chartWrapper}>
          <Chart
            type="doughnut"
            data={INVENTORY_DATA}
            options={{
              maintainAspectRatio: false,
              plugins: { legend: { position: 'bottom' } },
            }}
          />
        </div>
        <div className="mt-6 space-y-4">
          <div className={EHOUSING_STYLES.sidebar.tipBox}>
            <p className={EHOUSING_STYLES.sidebar.tipTitle}>Admin Quick Tip</p>
            <p className={EHOUSING_STYLES.sidebar.tipText}>
              Priority allocation for Dr. Ramesh Kumar is pending approval from
              the Registrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySidebar;
