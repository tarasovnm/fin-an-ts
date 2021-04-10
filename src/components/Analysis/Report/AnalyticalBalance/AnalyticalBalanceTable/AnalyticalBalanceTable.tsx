import React from 'react';
import { IAnalyticalBalance, IAnalyticalBalanceIndicator } from '../../../../../context/interfaces';

// AnalyticalBalanceTableHead =====================================================================

interface AnalyticalBalanceTableHeadProps {
  period: {
    start: number,
    end: number
  }
}

const AnalyticalBalanceTableHead: React.FC<AnalyticalBalanceTableHeadProps> = ({ period }) => {

  let years: number[] = [];
  for (let i = period.start; i <= period.end; i++) {
    years.push(i);
  }

  let columns: number[] = [];
  for (let i = 0; i <= years.length + 1; i++) {
    columns.push(i + 1);
  }

  return (
    <thead>
      <tr>
        <th className="align-middle text-center">Показатели</th>
        <th className="align-middle text-center">Значение</th>
        {years.map(year => <th className="align-middle text-center" key={year}>{"31.12." + year}</th>)}
      </tr>

      <tr>
        {columns.map(col => <td className="text-center" key={col}>{col}</td>)}
      </tr>
    </thead>
  );
}

// AnalyticalCell =====================================+++=============================

interface AnalyticalCellProps {
  val: number | string
}

const AnalyticalCell: React.FC<AnalyticalCellProps> = ({ val }) => {
  return (
    <td className="text-center">{val}</td>
  );
}

// AnalyticalBalanceTableSection ==================================================================

interface AnalyticalBalanceTableSectionProps {
  sectionData: IAnalyticalBalanceIndicator
}

function toPercentSrtring(val: number): string {
  return isNaN(val) ? 'x' : (val * 100).toFixed(2) + '%';
}

const AnalyticalBalanceTableSection: React.FC<AnalyticalBalanceTableSectionProps> = ({ sectionData }) => {
  return (
    <>
      <tr>
        <td rowSpan={4}>{sectionData.name}</td>
        <td>значение, тыс. руб.</td>
        {sectionData.values.map((val, idx) => <AnalyticalCell key={idx} val={val} />)}
      </tr>
      <tr>
        <td>изменение, тыс. руб.</td>
        {sectionData.absoluteChange.map((val, idx) => <AnalyticalCell key={idx} val={val} />)}
      </tr>
      <tr>
        <td>изменение, %</td>
        {sectionData.relativeChange.map((val, idx) => <AnalyticalCell key={idx} val={toPercentSrtring(val)} />)}
      </tr>
      <tr>
        <td>удельный вес, %</td>
        {sectionData.weight.map((val, idx) => <AnalyticalCell key={idx} val={toPercentSrtring(val)} />)}
      </tr>
    </>
  );
}

// AnalyticalBalanceTableBody =====================================================================

interface AnalyticalBalanceTableBodyProps {
  analyticalData: IAnalyticalBalance
}

const AnalyticalBalanceTableBody: React.FC<AnalyticalBalanceTableBodyProps> = ({ analyticalData }) => {
  console.log(analyticalData.indicators);

  return (

    <tbody>
      {analyticalData.indicators.map(ind => <AnalyticalBalanceTableSection sectionData={ind} key={ind.id} />)}
    </tbody>
  );
}

// AnalyticalBalanceTable =========================================================================

interface AnalyticalBalanceTableProps {
  analyticalData: IAnalyticalBalance,
  analyticalPeriod: {
    start: number,
    end: number
  }
}

const AnalyticalBalanceTable: React.FC<AnalyticalBalanceTableProps> = ({ analyticalData, analyticalPeriod }) => {
  return (
    <table className="table table-sm table-bordered table-hover small">
      <AnalyticalBalanceTableHead period={analyticalPeriod} />
      <AnalyticalBalanceTableBody analyticalData={analyticalData} />
    </table>
  );
}

export default AnalyticalBalanceTable;