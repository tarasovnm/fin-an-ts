import { IBalanceState, IReport } from '../interfaces';
import prepareAnalyticalBalance from './analyticalBalance';

export default function prepareReport(state: IBalanceState): IReport {
  return {
    analyticalBalance: prepareAnalyticalBalance(state)
  }
}