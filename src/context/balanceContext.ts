import { createContext } from 'react';

export interface BalanceContextInterface {
  period: {
    start: number,
    end: number
  },
  changePeriodStart: (delta: number) => void,
  changePeriodEnd: (delta: number) => void
}

export const BalanceContext = createContext<BalanceContextInterface | null>(null);