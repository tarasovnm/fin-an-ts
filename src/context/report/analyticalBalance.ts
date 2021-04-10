import { IBalanceState, IAnalyticalBalance, IAnalyticalBalanceIndicator } from '../interfaces';

export default function prepareAnalyticalBalance(state: IBalanceState): IAnalyticalBalance {

  const balance = state.balance;
  const balanceTotal = [...state.balance.active.total.values].reverse();
  const indicators: IAnalyticalBalanceIndicator[] = [];

  Object.keys(balance).forEach(part => {
    balance[part].sections.forEach(section => {

      let sectionValues = section.total.values.reverse()

      if (!sectionValues.every(el => el === 0)) {
        let analyticalSection: IAnalyticalBalanceIndicator = {
          id: section.total.code,
          name: section.name,
          values: sectionValues,
          absoluteChange: estimateAbsoluteChange(sectionValues),
          relativeChange: estimateRelativeChange(sectionValues),
          weight: estimateWeight(sectionValues, balanceTotal)
        }

        indicators.push(analyticalSection);
      }

      section.data.forEach(row => {
        let rowValues = row.values.reverse();

        if (!rowValues.every(el => el === 0)) {
          let analyticalRow: IAnalyticalBalanceIndicator = {
            id: row.code,
            name: row.name,
            values: rowValues,
            absoluteChange: estimateAbsoluteChange(rowValues),
            relativeChange: estimateRelativeChange(rowValues),
            weight: estimateWeight(rowValues, balanceTotal)
          }

          indicators.push(analyticalRow)
        }
      });
    });
  });

  let analyticalBalance = {
    indicators,
    balanceTotal: {
      values: balanceTotal,
      absoluteChange: estimateAbsoluteChange(balanceTotal),
      relativeChange: estimateRelativeChange(balanceTotal),
    }
  }

  return analyticalBalance;
}

function estimateAbsoluteChange(values: number[]): number[] {
  let result: number[] = [0];
  for (let i = 1; i < values.length; i++) {
    result.push(values[i] - values[i - 1]);
  }
  return result;
}

function estimateRelativeChange(values: number[]): number[] {
  let result: number[] = [0];
  for (let i = 1; i < values.length; i++) {
    result.push((values[i] / values[i - 1]) - 1);
  }
  return result;
}

function estimateWeight(values: number[], total: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < values.length; i++) {
    result.push((values[i] / total[i]));
  }
  return result;
}