import { createContext } from 'react';

export interface BalanceContextInterface {
  period: {
    start: number,
    end: number
  },
  changePeriodStart?: (delta: number) => void,
  changePeriodEnd?: (delta: number) => void
}

// const defaultBalanceContext: BalanceContextInterface = {
//   period: {
//     start: 2018,
//     end: 2020
//   }
// }

// export const BalanceContext = createContext<BalanceContextInterface>(defaultBalanceContext);
export const BalanceContext = createContext<BalanceContextInterface | undefined>(undefined);


export const BalanceContextProvider = BalanceContext.Provider;
export const BalanceContextConsumer = BalanceContext.Consumer;