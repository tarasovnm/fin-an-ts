export const CHANGE_PERIOD_START = 'CHANGE_PERIOD_START';
export const CHANGE_PERIOD_END = 'CHANGE_PERIOD_END';

export interface IBalanceState {
  companyName: string,
  analysisPeriod: {
    start: number,
    end: number
  }
}

interface IAction {
  type: string,
  payload?: any
}

export const balanceReducer = (state: IBalanceState, action: IAction) => {
  switch (action.type) {
    case CHANGE_PERIOD_START:
      console.log('Изменяем начало периода на', action.payload)
      return state;
    case CHANGE_PERIOD_END:
      console.log('Изменяем конец периода на', action.payload)
      return state;
    default:
      return state;
  }
}