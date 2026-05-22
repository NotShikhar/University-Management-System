import { Button } from 'primereact/button';
import React from 'react';
import { ACTIVITIES } from '../constants';
import { USER_STYLES } from '../styles';

const ActivityLogs: React.FC = () => {
  return (
    <div className={USER_STYLES.activities.wrapper}>
      <h2 className={USER_STYLES.activities.title}>Recent Activity</h2>
      <div className={USER_STYLES.activities.listWrapper}>
        {ACTIVITIES.map((act, i) => (
          <div
            key={i}
            className={`${USER_STYLES.activities.item} ${i !== ACTIVITIES.length - 1 ? 'border-b border-gray-50' : ''}`}
          >
            <div className={USER_STYLES.activities.itemContent}>
              <div className={USER_STYLES.activities.iconWrapper}>
                <i className={`pi ${act.icon} ${act.iconColor}`} />
              </div>
              <div>
                <p className={USER_STYLES.activities.userName}>
                  {act.user}{' '}
                  <span className={USER_STYLES.activities.actionText}>
                    {act.action}
                  </span>
                </p>
                <p className={USER_STYLES.activities.typeText}>{act.type}</p>
              </div>
            </div>
            <span className={USER_STYLES.activities.timeText}>{act.time}</span>
          </div>
        ))}
        <div className={USER_STYLES.activities.footer}>
          <Button
            label="View All Logs"
            className="p-button-text p-button-sm text-blue-600 font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
