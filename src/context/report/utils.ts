import { IValuesAndChange } from '../interfaces';

export function valuesAndChangeRow(name: string, values: number[], total: number[]): IValuesAndChange {
  return {
    name,
    values,
    weight: {
      start: values[0] / total[0],
      end: values[values.length - 1] / total[total.length - 1]
    },
    change: {
      absolute: values[values.length - 1] - values[0],
      relative: (values[values.length - 1] - values[0]) / values[0]
    }
  }
}