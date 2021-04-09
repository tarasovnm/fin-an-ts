import React from 'react';

const FinancialStabilityTableHead: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className="align-middle text-center" rowSpan={2}>Показатель</th>
        <th className="align-middle text-center" colSpan={3}>Значение показателя</th>
        <th className="align-middle text-center">Изменение показателя</th>
        <th className="align-middle text-center" rowSpan={2}>Описание показателя и его нормативное значение</th>
      </tr>

      <tr>
        <th className="align-middle text-center">31.12.2017</th>
        <th className="align-middle text-center">31.12.2018</th>
        <th className="align-middle text-center">31.12.2019</th>
        <th className="align-middle text-center">(гр.6-гр.2)</th>
      </tr>

      <tr>
        <td className="text-center">1</td>
        <td className="text-center">2</td>
        <td className="text-center">3</td>
        <td className="text-center">4</td>
        <td className="text-center">5</td>
        <td className="text-center">6</td>
      </tr>
    </thead>
  );
}

const FinancialStabilityTableBody: React.FC = () => {
  return (
    <tbody>
      <tr>
        <td>1. Коэффициент автономии</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2. Коэффициент финансового левериджа</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3. Коэффициент обеспеченности собственными оборотными средствами </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

const FinancialStabilityTable: React.FC = () => {
  return (
    <table className="table table-sm table-bordered table-hover small">
      <FinancialStabilityTableHead />
      <FinancialStabilityTableBody />
    </table>
  );
}

export default FinancialStabilityTable;