import React, { useReducer } from 'react';
import { BalanceContext } from './balanceContext';
import { balanceReducer, COMPANY_NAME_CHANGED, CHANGE_PERIOD_START, CHANGE_PERIOD_END, CLEAR_INPUT_DATA, CELL_VALUE_CHANGED, LOAD_EXAMPLE_DATA, PREPARE_REPORT } from './balanceReducer';
import { createInitialState } from './balance/balanceStateData';
import { IBalanceState, IBalanceContextInterface } from './interfaces';

interface BalanceStateProps {
  children: React.ReactChild
}

export const BalanceState: React.FC<BalanceStateProps> = ({ children }) => {

  const initialState: IBalanceState = createInitialState()
  const [state, dispatch] = useReducer(balanceReducer, initialState)

  const companyNameChanged = (name: string) => dispatch({ type: COMPANY_NAME_CHANGED, payload: name });
  const changePeriodStart = (delta: number) => dispatch({ type: CHANGE_PERIOD_START, payload: delta });
  const changePeriodEnd = (delta: number) => dispatch({ type: CHANGE_PERIOD_END, payload: delta });
  const clearInputData = () => dispatch({ type: CLEAR_INPUT_DATA });
  const enterExampleData = () => dispatch({ type: LOAD_EXAMPLE_DATA });
  const cellValueChanged = (value: string, code: string, index: string) => dispatch({
    type: CELL_VALUE_CHANGED,
    payload: { value, code, index }
  });
  const prepareReport = () => dispatch({ type: PREPARE_REPORT });

  const balanceContext: IBalanceContextInterface = {
    companyName: state.companyName,
    period: state.analysisPeriod,
    balance: state.balance,
    isReportDone: state.isReportDone,
    report: state.report,
    companyNameChanged: companyNameChanged,
    changePeriodStart: changePeriodStart,
    changePeriodEnd: changePeriodEnd,
    clearInputData: clearInputData,
    enterExampleData: enterExampleData,
    cellValueChanged: cellValueChanged,
    prepareReport: prepareReport
  }

  return (
    <BalanceContext.Provider value={balanceContext}>
      {children}
    </BalanceContext.Provider>
  );
}