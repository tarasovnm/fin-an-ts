import { IBalanceState } from './interfaces';

export const CHANGE_PERIOD_START = 'CHANGE_PERIOD_START';
export const CHANGE_PERIOD_END = 'CHANGE_PERIOD_END';

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
    default:
      return state;
  }
}