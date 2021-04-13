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
  cellValueChanged: (value: string, code: string, index: string) => void
}

const Cell: React.FC<ICellProps> = ({ code, index, value, cellValueChanged }) => {

  const inputStyle = {
    display: "block",
    padding: 0,
    margin: 0,
    border: 0,
    width: "100%",
    textAlign: "center" as "center"
  }

  const onCellChange = (e: any) => {
    const target = e.target;
    cellValueChanged(target.value, target.dataset.code, target.dataset.index);
  }

  return (
    <td className="align-middle text-center">
      <input className="m0"
        type="text"
        value={value}
        style={inputStyle}
        onChange={onCellChange}
        data-code={code}
        data-index={index}>
      </input>
    </td>
  );
}

// SectoinRow ===============================================================================

interface ISectoinRowProps {
  sectionStr: IBalanseRow,
  cellValueChanged: (value: string, code: string, index: string) => void
}

const SectoinRow: React.FC<ISectoinRowProps> = ({ sectionStr, cellValueChanged }) => {
  let reversedValues = [...sectionStr.values].reverse();
  let indexes: number[] = [];
  let i: number = reversedValues.length - 1;

  while (i >= 0) {
    indexes.push(i);
    i--;
  }

  return (
    <tr>
      <td>{sectionStr.name}</td>
      <td className="align-middle text-center">{sectionStr.code}</td>
      {reversedValues.map((val, idx) => <Cell value={val} key={idx} code={sectionStr.code} index={indexes[idx]} cellValueChanged={cellValueChanged} />)}
    </tr>
  );
}

// SectionTotal =============================================================================

interface ISectionTotalProps {
  totalData: IBalanceTotal,
  sectionId: string
}

const SectionTotal: React.FC<ISectionTotalProps> = ({ totalData, sectionId }) => {
  let newTotalData = [...totalData.values].reverse();

  return (
    <tr>
      <td>ИТОГО по разделу {sectionId}</td>
      <td className="text-center">{totalData.code}</td>
      {newTotalData.map((val, idx) => <td className="text-center" key={idx}>{val}</td>)}
    </tr>
  );
}

// BalanceSection ===========================================================================

interface IBalanceSectionProps {
  sectionData: IBalanceSection,
  years: number[],
  cellValueChanged: (value: string, code: string, index: string) => void
}

const BalanceSection: React.FC<IBalanceSectionProps> = ({ sectionData, years, cellValueChanged }) => {
  return (
    <>
      <tr>
        <td className="font-weight-bold" colSpan={years.length + 2}>{sectionData.id + '. ' + sectionData.name}</td>
      </tr>
      {sectionData.data.map(sectionStr => <SectoinRow sectionStr={sectionStr} key={sectionStr.code} cellValueChanged={cellValueChanged} />)}
      <SectionTotal totalData={sectionData.total} sectionId={sectionData.id} />
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
      <td className="font-weight-bold">БАЛАНС</td>
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
  years: number[],
  cellValueChanged: (value: string, code: string, index: string) => void
}

const TablePart: React.FC<ITablePartProps> = ({ partData, name, years, cellValueChanged }) => {
  return (
    <>
      <tr>
        <td className="fw-bolder" colSpan={years.length + 2}>
          <span className="fw-bolder font-weight-bold">{name}</span>
        </td>
      </tr>
      {partData.sections.map(section => <BalanceSection sectionData={section} years={years} key={section.id} cellValueChanged={cellValueChanged} />)}
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
  cellValueChanged: (value: string, code: string, index: string) => void
}

const BalanceTableForm1: React.FC<IBalanceTableForm1Props> = ({ tableData, analysisPeriod, cellValueChanged }) => {
  let numOfYears: number = analysisPeriod.end - analysisPeriod.start;
  let years: number[] = [];
  let i: number = numOfYears;

  while (i >= 0) {
    years.push(analysisPeriod.start + i);
    i--;
  }

  console.log(tableData);

  return (
    <table className="table table-sm table-bordered table-hover small">
      <TableHeader years={years} />
      <tbody>
        <TablePart
          partData={tableData.active}
          name="АКТИВ"
          years={years}
          cellValueChanged={cellValueChanged} />
        <TablePart
          partData={tableData.passive}
          name="ПАССИВ"
          years={years}
          cellValueChanged={cellValueChanged} />
      </tbody>
    </table>
  )
}

export default BalanceTableForm1;