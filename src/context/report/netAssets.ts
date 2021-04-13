import { IBalanceState, INetAssets } from '../interfaces';
import { valuesAndChangeRow } from './utils';
import { getValuesByCode } from '../balance/balanceStateData'

export default function prepareNetAssets(state: IBalanceState): INetAssets {
  let total: number[] = state.balance.active.total.values;

  let netAssets: INetAssets = {
    indicators: []
  }

  let netAssetsValues: number[] = getValuesByCode(state.balance, 1300);
  let authorizedCapital: number[] = getValuesByCode(state.balance, 1310);
  let netAssetsExcess: number[] = arrayDiff(netAssetsValues, authorizedCapital);

  netAssets.indicators.push(valuesAndChangeRow('1. Чистые активы', netAssetsValues, total));
  netAssets.indicators.push(valuesAndChangeRow('2. Уставный капитал', authorizedCapital, total));
  netAssets.indicators.push(valuesAndChangeRow('Превышение чистых активов над уставным капиталом (стр.1-стр.2)', netAssetsExcess, total));

  return netAssets;
}

function arrayDiff(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] - arr2[i]);
  }

  return result;
}