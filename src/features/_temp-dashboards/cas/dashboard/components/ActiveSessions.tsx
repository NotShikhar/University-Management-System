import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import { ACTIVE_SESSIONS } from '../constants';
import { CAS_STYLES } from '../styles';

const ActiveSessions: React.FC = () => {
  return (
    <div className={CAS_STYLES.sidebar.activeSessions.card}>
      <h3 className={CAS_STYLES.sidebar.activeSessions.title}>
        Active Sessions
      </h3>
      <div className="space-y-4">
        {ACTIVE_SESSIONS.map((session, i) => (
          <div key={i} className={CAS_STYLES.sidebar.activeSessions.item}>
            <div className={CAS_STYLES.sidebar.activeSessions.itemHeader}>
              <div>
                <p className={CAS_STYLES.sidebar.activeSessions.itemName}>
                  {session.name}
                </p>
                <p className={CAS_STYLES.sidebar.activeSessions.itemDates}>
                  {session.dates}
                </p>
              </div>
              <Tag
                value={session.appStatus}
                severity={session.appStatus === 'OPEN' ? 'success' : 'danger'}
                className="text-[8px]"
              />
            </div>
            <div className={CAS_STYLES.sidebar.activeSessions.itemFooter}>
              <span className={CAS_STYLES.sidebar.activeSessions.itemCount}>
                {session.count} Applications
              </span>
              <Button
                icon="pi pi-chevron-right"
                className="p-button-text p-button-sm p-button-secondary p-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveSessions;
