import React from 'react';
import { QUICK_ACTIONS } from '../constants';
import { CAS_STYLES } from '../styles';

const QuickActions: React.FC = () => {
  return (
    <div className={CAS_STYLES.sidebar.quickActions.card}>
      <h3 className={CAS_STYLES.sidebar.quickActions.title}>
        <i className="pi pi-bolt text-yellow-400" />
        Quick Actions
      </h3>
      <div className={CAS_STYLES.sidebar.quickActions.grid}>
        {QUICK_ACTIONS.map(action => (
          <button
            key={action.label}
            className={CAS_STYLES.sidebar.quickActions.button}
          >
            <i
              className={`pi ${action.icon} ${CAS_STYLES.sidebar.quickActions.buttonIcon}`}
            />
            <span className={CAS_STYLES.sidebar.quickActions.buttonLabel}>
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
