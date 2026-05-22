import { Button } from 'primereact/button';
import React from 'react';
import { MASTERS } from '../constants';
import { FSCM_STYLES } from '../styles';

const MastersSetup: React.FC = () => {
  return (
    <div className={FSCM_STYLES.sidebar.masters.card}>
      <h3 className={FSCM_STYLES.sidebar.masters.title}>
        Masters Setup Status
      </h3>
      <div className={FSCM_STYLES.sidebar.masters.grid}>
        {MASTERS.map((m, i) => (
          <div key={i} className={FSCM_STYLES.sidebar.masters.item}>
            <div className={FSCM_STYLES.sidebar.masters.itemHeader}>
              <p className={FSCM_STYLES.sidebar.masters.itemLabel}>{m.label}</p>
              <i className={FSCM_STYLES.sidebar.masters.itemIcon} />
            </div>
            <p className={FSCM_STYLES.sidebar.masters.itemValue}>
              {m.count ?? m.status}
            </p>
            <p className={FSCM_STYLES.sidebar.masters.itemDesc}>{m.desc}</p>
          </div>
        ))}
      </div>
      <Button
        label="Configure All Masters"
        className={FSCM_STYLES.sidebar.masters.fullConfigBtn}
        icon="pi pi-cog"
      />
    </div>
  );
};

export default MastersSetup;
