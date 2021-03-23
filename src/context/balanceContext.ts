import { createContext } from 'react';

export interface BalanceContextInterface {
  period: {
    start: number,
    end: number
  }
}

const defaultBalanceContext: BalanceContextInterface = {
  period: {
    start: 2018,
    end: 2020
  }
}

export const BalanceContext = createContext<BalanceContextInterface>(defaultBalanceContext);

export const BalanceContextProvider = BalanceContext.Provider;
export const BalanceContextConsumer = BalanceContext.Consumer;