import React, { useReducer } from 'react';
import { BalanceContext } from './balanceContext';
import { balanceReducer, CHANGE_PERIOD_START, CHANGE_PERIOD_END, CELL_VALUE_CHANGED } from './balanceReducer';
import { createBalanceState } from './balanceStateData';
import { IBalanceState, IBalanceContextInterface } from './interfaces';

interface BalanceStateProps {
  children: React.ReactChild
}

export const BalanceState: React.FC<BalanceStateProps> = ({ children }) => {

  const initialState: IBalanceState = {
    companyName: '',
    analysisPeriod: {
      start: 2018,
      end: 2020
    },
    balance: createBalanceState(2018, 2020)
  }

  const [state, dispatch] = useReducer(balanceReducer, initialState)

  const changePeriodStart = (delta: number) => dispatch({ type: CHANGE_PERIOD_START, payload: delta });
  const changePeriodEnd = (delta: number) => dispatch({ type: CHANGE_PERIOD_END, payload: delta });
  const cellValueChanged = (value: string, code: string, index: string) => dispatch({
    type: CELL_VALUE_CHANGED,
    payload: { value, code, index }
  })

  const balanceContext: IBalanceContextInterface = {
    period: state.analysisPeriod,
    balance: state.balance,
    changePeriodStart: changePeriodStart,
    changePeriodEnd: changePeriodEnd,
    cellValueChanged: cellValueChanged
  }

  return (
    <BalanceContext.Provider value={balanceContext}>
      { children}
    </BalanceContext.Provider>
  );
}