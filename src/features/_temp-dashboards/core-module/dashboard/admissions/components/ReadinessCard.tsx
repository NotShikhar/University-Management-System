import { Tag } from 'primereact/tag';
import React from 'react';
import { READINESS_CHECKS } from '../constants';
import { ADMISSIONS_STYLES } from '../styles';

const ReadinessCard: React.FC = () => {
  return (
    <section className={ADMISSIONS_STYLES.readiness.card}>
      <h2 className={ADMISSIONS_STYLES.readiness.title}>
        Pre-launch Readiness Check
      </h2>
      <div className="space-y-4">
        {READINESS_CHECKS.map(check => (
          <div
            key={check.item}
            className={ADMISSIONS_STYLES.readiness.itemWrapper}
          >
            <span className={ADMISSIONS_STYLES.readiness.itemLabel}>
              {check.item}
            </span>
            <Tag
              value={check.status}
              severity={check.severity as any}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadinessCard;
