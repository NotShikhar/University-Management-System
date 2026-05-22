import React from 'react';
import { WORKFLOW_FUNNEL } from '../constants';
import { CAS_STYLES } from '../styles';

const WorkflowFunnel: React.FC = () => {
  return (
    <div className={CAS_STYLES.funnel.card}>
      <h3 className={CAS_STYLES.funnel.title}>Role-wise Application Funnel</h3>
      <div className={CAS_STYLES.funnel.wrapper}>
        {WORKFLOW_FUNNEL.map((step, i) => (
          <React.Fragment key={step.stage}>
            <div className={CAS_STYLES.funnel.stepWrapper}>
              <div className={CAS_STYLES.funnel.iconCircle}>
                <i className={`pi ${step.icon} text-blue-600`} />
                <div className={CAS_STYLES.funnel.badge}>{step.count}</div>

                <div className={CAS_STYLES.funnel.tooltip}>
                  {step.count} applications pending at {step.stage}
                </div>
              </div>
              <span className={CAS_STYLES.funnel.stepLabel}>{step.stage}</span>
            </div>
            {i < WORKFLOW_FUNNEL.length - 1 && (
              <div className={CAS_STYLES.funnel.divider} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkflowFunnel;
