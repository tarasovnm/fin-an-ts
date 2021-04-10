import React, { useContext } from 'react';
import AnalyticalBalance from './AnalyticalBalance/AnalyticalBalance';
import PropertyStructure from './PropertyStructure/PropertyStructure';
import NetAssets from './NetAssets/NetAssets';
import FinancialStability from './FinancialStability/FinancialStability';
import { BalanceContext } from '../../../context/balanceContext';
import { IBalanceContextInterface } from '../../../context/interfaces';

const Report: React.FC = () => {
  const { isReportDone, report, period } = useContext(BalanceContext) as IBalanceContextInterface;

  if (!isReportDone) {
    return <></>;
  }

  return (
    <div>
      <PropertyStructure />
      <NetAssets />
      <FinancialStability />
      <AnalyticalBalance analyticalData={report?.analyticalBalance} analyticalPeriod={period} />
    </div>
  );
}

export default Report;