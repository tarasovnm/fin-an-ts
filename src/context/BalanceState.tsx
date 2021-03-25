import React, { useReducer } from 'react';
import { BalanceContext, BalanceContextInterface } from './balanceContext';
import { balanceReducer, IBalanceState, CHANGE_PERIOD_START, CHANGE_PERIOD_END } from './balanceReducer';

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

  const balanceContext: BalanceContextInterface = {
    period: state.analysisPeriod,
    changePeriodStart: changePeriodStart,
    changePeriodEnd: changePeriodEnd
  }

  return (
    <BalanceContext.Provider value={balanceContext}>
      { children}
    </BalanceContext.Provider>
  );
}