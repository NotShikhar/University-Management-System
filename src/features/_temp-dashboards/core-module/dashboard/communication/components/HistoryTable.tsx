import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import { RECENT_HISTORY } from '../constants';
import { COMMUNICATION_STYLES } from '../styles';

const HistoryTable: React.FC = () => {
  return (
    <section className={COMMUNICATION_STYLES.history.card}>
      <div className={COMMUNICATION_STYLES.history.header}>
        <h2 className={COMMUNICATION_STYLES.history.title}>
          Recent Communication History
        </h2>
        <Button
          label="View All History"
          className="p-button-text p-button-sm font-bold"
        />
      </div>
      <div className="overflow-x-auto">
        <table className={COMMUNICATION_STYLES.history.table}>
          <thead>
            <tr className={COMMUNICATION_STYLES.history.tableHead}>
              <th className="pb-4">Subject</th>
              <th className="pb-4">Target Group</th>
              <th className="pb-4">Recipients</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Date & Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {RECENT_HISTORY.map(item => (
              <tr
                key={item.id}
                className={COMMUNICATION_STYLES.history.tableRow}
              >
                <td className={COMMUNICATION_STYLES.history.subject}>
                  {item.subject}
                </td>
                <td className={COMMUNICATION_STYLES.history.target}>
                  {item.target}
                </td>
                <td className={COMMUNICATION_STYLES.history.count}>
                  {item.count}
                </td>
                <td className="py-4">
                  <Tag
                    value={item.status}
                    severity="success"
                    className="text-[9px] rounded-md px-2"
                  />
                </td>
                <td className={COMMUNICATION_STYLES.history.date}>
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HistoryTable;
