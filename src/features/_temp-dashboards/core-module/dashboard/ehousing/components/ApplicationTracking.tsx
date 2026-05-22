import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import React from 'react';
import { RECENT_APPLICATIONS } from '../constants';
import { EHOUSING_STYLES } from '../styles';

const statusBodyTemplate = (rowData: any) => {
  const severity =
    rowData.status === 'Allotted'
      ? 'success'
      : rowData.status === 'Pending'
        ? 'warning'
        : rowData.status === 'Rejected'
          ? 'danger'
          : 'info';
  return (
    <Tag
      value={rowData.status}
      severity={severity}
      className="rounded-full px-3"
    />
  );
};

const ApplicationTracking: React.FC = () => {
  return (
    <section className={EHOUSING_STYLES.tableSection.wrapper}>
      <div className={EHOUSING_STYLES.tableSection.header}>
        <h2 className={EHOUSING_STYLES.tableSection.title}>
          Application Status Tracking
        </h2>
        <div className={EHOUSING_STYLES.tableSection.actions}>
          <Button
            label="View All"
            className="p-button-text p-button-sm font-bold"
          />
          <Button
            icon="pi pi-filter"
            className="p-button-outlined p-button-secondary rounded-xl"
          />
        </div>
      </div>
      <DataTable
        value={RECENT_APPLICATIONS}
        className="p-datatable-sm"
        responsiveLayout="scroll"
      >
        <Column
          field="name"
          header="Applicant Name"
          className="font-semibold"
        ></Column>
        <Column field="type" header="App. Type"></Column>
        <Column field="date" header="Submission Date"></Column>
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
                icon="pi pi-check"
                className="p-button-text p-button-success p-button-sm"
              />
              <Button
                icon="pi pi-times"
                className="p-button-text p-button-danger p-button-sm"
              />
              <Button
                icon="pi pi-pencil"
                className="p-button-text p-button-secondary p-button-sm"
              />
            </div>
          )}
        />
      </DataTable>
    </section>
  );
};

export default ApplicationTracking;
