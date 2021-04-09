import React from 'react';
import AnalyticalBalanceTable from './AnalyticalBalanceTable/AnalyticalBalanceTable';

const AnalyticalBalance: React.FC = () => {
  return (
    <div className="card p-4 mb-3">
      <h3>Аналитический баланс</h3>
      <AnalyticalBalanceTable />
    </div>
  );
}

export default AnalyticalBalance;