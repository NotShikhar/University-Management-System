import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import { SCHEMES } from '../constants';
import { EHOUSING_STYLES } from '../styles';

const AvailableSchemes: React.FC = () => {
  return (
    <section className={EHOUSING_STYLES.schemes.wrapper}>
      <div className={EHOUSING_STYLES.schemes.card}>
        <h2 className={EHOUSING_STYLES.schemes.title}>Available Schemes</h2>
        <div className="space-y-4">
          {SCHEMES.map(scheme => (
            <div key={scheme.title} className={EHOUSING_STYLES.schemes.item}>
              <h3 className={EHOUSING_STYLES.schemes.itemTitle}>
                {scheme.title}
              </h3>
              <div className={EHOUSING_STYLES.schemes.itemMeta}>
                <span className={EHOUSING_STYLES.schemes.deadline}>
                  Deadline: {scheme.deadline}
                </span>
                <Tag
                  value={scheme.status}
                  severity={scheme.status === 'Urgent' ? 'danger' : 'info'}
                  className="text-[9px]"
                />
              </div>
            </div>
          ))}
        </div>
        <Button
          label="Apply for New Scheme"
          icon="pi pi-external-link"
          className="w-full mt-10 p-button-outlined p-button-indigo rounded-xl font-bold py-3"
        />
      </div>
    </section>
  );
};

export default AvailableSchemes;
