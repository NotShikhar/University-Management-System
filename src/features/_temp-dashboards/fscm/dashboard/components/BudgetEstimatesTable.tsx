import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import React from 'react';
import { BUDGET_ESTIMATES } from '../constants';
import { FSCM_STYLES } from '../styles';

const BudgetEstimatesTable: React.FC = () => {
  return (
    <div className={FSCM_STYLES.tableSection.card}>
      <div className={FSCM_STYLES.tableSection.header}>
        <h3 className={FSCM_STYLES.tableSection.title}>
          Budget Estimates Overview
        </h3>
        <Button
          label="Request Budget"
          icon="pi pi-money-bill"
          className="p-button-dark p-button-sm font-bold"
        />
      </div>
      <DataTable
        value={BUDGET_ESTIMATES}
        className={FSCM_STYLES.tableSection.table}
        responsiveLayout="scroll"
      >
        <Column field="category" header="Category Name" className="font-bold" />
        <Column field="headsCount" header="Heads" className="text-center" />
        <Column
          field="totalEstimate"
          header="Total Estimate"
          className="font-bold text-blue-600"
        />
        <Column
          field="status"
          header="Status"
          body={r => (
            <Tag
              value={r.status}
              severity={r.status === 'Submitted' ? 'info' : 'warning'}
            />
          )}
        />
        <Column
          header="Progress"
          body={r => (
            <div className="flex gap-1">
              <div className="w-3 h-1 rounded bg-blue-500" />
              <div className="w-3 h-1 rounded bg-blue-500" />
              <div
                className={`w-3 h-1 rounded ${r.status === 'Submitted' ? 'bg-blue-500' : 'bg-gray-200'}`}
              />
              <div className="w-3 h-1 rounded bg-gray-200" />
            </div>
          )}
        />
        <Column
          header="Action"
          body={() => (
            <Button
              label="Add Breakup"
              className="p-button-text p-button-info p-button-sm font-bold p-0"
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default BudgetEstimatesTable;
