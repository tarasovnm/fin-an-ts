import React, { useContext } from 'react';
import BalanceTableForm1 from './BalanceTableForm1/BalanceTableForm1';
import { IBalanceContextInterface } from '../../../context/interfaces';
import { BalanceContext } from '../../../context/balanceContext';

const BalanceForm1: React.FC = () => {

  const { period, balance } = useContext(BalanceContext) as IBalanceContextInterface;

  return (
    <div className="balance-form-1 card p-3 mb-3">
      <h3>Бухгалтерский баланс</h3>

      <div>
        <BalanceTableForm1
          tableData={balance}
          analysisPeriod={period}
        // cellValueChanged={cellValueChanged} 
        />
      </div>
    </div>
  );
}

export default BalanceForm1;