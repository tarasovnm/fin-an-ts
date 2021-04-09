import { IBalanceState } from './interfaces';
import { changeCellValue, changeStartColumn, changeEndColumn } from './balance/balanceStateData';
import { createInitialState } from './balance/balanceStateData';
import getExampleState from './balance/balanceStateExampleData';
import prepareReport from './report/prepareReport';

const MAX_PERIOD_LENGTH = 5;

export const COMPANY_NAME_CHANGED = 'COMPANY_NAME_CHANGED';
export const CHANGE_PERIOD_START = 'CHANGE_PERIOD_START';
export const CHANGE_PERIOD_END = 'CHANGE_PERIOD_END';
export const CELL_VALUE_CHANGED = 'CELL_VALUE_CHANGED';
export const CLEAR_INPUT_DATA = 'CLEAR_INPUT_DATA';
export const LOAD_EXAMPLE_DATA = 'LOAD_EXAMPLE_DATA';
export const PREPARE_REPORT = 'PREPARE_REPORT';

interface IAction {
  type: string,
  payload?: any
}

export const balanceReducer = (state: IBalanceState, action: IAction) => {
  switch (action.type) {
    case COMPANY_NAME_CHANGED:
      return { ...state, companyName: action.payload };

    case CHANGE_PERIOD_START:
      let startDelta = action.payload;
      let newStartValue = state.analysisPeriod.start + startDelta;

      if (newStartValue <= 2010 || newStartValue >= state.analysisPeriod.end || newStartValue <= (state.analysisPeriod.end - MAX_PERIOD_LENGTH)) {
        startDelta = 0;
      }

      newStartValue = state.analysisPeriod.start + startDelta;

      return {
        ...state,
        analysisPeriod: {
          start: newStartValue,
          end: state.analysisPeriod.end
        },
        balance: startDelta ? changeStartColumn(state.balance, startDelta) : state.balance
      };

    case CHANGE_PERIOD_END:
      let endDelta = action.payload;
      let newEndValue = state.analysisPeriod.end + endDelta;


      if (newEndValue > 2020 || newEndValue <= state.analysisPeriod.start || newEndValue >= (state.analysisPeriod.start + MAX_PERIOD_LENGTH)) {
        endDelta = 0;
      }

      newEndValue = state.analysisPeriod.end + endDelta;

      return {
        ...state,
        analysisPeriod: {
          start: state.analysisPeriod.start,
          end: newEndValue
        },
        balance: endDelta ? changeEndColumn(state.balance, action.payload) : state.balance
      };

    case CELL_VALUE_CHANGED:
      const newCellValue = parseInt(action.payload.value)
      if (newCellValue) {
        return {
          ...state,
          balance: changeCellValue(state.balance, action.payload.code, action.payload.index, action.payload.value)
        }
      }
      return state;

    case CLEAR_INPUT_DATA:
      return createInitialState();

    case LOAD_EXAMPLE_DATA:
      return getExampleState();

    case PREPARE_REPORT:
      console.log('Подготовить отчет');
      return {
        ...state,
        isReportDone: true,
        report: prepareReport(state)
      };

    default:
      return state;
  }
}