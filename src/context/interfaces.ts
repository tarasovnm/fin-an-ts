export interface IBalanseRow {
  name: string,
  code: number,
  values: number[]
}

export interface IBalanceTotal {
  code: number,
  values: number[]
}

export interface IBalanceSection {
  id: string,
  name: string,
  data: IBalanseRow[],
  total: IBalanceTotal
}

export interface IBalanceTableState {
  [key: string]: {
    sections: IBalanceSection[],
    total: IBalanceTotal
  },
}

export interface IBalanceState {
  companyName: string,
  analysisPeriod: {
    start: number,
    end: number
  }
  balance: IBalanceTableState
}

export interface IBalanceContextInterface {
  companyName: string,
  period: {
    start: number,
    end: number
  },
  balance: IBalanceTableState,
  companyNameChanged: (name: string) => void,
  changePeriodStart: (delta: number) => void,
  changePeriodEnd: (delta: number) => void,
  clearInputData: () => void,
  enterExampleData: () => void,
  cellValueChanged: (value: string, code: string, index: string) => void
}
