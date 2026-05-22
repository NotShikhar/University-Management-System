import { Button } from 'primereact/button';
import React from 'react';
import { PAYMENT_REPORT } from '../constants';
import { AFFILIATION_STYLES } from '../styles';

const RecentPayments: React.FC = () => {
  return (
    <section className={AFFILIATION_STYLES.recentPayments.card}>
      <h2 className={AFFILIATION_STYLES.recentPayments.title}>
        Recent Payments
      </h2>
      <div className="space-y-4">
        {PAYMENT_REPORT.map(pay => (
          <div key={pay.id} className={AFFILIATION_STYLES.recentPayments.item}>
            <div className="flex justify-between items-start mb-2">
              <h4 className={AFFILIATION_STYLES.recentPayments.itemTitle}>
                {pay.college}
              </h4>
              <span className={AFFILIATION_STYLES.recentPayments.itemAmount}>
                {pay.amount}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className={AFFILIATION_STYLES.recentPayments.itemMeta}>
                {pay.id} • {pay.method}
              </span>
              <span
                className={`${AFFILIATION_STYLES.recentPayments.itemMeta} uppercase`}
              >
                {pay.date}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Button
        label="Full Transaction Report"
        className="w-full mt-6 p-button-text p-button-sm font-bold"
      />
    </section>
  );
};

export default RecentPayments;
