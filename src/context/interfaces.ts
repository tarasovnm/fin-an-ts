interface IBalanseRow {
  name: string,
  code: number,
  values: number[]
}

interface IBalanceTotal {
  code: number,
  values: number[]
}

interface IBalanceSection {
  id: string,
  name: string,
  data: IBalanseRow[],
  total: IBalanceTotal
}

export interface IBalanceTableState {
  active: {
    sections: IBalanceSection[],
    total: IBalanceTotal
  },
  passive: {
    sections: IBalanceSection[],
    total: IBalanceTotal
  }
}

export interface IBalanceState {
  companyName: string,
  analysisPeriod: {
    start: number,
    end: number
  }
  belance: IBalanceTableState
}

export interface IBalanceContextInterface {
  period: {
    start: number,
    end: number
  },
  balance: IBalanceTableState,
  changePeriodStart: (delta: number) => void,
  changePeriodEnd: (delta: number) => void
}
