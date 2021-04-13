import React from 'react';
import { IPropertyStructure, IValuesAndChange } from '../../../../../context/interfaces';

// PropertyStructureTableHead =====================================================================

interface TableHeadProps {
  period: {
    start: number,
    end: number
  }
}

const PropertyStructureTableHead: React.FC<TableHeadProps> = ({ period }) => {

  let years: number[] = [];
  for (let i = period.start; i <= period.end; i++) {
    years.push(i);
  }

  let columns: number[] = [];
  for (let i = 0; i <= years.length + 4; i++) {
    columns.push(i + 1);
  }

  return (
    <thead>
      <tr>
        <th className="align-middle text-center" rowSpan={3}>Показатель</th>
        <th className="align-middle text-center" colSpan={5}>Значение показателя</th>
        <th className="align-middle text-center" colSpan={2}>Изменение за</th>
      </tr>

      <tr>
        <th className="align-middle text-center" colSpan={3}>в тыс. руб.</th>
        <th className="align-middle text-center" colSpan={2}>в % к валюте баланса</th>
        <th className="align-middle text-center">тыс. руб.</th>
        <th className="align-middle text-center">± %</th>
      </tr>

      <tr>
        {years.map(year => <th className="align-middle text-center" key={year}>{'31.12.' + year}</th>)}
        <th className="align-middle text-center">на начало анализируемого периода ({'31.12.' + period.start})</th>
        <th className="align-middle text-center">на конец анализируемого периода ({'31.12.' + period.end})</th>
        <th className="align-middle text-center">(гр.6-гр.2)</th>
        <th className="align-middle text-center">((гр.6-гр.2) : гр.2)</th>
      </tr>

      <tr>
        {columns.map(col => <td className="text-center" key={col}>{col}</td>)}
      </tr>
    </thead>
  );
}

// PropertyStructureRow ===========================================================================

interface TableRowProps {
  rowData: IValuesAndChange
}

function toPercentSrtring(val: number): string {
  return isNaN(val) ? 'x' : (val * 100).toFixed(2) + '%';
}

const PropertyStructureRow: React.FC<TableRowProps> = ({ rowData }) => {
  return (
    <tr>
      <td>{rowData.name}</td>
      {rowData.values.map((val, idx) => <td className="align-middle text-center" key={idx}>{val}</td>)}
      <td className="align-middle text-center">{toPercentSrtring(rowData.weight.start)}</td>
      <td className="align-middle text-center">{toPercentSrtring(rowData.weight.end)}</td>
      <td className="align-middle text-center">{rowData.change.absolute}</td>
      <td className="align-middle text-center">{toPercentSrtring(rowData.change.relative)}</td>
    </tr>
  );
}

// PropertyStructureTableBody =====================================================================

interface TableBodyProps {
  propertyStructure: IPropertyStructure
}

const PropertyStructureTableBody: React.FC<TableBodyProps> = ({ propertyStructure }) => {
  return (
    <tbody>
      <tr>
        <td className="font-weight-bold" colSpan={8}>Актив</td>
      </tr>

      {propertyStructure.active.map((row, idx) => <PropertyStructureRow rowData={row} key={idx} />)}

      <tr>
        <td className="font-weight-bold" colSpan={8}>Пассив</td>
      </tr>

      {propertyStructure.passive.map((row, idx) => <PropertyStructureRow rowData={row} key={idx} />)}

      <PropertyStructureRow rowData={propertyStructure.balanceTotal} />

    </tbody>
  );
}

// PropertyStructureTable =========================================================================

interface PropertyStructureTableProps {
  propertyStructure: IPropertyStructure,
  analyticalPeriod: {
    start: number,
    end: number
  }
}

const PropertyStructureTable: React.FC<PropertyStructureTableProps> = ({ propertyStructure, analyticalPeriod }) => {
  return (
    <table className="table table-sm table-bordered table-hover small">
      <PropertyStructureTableHead period={analyticalPeriod} />
      <PropertyStructureTableBody propertyStructure={propertyStructure} />
    </table>
  );
}

export default PropertyStructureTable;