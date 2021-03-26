import React from 'react';
import BalanceTableForm1 from './BalanceTableForm1/BalanceTableForm1';

const BalanceForm1: React.FC = () => {

  const balanceData = {};
  const analysisPeriod = {
    start: 2010,
    end: 2012
  }

  return (
    <div className="balance-form-1 card p-3">
      <h3>Бухгалтерский баланс</h3>

      <div>
        <BalanceTableForm1
          tableData={balanceData}
          analysisPeriod={analysisPeriod}
        // cellValueChanged={cellValueChanged} 
        />
      </div>
    </div>
  );
}

export default BalanceForm1;