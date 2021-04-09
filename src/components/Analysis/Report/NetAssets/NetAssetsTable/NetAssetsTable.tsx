import React from 'react';

const NetAssetsTableHead: React.FC = () => {
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
        <th className="align-middle text-center">31.12.2017</th>
        <th className="align-middle text-center">31.12.2018</th>
        <th className="align-middle text-center">31.12.2019</th>
        <th className="align-middle text-center">на начало анализируемого периода (31.12.2017)</th>
        <th className="align-middle text-center">на конец анализируемого периода (31.12.2019)</th>
        <th className="align-middle text-center">(гр.6-гр.2)</th>
        <th className="align-middle text-center">((гр.6-гр.2) : гр.2)</th>
      </tr>

      <tr>
        <td className="text-center">1</td>
        <td className="text-center">2</td>
        <td className="text-center">3</td>
        <td className="text-center">4</td>
        <td className="text-center">5</td>
        <td className="text-center">6</td>
        <td className="text-center">7</td>
        <td className="text-center">8</td>
      </tr>
    </thead>
  );
}

const NetAssetsTableBody: React.FC = () => {
  return (
    <tbody>
      <tr>
        <td>1.Чистые активы</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2. Уставный капитал</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3. Превышение чистых активов над уставным капиталом (стр.1-стр.2)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}


const NetAssetsTable: React.FC = () => {
  return (
    <table className="table table-sm table-bordered table-hover small">
      <NetAssetsTableHead />
      <NetAssetsTableBody />
    </table>
  );
}

export default NetAssetsTable;