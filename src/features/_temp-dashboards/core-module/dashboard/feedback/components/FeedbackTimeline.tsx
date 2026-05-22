import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Timeline } from 'primereact/timeline';
import React from 'react';
import { EVENTS } from '../constants';
import { FEEDBACK_STYLES } from '../styles';

const customizedMarker = (item: any) => {
  return (
    <span
      className="flex w-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
      style={{ backgroundColor: item.color, height: '2rem' }}
    >
      <i className={`pi ${item.icon} text-sm`}></i>
    </span>
  );
};

const customizedContent = (item: any) => {
  return (
    <motion.div whileHover={{ x: 5 }} className={FEEDBACK_STYLES.timeline.item}>
      <div className="flex justify-between items-center mb-1">
        <h3 className={FEEDBACK_STYLES.timeline.itemTitle}>{item.title}</h3>
        <Tag
          value={item.status}
          severity={
            item.status === 'Ongoing'
              ? 'success'
              : item.status === 'Upcoming'
                ? 'info'
                : 'secondary'
          }
          className="text-[10px]"
        />
      </div>
      <p className={FEEDBACK_STYLES.timeline.itemMeta}>
        <i className="pi pi-clock mr-1 text-[10px]"></i>
        {item.date}
      </p>
    </motion.div>
  );
};

const FeedbackTimeline: React.FC = () => {
  return (
    <section className={FEEDBACK_STYLES.timeline.card}>
      <div className={FEEDBACK_STYLES.timeline.header}>
        <h2 className={FEEDBACK_STYLES.timeline.title}>Feedback Timeline</h2>
        <Button
          icon="pi pi-calendar"
          className="p-button-text p-button-indigo"
        />
      </div>
      <Timeline
        value={EVENTS}
        content={customizedContent}
        marker={customizedMarker}
        className="customized-timeline"
      />
      <div className={FEEDBACK_STYLES.timeline.tipBox}>
        <div className={FEEDBACK_STYLES.timeline.tipHeader}>
          <i className="pi pi-info-circle text-indigo-600" />
          <h4 className={FEEDBACK_STYLES.timeline.tipTitle}>Admin Tip</h4>
        </div>
        <p className={FEEDBACK_STYLES.timeline.tipText}>
          Feedback templates can be scheduled to open and close automatically
          based on the selected dates.
        </p>
      </div>
    </section>
  );
};

export default FeedbackTimeline;
