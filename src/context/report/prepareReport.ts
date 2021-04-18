import { IBalanceState, IReport } from '../interfaces';
import prepareAnalyticalBalance from './analyticalBalance';
import prepareFinStability from './finStability';
import prepareNetAssets from './netAssets';
import preparePropertyStructure from './propertyStructure';

export default function prepareReport(state: IBalanceState): IReport {
  let analyticalBalance = prepareAnalyticalBalance(state);
  let propertyStructure = preparePropertyStructure(state);
  let netAssets = prepareNetAssets(state);
  prepareFinStability(state);

  return {
    analyticalBalance,
    propertyStructure,
    netAssets
  }
}