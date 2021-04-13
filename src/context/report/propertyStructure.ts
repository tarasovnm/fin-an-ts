import { IBalanceState, IPropertyStructure, IPropertyStructureRow } from '../interfaces';

export default function preparePropertyStructure(state: IBalanceState): IPropertyStructure {

  const balance = state.balance;
  const balanceTotal = [...state.balance.active.total.values];

  let propertyStructure: IPropertyStructure = {
    active: [],
    passive: [],
    balanceTotal: valuesToPropertyStructureRow('Валюта баланса', balanceTotal, balanceTotal)
  }

  Object.keys(balance).forEach(part => {
    balance[part].sections.forEach(section => {
      let propertyStructurePart = part === 'active' ? propertyStructure.active : propertyStructure.passive;
      propertyStructurePart.push(valuesToPropertyStructureRow(section.id + ' ' + section.name, section.total.values, balanceTotal));
    });
  });

  return propertyStructure;
}

function valuesToPropertyStructureRow(name: string, values: number[], total: number[]): IPropertyStructureRow {
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