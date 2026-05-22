import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import React from 'react';
import { APPLICATIONS } from '../constants';
import { CAS_STYLES } from '../styles';

const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'Approved':
      return 'success';
    case 'In Progress':
      return 'info';
    case 'Under Review':
      return 'warning';
    case 'Reverted':
      return 'danger';
    default:
      return 'secondary';
  }
};

const ApplicationTable: React.FC = () => {
  return (
    <div className={CAS_STYLES.applicationTable.wrapper}>
      <div className={CAS_STYLES.applicationTable.header}>
        <h3 className={CAS_STYLES.applicationTable.title}>
          Recent Applications status
        </h3>
        <div className={CAS_STYLES.applicationTable.searchWrapper}>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              placeholder="Search Employee..."
              className="p-inputtext-sm rounded-lg"
            />
          </span>
          <Button
            icon="pi pi-filter"
            className="p-button-text p-button-secondary"
          />
        </div>
      </div>
      <DataTable
        value={APPLICATIONS}
        className={CAS_STYLES.applicationTable.table}
        responsiveLayout="scroll"
      >
        <Column
          field="id"
          header="App ID"
          className="font-bold text-blue-600"
        />
        <Column field="name" header="Employee Name" className="font-bold" />
        <Column
          field="type"
          header="Type"
          body={r => (
            <span className={CAS_STYLES.applicationTable.badge}>{r.type}</span>
          )}
        />
        <Column field="stage" header="Current Stage" className="text-xs" />
        <Column
          field="status"
          header="Status"
          body={r => (
            <Tag value={r.status} severity={getStatusSeverity(r.status)} />
          )}
        />
        <Column
          field="updated"
          header="Last Activity"
          className="text-xs text-gray-400"
        />
        <Column
          header="Actions"
          body={() => (
            <div className="flex gap-1">
              <Button
                icon="pi pi-eye"
                className="p-button-text p-button-secondary p-button-rounded"
              />
              <Button
                icon="pi pi-map-marker"
                className="p-button-text p-button-info p-button-rounded"
              />
            </div>
          )}
        />
      </DataTable>
      <div className={CAS_STYLES.applicationTable.footer}>
        <Button
          label="View All Applications"
          className="p-button-text p-button-sm font-bold text-blue-600"
        />
      </div>
    </div>
  );
};

export default ApplicationTable;
