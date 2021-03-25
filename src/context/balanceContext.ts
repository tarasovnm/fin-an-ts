import { createContext } from 'react';

export interface BalanceContextInterface {
  period: {
    start: number,
    end: number
  },
  changePeriodStart: (delta: number) => void,
  changePeriodEnd: (delta: number) => void
}

const defaultBalanceContext: BalanceContextInterface = {
  period: {
    start: 2018,
    end: 2020
  },
  changePeriodStart: (delta: number) => console.log(delta),
  changePeriodEnd: (delta: number) => console.log(delta)
}

export const BalanceContext = createContext<BalanceContextInterface>(defaultBalanceContext);


export const BalanceContextProvider = BalanceContext.Provider;
export const BalanceContextConsumer = BalanceContext.Consumer;