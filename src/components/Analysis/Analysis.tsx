import React from 'react';
import './Analysis.scss';
import Options from './Options/Options';
import BalanceForm1 from './BalanceForm1/BalanceForm1';
import { BalanceState } from '../../context/BalanceState';

const Analysis: React.FC = () => {
  return (
    <BalanceState>
      <div className="analysis-page container pt-4">
        <h1>Анализ финансовой деятельности организации</h1>
        <Options />
        <BalanceForm1 />
      </div>
    </BalanceState>
  );
}

export default Analysis;