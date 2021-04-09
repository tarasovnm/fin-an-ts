import React from 'react';
import FinancialStabilityTable from './FinancialStabilityTable/FinancialStabilityTable';

const FinancialStability: React.FC = () => {
  return (
    <div className="card p-4 mb-3">
      <h3>Основные показатели финансовой устойчивости</h3>
      <FinancialStabilityTable />
    </div>
  );
}

export default FinancialStability;