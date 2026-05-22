import React from 'react';
import { ROLES_RESPONSIBILITIES } from '../constants';
import { FSCM_STYLES } from '../styles';

const RolesResponsibilities: React.FC = () => {
  return (
    <div className={FSCM_STYLES.sidebar.roles.card}>
      <h3 className={FSCM_STYLES.sidebar.roles.title}>
        <i className="pi pi-shield text-blue-400" />
        Roles & Responsibilities
      </h3>
      <div className="space-y-4">
        {ROLES_RESPONSIBILITIES.map(r => (
          <div key={r.role} className={FSCM_STYLES.sidebar.roles.item}>
            <div
              className={`${FSCM_STYLES.sidebar.roles.itemBorder} bg-${r.color}-500`}
            />
            <div>
              <p className={FSCM_STYLES.sidebar.roles.itemRole}>{r.role}</p>
              <p className={FSCM_STYLES.sidebar.roles.itemDesc}>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesResponsibilities;
