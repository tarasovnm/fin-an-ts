import React from 'react';
import AnalyticalBalanceTable from './AnalyticalBalanceTable/AnalyticalBalanceTable';
import { IAnalyticalBalance } from '../../../../context/interfaces';

interface AnalyticalBalanceProps {
  analyticalData: IAnalyticalBalance | undefined,
  analyticalPeriod: {
    start: number,
    end: number
  }
}

const AnalyticalBalance: React.FC<AnalyticalBalanceProps> = ({ analyticalData, analyticalPeriod }) => {

  if (!analyticalData) {
    return <></>;
  }

  return (
    <div className="card p-4 mb-3">
      <h3>Аналитический баланс</h3>
      <AnalyticalBalanceTable analyticalData={analyticalData} analyticalPeriod={analyticalPeriod} />
    </div>
  );
}

export default AnalyticalBalance;