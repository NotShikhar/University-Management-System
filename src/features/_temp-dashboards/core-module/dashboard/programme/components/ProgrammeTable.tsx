import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';
import { LEVELS, PROGRAMMES } from '../constants';
import { PROGRAMME_STYLES } from '../styles';

const completenessTemplate = (completeness: any) => {
  return (
    <div className="flex gap-1">
      {Object.entries(completeness).map(([key, val]) => (
        <div
          key={key}
          title={key.replace(/([A-Z])/g, ' $1')}
          className={`w-2 h-2 rounded-full ${val ? 'bg-green-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

const statusBodyTemplate = (rowData: any) => {
  return (
    <Tag
      value={rowData.status}
      severity={rowData.status === 'Active' ? 'success' : 'danger'}
      className="rounded-full px-3 text-[10px]"
    />
  );
};

const rowExpansionTemplate = (data: any) => {
  return (
    <div className={PROGRAMME_STYLES.expansion.wrapper}>
      <h3 className={PROGRAMME_STYLES.expansion.title}>
        Detailed Snapshot: {data.title}
      </h3>
      <div className={PROGRAMME_STYLES.expansion.grid}>
        <div className={PROGRAMME_STYLES.expansion.box}>
          <h4
            className={`${PROGRAMME_STYLES.expansion.boxTitle} text-blue-600`}
          >
            Seat Distribution
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Sanctioned</span>{' '}
              <span className="font-bold">{data.seatSnapshot.sanctioned}</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: '100%' }} />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 text-[11px]">
              {Object.entries(data.seatSnapshot)
                .filter(([k]) => k !== 'sanctioned')
                .map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="capitalize">
                      {k}: {v as number}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={PROGRAMME_STYLES.expansion.box}>
          <h4
            className={`${PROGRAMME_STYLES.expansion.boxTitle} text-purple-600`}
          >
            Fee Structure
          </h4>
          <p className={PROGRAMME_STYLES.expansion.boxValue}>{data.feeRange}</p>
          <p className={PROGRAMME_STYLES.expansion.boxMeta}>
            Currency: INR (₹)
          </p>
        </div>
        <div className={PROGRAMME_STYLES.expansion.box}>
          <h4
            className={`${PROGRAMME_STYLES.expansion.boxTitle} text-teal-600`}
          >
            Configuration Check
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(data.completeness).map(([key, val]) => (
              <div key={key} className="flex items-center gap-2 text-xs">
                <i
                  className={`pi ${val ? 'pi-check-circle text-green-500' : 'pi-times-circle text-red-500'}`}
                />
                <span className="capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgrammeTable: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <section className={PROGRAMME_STYLES.programmeTable.section}>
      <div className={PROGRAMME_STYLES.programmeTable.header}>
        <h2 className={PROGRAMME_STYLES.programmeTable.title}>
          2. Programme Management
        </h2>
        <div className={PROGRAMME_STYLES.programmeTable.filters}>
          <span className="p-input-icon-left">
            <i className="pi pi-search text-gray-400" />
            <InputText
              value={globalFilter}
              onChange={e => setGlobalFilter(e.target.value)}
              placeholder="Quick Search..."
              className="p-inputtext-sm rounded-xl border-gray-200 w-64"
            />
          </span>
          <Dropdown
            value={selectedLevel}
            options={LEVELS}
            onChange={e => setSelectedLevel(e.value)}
            placeholder="All Levels"
            className="p-dropdown-sm rounded-xl border-gray-200 w-40"
          />
        </div>
      </div>

      <div className={PROGRAMME_STYLES.programmeTable.card}>
        <DataTable
          value={PROGRAMMES}
          expandedRows={[]}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          paginator
          rows={5}
          className="p-datatable-sm"
          globalFilter={globalFilter}
          responsiveLayout="scroll"
        >
          <Column expander={true} style={{ width: '3rem' }} />
          <Column
            field="shortCode"
            header="Code"
            sortable
            className="font-bold text-blue-600 text-xs"
          ></Column>
          <Column
            header="Programme"
            sortable
            field="title"
            body={d => (
              <div className="w-56">
                <div className="font-bold text-gray-900 leading-tight">
                  {d.title}
                </div>
                <div className="text-[10px] text-gray-400 font-hindi">
                  {d.titleHi}
                </div>
              </div>
            )}
          />
          <Column
            field="level"
            header="Level"
            sortable
            className="text-xs"
          ></Column>
          <Column field="type" header="Type" className="text-xs"></Column>
          <Column field="mode" header="Mode" className="text-xs"></Column>
          <Column
            field="examScheme"
            header="Scheme"
            className="text-xs"
          ></Column>
          <Column
            header="NEP"
            field="creditScheme"
            className="text-xs text-center"
            body={d => (
              <Tag
                value={d.creditScheme.includes('Yes') ? '✓' : '✗'}
                severity={
                  d.creditScheme.includes('Yes') ? 'success' : 'secondary'
                }
                className="rounded-md"
              />
            )}
          />
          <Column
            header="Duration"
            body={d => <span className="text-xs">{d.minDuration}</span>}
            className="text-xs"
          />
          <Column
            header="Config"
            body={d => completenessTemplate(d.completeness)}
          />
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
                  icon="pi pi-pencil"
                  className="p-button-text p-button-sm p-button-info"
                />
                <Button
                  icon="pi pi-cog"
                  className="p-button-text p-button-sm p-button-warning"
                />
              </div>
            )}
          />
        </DataTable>
      </div>
    </section>
  );
};

export default ProgrammeTable;
