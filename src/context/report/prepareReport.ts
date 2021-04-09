import { IBalanceState, IReport } from '../interfaces';

export default function prepareReport(state: IBalanceState): IReport {
  return {
    status: 'simple report'
  }
}