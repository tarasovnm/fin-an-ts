import { IBalanceState } from './interfaces';
import { changeCellValue } from './balanceStateData';

export const CHANGE_PERIOD_START = 'CHANGE_PERIOD_START';
export const CHANGE_PERIOD_END = 'CHANGE_PERIOD_END';

export const COMPANY_NAME_CHANGED = 'COMPANY_NAME_CHANGED';
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
    case CHANGE_PERIOD_START:
      return {
        ...state,
        analysisPeriod: {
          ...state.analysisPeriod,
          start: state.analysisPeriod.start + action.payload
        }
      };
    case CHANGE_PERIOD_END:
      return {
        ...state,
        analysisPeriod: {
          ...state.analysisPeriod,
          end: state.analysisPeriod.end + action.payload
        }
      };
    case CELL_VALUE_CHANGED:
      const newCellValue = parseInt(action.payload.value)
      if (newCellValue) {
        return {
          ...state,
          balance: changeCellValue(state.belance, action.payload.code, action.payload.index, action.payload.value)
        }
      }
      return state;

    default:
      return state;
  }
}