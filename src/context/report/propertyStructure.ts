import { IBalanceState, IPropertyStructure } from '../interfaces';
import { valuesAndChangeRow } from './utils';

export default function preparePropertyStructure(state: IBalanceState): IPropertyStructure {

  const balance = state.balance;
  const balanceTotal = [...state.balance.active.total.values];

  let propertyStructure: IPropertyStructure = {
    active: [],
    passive: [],
    balanceTotal: valuesAndChangeRow('Валюта баланса', balanceTotal, balanceTotal)
  }

  Object.keys(balance).forEach(part => {
    balance[part].sections.forEach(section => {
      let propertyStructurePart = part === 'active' ? propertyStructure.active : propertyStructure.passive;
      propertyStructurePart.push(valuesAndChangeRow(section.id + ' ' + section.name, section.total.values, balanceTotal));
    });
  });

  return propertyStructure;
}