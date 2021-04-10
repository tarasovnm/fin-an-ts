// Интерфесы Баланса ф.1 ====================================================================

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

// Интерфесы аналитического отчета ==========================================================

export interface IAnalyticalBalanceIndicator {
  id: number,
  name: string,
  values: number[],
  absoluteChange: number[],
  relativeChange: number[],
  weight: number[]
}

export interface IAnalyticalBalance {
  indicators: IAnalyticalBalanceIndicator[],
  balanceTotal: {
    values: number[],
    absoluteChange: number[],
    relativeChange: number[],
  }
}

export interface IReport {
  analyticalBalance: IAnalyticalBalance
}

// Интерфесы общего стейта и контекста ======================================================

export interface IBalanceState {
  companyName: string,
  analysisPeriod: {
    start: number,
    end: number
  }
  balance: IBalanceTableState,
  isReportDone: boolean,
  report: IReport | undefined
}

export interface IBalanceContextInterface {
  companyName: string,
  period: {
    start: number,
    end: number
  },
  balance: IBalanceTableState,
  isReportDone: boolean,
  report: IReport | undefined,
  companyNameChanged: (name: string) => void,
  changePeriodStart: (delta: number) => void,
  changePeriodEnd: (delta: number) => void,
  clearInputData: () => void,
  enterExampleData: () => void,
  cellValueChanged: (value: string, code: string, index: string) => void,
  prepareReport: () => void
}
