import { IBalanceState, IReport } from '../interfaces';
import prepareAnalyticalBalance from './analyticalBalance';
import preparePropertyStructure from './propertyStructure';

export default function prepareReport(state: IBalanceState): IReport {
  let analyticalBalance = prepareAnalyticalBalance(state);
  preparePropertyStructure(state);

  return {
    analyticalBalance
  }
}