import { motion } from 'motion/react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tag } from 'primereact/tag';
import React, { useRef } from 'react';
import { ADVANCE_SUB_ITEMS, SETTINGS_ACTIONS } from '../constants';
import { PROGRAMME_STYLES } from '../styles';

const SettingsActions: React.FC = () => {
  const op = useRef<any>(null);

  return (
    <section className={PROGRAMME_STYLES.settings.section}>
      <div className={PROGRAMME_STYLES.settings.header}>
        <h2 className={PROGRAMME_STYLES.settings.title}>
          1. Settings & Configurations
        </h2>
        <Tag value="Admin Access Only" severity="info" className="px-3" />
      </div>

      <div className={PROGRAMME_STYLES.settings.grid}>
        {SETTINGS_ACTIONS.map(action => (
          <motion.div
            key={action.label}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={e => (action.isMega ? op.current.toggle(e) : null)}
            className={PROGRAMME_STYLES.settings.card}
          >
            <div
              className={`${PROGRAMME_STYLES.settings.iconWrapper} bg-${action.color}-50 group-hover:bg-${action.color}-500`}
            >
              <i
                className={`pi ${action.icon} text-${action.color}-500 group-hover:text-white text-xl`}
              />
            </div>
            <h3 className={PROGRAMME_STYLES.settings.itemTitle}>
              {action.label}
            </h3>
            <p className={PROGRAMME_STYLES.settings.itemDesc}>{action.desc}</p>

            {action.isMega && (
              <div className={PROGRAMME_STYLES.settings.megaLink}>
                <span>View 6 Sub-items</span>
                <i className="pi pi-chevron-down" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <OverlayPanel
        ref={op}
        className="shadow-2xl rounded-2xl border-none p-2 bg-gray-900 text-white w-64"
      >
        <div className="p-3">
          <p className="text-[10px] font-bold uppercase text-orange-400 mb-3 tracking-widest">
            Advance Settings
          </p>
          <div className="space-y-1">
            {ADVANCE_SUB_ITEMS.map(item => (
              <div
                key={item}
                className="p-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors text-xs font-medium flex items-center justify-between group"
              >
                <span>{item}</span>
                <i className="pi pi-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </OverlayPanel>
    </section>
  );
};

export default SettingsActions;
