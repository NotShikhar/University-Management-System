import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import { EMPLOYEE_KPIS } from '../constants';
import { EHOUSING_STYLES } from '../styles';

const EmployeeView: React.FC = () => {
  return (
    <div className={EHOUSING_STYLES.employee.leftCol}>
      <div className={EHOUSING_STYLES.employee.kpiGrid}>
        {EMPLOYEE_KPIS.map(kpi => (
          <div key={kpi.label} className={EHOUSING_STYLES.employee.kpiCard}>
            <div
              className={`${EHOUSING_STYLES.employee.iconWrapper} bg-${kpi.color}-50`}
            >
              <i className={`pi ${kpi.icon} text-${kpi.color}-500 text-xl`} />
            </div>
            <p className={EHOUSING_STYLES.employee.kpiValue}>{kpi.value}</p>
            <p className={EHOUSING_STYLES.employee.kpiLabel}>{kpi.label}</p>
            <p className={EHOUSING_STYLES.employee.kpiSub}>{kpi.sub}</p>
          </div>
        ))}
      </div>

      <section className={EHOUSING_STYLES.employee.highlightCard}>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Tag
              value="New Allotment"
              severity="success"
              className="bg-green-400 border-none rounded-md px-3 font-bold mb-4"
            />
            <h2 className={EHOUSING_STYLES.employee.highlightTitle}>
              House Allotted!
            </h2>
            <p className={EHOUSING_STYLES.employee.highlightDesc}>
              Congratulations! You have been allotted Apartment No. 402-B, Staff
              Quarters, East Campus.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button
                label="Confirm Allotment"
                className="p-button-secondary bg-white text-indigo-600 border-none rounded-xl font-bold px-6 py-3"
              />
              <Button
                label="View Details"
                className="p-button-text text-white border border-white/30 rounded-xl font-bold px-6 py-3"
              />
            </div>
          </div>
          <div className={EHOUSING_STYLES.employee.highlightIconWrapper}>
            <i className="pi pi-home text-[5rem] text-white/50" />
            <div className={EHOUSING_STYLES.employee.badge}>
              <i className="pi pi-verified text-xl" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px] -ml-32 -mb-32" />
      </section>
    </div>
  );
};

export default EmployeeView;
