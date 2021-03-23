import React, { useState } from 'react';
import { BalanceContextProvider, BalanceContextInterface } from './balanceContext';

interface BalanceStateProps {
  children: React.ReactChild
}

export const BalanceState: React.FC<BalanceStateProps> = ({ children }) => {

  const [period] = useState({ start: 2018, end: 2020 });

  const initialBalanceContext: BalanceContextInterface = {
    period
  }

  return (
    <BalanceContextProvider value={initialBalanceContext}>
      { children}
    </BalanceContextProvider>
  );
}