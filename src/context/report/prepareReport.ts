import { IBalanceState, IReport } from '../interfaces';
import prepareAnalyticalBalance from './analyticalBalance';
import preparePropertyStructure from './propertyStructure';

export default function prepareReport(state: IBalanceState): IReport {
  let analyticalBalance = prepareAnalyticalBalance(state);
  let propertyStructure = preparePropertyStructure(state);

  return {
    analyticalBalance,
    propertyStructure
  }
}