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
  let newValues = [...values].reverse();
  let newTotal = [...total].reverse();

  return {
    name,
    values: newValues,
    weight: {
      start: newValues[0] / newTotal[0],
      end: newValues[newValues.length - 1] / newTotal[newTotal.length - 1]
    },
    change: {
      absolute: newValues[newValues.length - 1] - newValues[0],
      relative: (newValues[newValues.length - 1] - newValues[0]) / newValues[0]
    }
  }
}