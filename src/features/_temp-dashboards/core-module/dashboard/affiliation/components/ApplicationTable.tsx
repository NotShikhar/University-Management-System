import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import React from 'react';
import { APPLICATIONS } from '../constants';
import { AFFILIATION_STYLES } from '../styles';

const statusBodyTemplate = (rowData: any) => {
  const severity =
    rowData.status === 'Approved'
      ? 'success'
      : rowData.status === 'Rejected'
        ? 'danger'
        : rowData.status === 'Under Review'
          ? 'info'
          : rowData.status === 'Pending'
            ? 'warning'
            : 'secondary';
  return (
    <Tag
      value={rowData.status}
      severity={severity}
      className="rounded-full px-3 text-[10px]"
    />
  );
};

const ApplicationTable: React.FC = () => {
  return (
    <section className={AFFILIATION_STYLES.tableSection.card}>
      <div className={AFFILIATION_STYLES.tableSection.header}>
        <h2 className={AFFILIATION_STYLES.tableSection.title}>
          Affiliation Application Status
        </h2>
        <div className={AFFILIATION_STYLES.tableSection.actions}>
          <Button
            label="Export"
            icon="pi pi-download"
            className="p-button-text p-button-secondary p-button-sm font-bold"
          />
          <Button
            icon="pi pi-filter"
            className="p-button-outlined p-button-secondary rounded-xl bg-gray-50"
          />
        </div>
      </div>
      <DataTable
        value={APPLICATIONS}
        className="p-datatable-sm"
        responsiveLayout="scroll"
      >
        <Column
          field="college"
          header="College Name"
          className="font-bold text-gray-900"
          style={{ width: '250px' }}
        ></Column>
        <Column field="type" header="App. Type" className="text-xs"></Column>
        <Column field="date" header="Submission" className="text-xs"></Column>
        <Column
          field="reviewer"
          header="Reviewer"
          className="text-xs font-semibold text-purple-600"
        ></Column>
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
        ></Column>
        <Column
          header="Actions"
          body={() => (
            <div className="flex gap-1">
              <Button
                icon="pi pi-eye"
                className="p-button-text p-button-secondary p-button-sm"
              />
              <Button
                icon="pi pi-check"
                className="p-button-text p-button-success p-button-sm"
              />
            </div>
          )}
        />
      </DataTable>
    </section>
  );
};

export default ApplicationTable;
