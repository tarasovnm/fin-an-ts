import React from 'react';
import { INetAssets, IValuesAndChange } from '../../../../../context/interfaces';

interface TableHeadProps {
  period: {
    start: number,
    end: number
  }
}

const NetAssetsTableHead: React.FC<TableHeadProps> = ({ period }) => {

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

const NetAssetsRow: React.FC<TableRowProps> = ({ rowData }) => {
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

interface NetAssetsTableBodyProps {
  tableData: INetAssets
}

const NetAssetsTableBody: React.FC<NetAssetsTableBodyProps> = ({ tableData }) => {
  return (
    <tbody>
      {tableData.indicators.map((indicator, idx) => <NetAssetsRow rowData={indicator} key={idx} />)}
    </tbody>
  );
}

interface NetAssetsTableProps {
  netAssets: INetAssets,
  analyticalPeriod: {
    start: number,
    end: number
  }
}

const NetAssetsTable: React.FC<NetAssetsTableProps> = ({ netAssets, analyticalPeriod }) => {
  return (
    <table className="table table-sm table-bordered table-hover small">
      <NetAssetsTableHead period={analyticalPeriod} />
      <NetAssetsTableBody tableData={netAssets} />
    </table>
  );
}

export default NetAssetsTable;