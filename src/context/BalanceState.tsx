import React, { useReducer } from 'react';
import { BalanceContextProvider, BalanceContextInterface } from './balanceContext';
import { balanceReducer, IBalanceState, CHANGE_PERIOD_START, CHANGE_PERIOD_END } from './balanceReducer';

// Примеры кода
// https://habr.com/ru/post/510642/
// https://codesandbox.io/s/typescript-react-usecontext-example-lijok?from-embed=&file=/src/Context.tsx
// https://www.fullstacklabs.co/blog/usecontext-data-discoverable-typescript


interface BalanceStateProps {
  children: React.ReactChild
}

export const BalanceState: React.FC<BalanceStateProps> = ({ children }) => {

  const initialState: IBalanceState = {
    companyName: '',
    analysisPeriod: {
      start: 2018,
      end: 2020
    }
  }

  const [state, dispatch] = useReducer(balanceReducer, initialState)

  const changePeriodStart = (delta: number) => dispatch({ type: CHANGE_PERIOD_START, payload: delta });
  const changePeriodEnd = (delta: number) => dispatch({ type: CHANGE_PERIOD_END, payload: delta })

  const initialBalanceContext: BalanceContextInterface = {
    period: state.analysisPeriod,
    changePeriodStart: changePeriodStart,
    changePeriodEnd: changePeriodEnd
  }

  return (
    <BalanceContextProvider value={initialBalanceContext}>
      { children}
    </BalanceContextProvider>
  );
}