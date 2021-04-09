import React from 'react';

const AnalyticalBalanceTableHead: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className="align-middle text-center">Показатели</th>
        <th className="align-middle text-center">Значение</th>
        <th className="align-middle text-center">31.12.2017</th>
        <th className="align-middle text-center">31.12.2018</th>
        <th className="align-middle text-center">31.12.2019</th>
      </tr>

      <tr>
        <td className="text-center">1</td>
        <td className="text-center">2</td>
        <td className="text-center">3</td>
        <td className="text-center">4</td>
        <td className="text-center">5</td>
      </tr>
    </thead>
  );
}

const AnalyticalBalanceTableBody: React.FC = () => {
  return (
    <tbody>
      <tr>
        <td rowSpan={4}>I. Внеоборотные активы</td>
        <td>значение, тыс. руб.</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>изменение, тыс. руб.</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>изменение, %</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>удельный вес, %</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

const AnalyticalBalanceTable: React.FC = () => {
  return (
    <table className="table table-sm table-bordered table-hover small">
      <AnalyticalBalanceTableHead />
      <AnalyticalBalanceTableBody />
    </table>
  );
}

export default AnalyticalBalanceTable;