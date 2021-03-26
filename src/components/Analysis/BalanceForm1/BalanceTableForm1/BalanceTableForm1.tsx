import React from 'react';

interface IBalanceTableForm1Props {
  tableData: {},
  analysisPeriod: {
    start: number,
    end: number
  },
}

const BalanceTableForm1: React.FC<IBalanceTableForm1Props> = () => {
  return (
    <div>
      Баланс Форма №1
    </div>
  );
}

export default BalanceTableForm1;