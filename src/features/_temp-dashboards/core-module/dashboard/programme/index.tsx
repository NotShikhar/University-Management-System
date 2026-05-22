import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import React from 'react';
import PageNav from 'shared/new-components/PageNav';
import ProgrammeTable from './components/ProgrammeTable';
import SettingsActions from './components/SettingsActions';
import SummaryTiles from './components/SummaryTiles';
import { PROGRAMME_STYLES } from './styles';

const ProgrammeDashboard: React.FC = () => {
  return (
    <div className={PROGRAMME_STYLES.container}>
      <PageNav title="Programme Dashboard" />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={PROGRAMME_STYLES.header.wrapper}
      >
        <div>
          <p className={PROGRAMME_STYLES.header.breadcrumb}>
            Core Module &gt; Programme Management &gt; Admin Control Center
          </p>
          <h1 className={PROGRAMME_STYLES.header.title}>
            Programme Dashboard <span className="text-blue-600">v2</span>
          </h1>
        </div>
        <div className={PROGRAMME_STYLES.header.actions}>
          <Button
            icon="pi pi-bell"
            className="p-button-rounded p-button-text p-button-secondary"
          />
          <Button
            label="New Programme"
            icon="pi pi-plus"
            className="p-button-dark rounded-xl font-bold"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-12 space-y-12">
          {/* Summary Cards */}
          <SummaryTiles />

          {/* Section 1: Settings */}
          <SettingsActions />

          {/* Section 2: Programme Management */}
          <ProgrammeTable />
        </div>
      </div>

      {/* Floating System Info */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={PROGRAMME_STYLES.floatingInfo}
      >
        <div className="flex gap-6 border-r border-white/20 pr-6">
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-gray-400">
              NEP Enabled
            </p>
            <p className="text-xl font-black text-green-400">64</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-gray-400">
              Lateral Entry
            </p>
            <p className="text-xl font-black text-amber-400">22</p>
          </div>
        </div>
        <Button
          label="Global Stats"
          icon="pi pi-chart-line"
          className="p-button-text text-white p-button-sm font-bold"
        />
      </motion.div>
    </div>
  );
};

export default ProgrammeDashboard;
