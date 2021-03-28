import React from 'react';
import { IBalanceSection, IBalanceTotal, IBalanceTableState, IBalanseRow } from '../../../../context/interfaces';

// TableHeader ==============================================================================

interface ITableHeaderProps {
  years: number[]
}

const TableHeader: React.FC<ITableHeaderProps> = ({ years }) => {
  let columns: number[] = [];
  for (let i = 0; i <= years.length + 1; i++) {
    columns.push(i + 1);
  }

  return (
    <thead>
      <tr>
        <th className="align-middle text-center">Показатель</th>
        <th className="align-middle text-center">Код показателя</th>
        {years.map(year => <th className="align-middle text-center" key={year}>{'31.12.' + year}</th>)}
      </tr>
      <tr>
        {columns.map(col => <td className="text-center" key={col}>{col}</td>)}
      </tr>
    </thead>
  );
}

// Cell =====================================================================================

interface ICellProps {
  code: number,
  index: number,
  value: number,
}

const Cell: React.FC<ICellProps> = ({ code, index, value }) => {

  // const onCellChange = (e) => {
  //   const target = e.target;
  //   cellValueChanged({
  //     code: target.dataset.code,
  //     index: target.dataset.index,
  //     value: target.value
  //   });
  // }

  return (
    <td className="align-middle text-center">
      {/* <input
        type="text"
        value={value}
        onChange={onCellChange}
        data-code={code}
        data-index={index}>
      </input> */}
      {value}
    </td>
  );
}

// SectoinRow ===============================================================================

interface ISectoinRowProps {
  sectionStr: IBalanseRow
}

const SectoinRow: React.FC<ISectoinRowProps> = ({ sectionStr }) => {
  return (
    <tr>
      <td>{sectionStr.name}</td>
      <td className="align-middle text-center">{sectionStr.code}</td>
      {sectionStr.values.map((val, idx) => <Cell value={val} key={idx} code={sectionStr.code} index={idx} />)}
    </tr>
  );
}

// SectionTotal =============================================================================

interface ISectionTotalProps {
  totalData: IBalanceTotal,
  sectionId: string,
  years: number[]
}

const SectionTotal: React.FC<ISectionTotalProps> = ({ totalData, sectionId, years }) => {
  return (
    <tr>
      <td>ИТОГО по разделу {sectionId}</td>
      <td className="text-center">{totalData.code}</td>
      {totalData.values.map((val, idx) => <td className="text-center" key={idx}>{val}</td>)}
    </tr>
  );
}

// BalanceSection ===========================================================================

interface IBalanceSectionProps {
  sectionData: IBalanceSection,
  years: number[]
}

const BalanceSection: React.FC<IBalanceSectionProps> = ({ sectionData, years }) => {
  return (
    <>
      <tr>
        <td colSpan={years.length + 2}>{sectionData.id + '. ' + sectionData.name}</td>
      </tr>
      {sectionData.data.map(sectionStr => <SectoinRow sectionStr={sectionStr} key={sectionStr.code} />)}
      <SectionTotal totalData={sectionData.total} sectionId={sectionData.id} years={years} />
    </>
  );
}

// PartTotal ================================================================================

interface IPartTotalProps {
  totalData: IBalanceTotal,
  years: number[]
}

const PartTotal: React.FC<IPartTotalProps> = ({ totalData, years }) => {
  return (
    <tr >
      <td>БАЛАНС</td>
      <td className="text-center">{totalData.code}</td>
      {totalData.values.map((val, idx) => <td className="text-center" key={idx}>{val}</td>)}
    </tr>
  );
}

// TablePart ================================================================================

interface ITablePartProps {
  partData: {
    sections: IBalanceSection[],
    total: IBalanceTotal
  },
  name: string,
  years: number[]
}

const TablePart: React.FC<ITablePartProps> = ({ partData, name, years }) => {
  return (
    <>
      <tr>
        <td className="fw-bolder" colSpan={years.length + 2}>
          <span className="fw-bolder text-reset">{name}</span>
        </td>
      </tr>
      {partData.sections.map(section => <BalanceSection sectionData={section} years={years} key={section.id} />)}
      <PartTotal totalData={partData.total} years={years} />
    </>
  );
}

// BalanceTableForm1 ========================================================================

interface IBalanceTableForm1Props {
  tableData: IBalanceTableState,
  analysisPeriod: {
    start: number,
    end: number
  },
  cellValueChanged: (value: number, code: number, index: number) => void
}

const BalanceTableForm1: React.FC<IBalanceTableForm1Props> = ({ tableData, analysisPeriod }) => {
  let numOfYears: number = analysisPeriod.end - analysisPeriod.start;
  let years: number[] = [];
  let i: number = numOfYears;

  while (i >= 0) {
    years.push(analysisPeriod.start + i);
    i--;
  }

  return (
    <table className="table table-sm table-bordered table-hover">
      <TableHeader years={years} />
      <tbody>
        <TablePart
          partData={tableData.active}
          name="АКТИВ"
          years={years} />
        <TablePart
          partData={tableData.passive}
          name="ПАССИВ"
          years={years} />
      </tbody>
    </table>
  )
}

export default BalanceTableForm1;