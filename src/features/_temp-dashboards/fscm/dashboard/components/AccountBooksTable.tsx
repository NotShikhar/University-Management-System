import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import React from 'react';
import { FINANCIAL_YEAR_BOOKS } from '../constants';
import { FSCM_STYLES } from '../styles';

const AccountBooksTable: React.FC = () => {
  return (
    <div className={FSCM_STYLES.tableSection.card}>
      <div className={FSCM_STYLES.tableSection.header}>
        <div>
          <h3 className={FSCM_STYLES.tableSection.title}>
            Financial Year & Account Books
          </h3>
          <p className={FSCM_STYLES.tableSection.subtitle}>
            3 years configured, 2 currently active
          </p>
        </div>
        <div className={FSCM_STYLES.tableSection.actions}>
          <Button
            label="Add FY"
            icon="pi pi-plus"
            className="p-button-text p-button-sm font-bold"
          />
          <Button
            label="Create Book"
            icon="pi pi-folder-plus"
            className="p-button-outlined p-button-secondary p-button-sm font-bold"
          />
        </div>
      </div>
      <DataTable
        value={FINANCIAL_YEAR_BOOKS}
        className={FSCM_STYLES.tableSection.table}
        responsiveLayout="scroll"
      >
        <Column field="name" header="Book Name" className="font-bold" />
        <Column field="ou" header="Main OU" />
        <Column field="project" header="Project/Uni" />
        <Column
          field="type"
          header="Type"
          body={r => (
            <span className={FSCM_STYLES.tableSection.typeBadge}>{r.type}</span>
          )}
        />
        <Column
          field="status"
          header="Status"
          body={r => (
            <Tag value={r.status} severity="success" className="text-[9px]" />
          )}
        />
        <Column
          header="Open"
          body={() => (
            <Button
              icon="pi pi-arrow-right"
              className="p-button-text p-button-secondary p-button-sm"
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default AccountBooksTable;
