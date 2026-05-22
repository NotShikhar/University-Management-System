import { Button } from 'primereact/button';
import React from 'react';
import { AFFILIATION_STYLES } from '../styles';

const QuickActions: React.FC = () => {
  return (
    <div className={AFFILIATION_STYLES.quickActions.grid}>
      <div className={AFFILIATION_STYLES.quickActions.cardIndigo}>
        <div>
          <i className="pi pi-building text-2xl mb-4 opacity-50" />
          <h3 className={AFFILIATION_STYLES.quickActions.title}>
            Review Profiles
          </h3>
          <p className={AFFILIATION_STYLES.quickActions.desc}>
            12 new profiles submitted today for verification.
          </p>
        </div>
        <Button
          label="Go to Profiles"
          className="p-button-white p-button-text text-white border border-white/30 rounded-xl font-bold py-2"
        />
      </div>
      <div className={AFFILIATION_STYLES.quickActions.cardWhite}>
        <div>
          <i className="pi pi-credit-card text-2xl mb-4 text-purple-200" />
          <h3
            className={`${AFFILIATION_STYLES.quickActions.title} text-gray-800`}
          >
            Payment History
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            Sync records with accounting software.
          </p>
        </div>
        <Button
          label="View Transactions"
          className="p-button-outlined p-button-secondary rounded-xl font-bold py-2"
        />
      </div>
      <div className={AFFILIATION_STYLES.quickActions.cardWhite}>
        <div>
          <i className="pi pi-cog text-2xl mb-4 text-emerald-200" />
          <h3
            className={`${AFFILIATION_STYLES.quickActions.title} text-gray-800`}
          >
            Affiliation Settings
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            Update fee structures and program quotas.
          </p>
        </div>
        <Button
          label="Update Settings"
          className="p-button-outlined p-button-emerald rounded-xl font-bold py-2"
        />
      </div>
    </div>
  );
};

export default QuickActions;
