import { Button } from 'primereact/button';
import React from 'react';
import { REPORTS } from '../constants';
import { FSCM_STYLES } from '../styles';

const ReportsDownloads: React.FC = () => {
  return (
    <div className={FSCM_STYLES.reports.card}>
      <h3 className={FSCM_STYLES.reports.title}>Reports & Downloads</h3>
      <div className={FSCM_STYLES.reports.grid}>
        {REPORTS.map(report => (
          <div key={report} className={FSCM_STYLES.reports.item}>
            <div>
              <h4 className={FSCM_STYLES.reports.itemTitle}>{report}</h4>
              <p className={FSCM_STYLES.reports.itemDesc}>
                Monthly/Yearly detailed breakdown
              </p>
            </div>
            <div className={FSCM_STYLES.reports.itemFooter}>
              <span className={FSCM_STYLES.reports.itemFormats}>
                PDF / Excel
              </span>
              <Button
                icon="pi pi-download"
                className="p-button-text p-button-sm p-button-secondary p-0 group-hover:text-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsDownloads;
