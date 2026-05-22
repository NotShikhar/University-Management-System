import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import React from 'react';
import { PROGRAM_FEES } from '../constants';
import { ADMISSIONS_STYLES } from '../styles';

const checkTemplate = (val: string) => (
  <i
    className={`pi ${val === 'Yes' || val === 'Pass' ? 'pi-check-circle text-green-500' : 'pi-times-circle text-red-500'}`}
  />
);

const FeeConfigTable: React.FC = () => {
  return (
    <section className={ADMISSIONS_STYLES.feeConfig.card}>
      <div className={ADMISSIONS_STYLES.feeConfig.header}>
        <h2 className={ADMISSIONS_STYLES.feeConfig.title}>
          Fee & Program Configuration
        </h2>
        <Tag value="14/18 Configured" severity="warning" />
      </div>
      <DataTable
        value={PROGRAM_FEES}
        className="p-datatable-sm overflow-hidden rounded-xl"
      >
        <Column
          field="program"
          header="Program"
          className="font-semibold"
        ></Column>
        <Column field="criteria" header="Criteria"></Column>
        <Column
          field="feeMapped"
          header="Fee Mapped"
          body={d => checkTemplate(d.feeMapped)}
          className="text-center"
        ></Column>
        <Column
          field="categoryFee"
          header="Category Fee OK"
          body={d => checkTemplate(d.categoryFee)}
          className="text-center"
        ></Column>
      </DataTable>
    </section>
  );
};

export default FeeConfigTable;
