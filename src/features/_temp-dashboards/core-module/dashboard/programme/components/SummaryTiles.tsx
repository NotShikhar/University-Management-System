import { motion } from 'motion/react';
import React from 'react';
import { SUMMARY_TILES } from '../constants';
import { PROGRAMME_STYLES } from '../styles';

const SummaryTiles: React.FC = () => {
  return (
    <div className={PROGRAMME_STYLES.summaryTiles.grid}>
      {SUMMARY_TILES.map((tile, index) => (
        <motion.div
          key={tile.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className={`${PROGRAMME_STYLES.summaryTiles.card} border-${tile.color}-500`}
        >
          <div
            className={`${PROGRAMME_STYLES.summaryTiles.iconWrapper} bg-${tile.color}-50`}
          >
            <i className={`pi ${tile.icon} text-${tile.color}-600 text-lg`} />
          </div>
          <p className={PROGRAMME_STYLES.summaryTiles.value}>{tile.value}</p>
          <p className={PROGRAMME_STYLES.summaryTiles.label}>{tile.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SummaryTiles;
