import { IBalanceState, IFinStability, IFinStabilityIndicator } from '../interfaces';
import { getValuesByCode } from '../balance/balanceStateData';

export const FIN_STABILITY_INDICATORS = {
  AUTONOMY_RATIO: 3000,                     // Коэффициент автономии
  DEBT_RATIO: 3100,                         // Коэффициент финансового левериджа
  EQUITY_RATIO: 3200,                       // Коэффициент обеспеченности собственными оборотными средствами
  PERMANENT_ASSET_INDEX: 3300,              // Индекс постоянного актива
  INVESTMENT_COVERAGE_RATIO: 3400,          // Коэффициент покрытия инвестиций
  CURRENT_ASSETS_TO_EQUITY_RATIO: 3500,     // Коэффициент маневренности собственного капитала
  PROPERTY_MOBILITY_RATIO: 3600,            // Коэффициент мобильности имущества
  WORKING_CAPITAL_MOBILITY_RATIO: 3700,     // Коэффициент мобильности оборотных средств
  SUPPLY_RATIO: 3800,                       // Коэффициент обеспеченности запасов
  SHORT_TERM_DEBT_RATIO: 3900               // Коэффициент краткосрочной задолженности 
}

export default function prepareFinStability(state: IBalanceState): IFinStability {

  // собственный капитал/ источники собственных средств стр 1300
  const equity: number[] = getValuesByCode(state.balance, 1300);

  // общий капитал стр 1600 или стр 1700
  const capital: number[] = getValuesByCode(state.balance, 1600);

  // Внеоборотные активы стр 1100
  const fixedAssets: number[] = getValuesByCode(state.balance, 1100);

  // Оборотные средства/активы стр 1200
  const currentAssets: number[] = getValuesByCode(state.balance, 1200);

  // Краткосрочные обязательства стр 1500
  const shortTermLiabilities: number[] = getValuesByCode(state.balance, 1500);

  // Собственные оборотные средства - COC (working capital) = оборотные активы - краткосрочные обязательства
  const workingCapital: number[] = subtractArrays(currentAssets, shortTermLiabilities);

  // Долгосрочные обязательства стр 1400
  const longTermLiabilities: number[] = getValuesByCode(state.balance, 1400);

  // Денежные cредства и фин. вложения стр 1250
  const cashAndCashEquivalents: number[] = getValuesByCode(state.balance, 1250);

  // Запасы стр 1210
  const inventories: number[] = getValuesByCode(state.balance, 1210);

  // заемный капитал стр 1400 + стр 1500
  const loanCapital: number[] = sumArrays(longTermLiabilities, shortTermLiabilities);

  let autonomyRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.AUTONOMY_RATIO,
    name: 'Коэффициент автономии',
    values: divideArrays(equity, capital), // собств.кап/общий кап
    description: 'Отношение наиболее мобильной части оборотных средств (денежных средств и финансовых вложений) к общей стоимости оборотных активов.'
  }

  let debtRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.DEBT_RATIO,
    name: 'Коэффициент финансового левериджа',
    values: divideArrays(loanCapital, equity),
    description: 'Отношение заемного капитала к собственному.'
  }

  let equityRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.EQUITY_RATIO,
    name: 'Коэффициент обеспеченности собственными оборотными средствами',
    values: divideArrays(workingCapital, currentAssets), // СОС / оборотные активы
    description: 'Отношение собственных оборотных средств к оборотным активам.'
  }

  let permanentAssetIndex: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.PERMANENT_ASSET_INDEX,
    name: 'Индекс постоянного актива',
    values: divideArrays(fixedAssets, equity), // внеоб.активы/собств.кап
    description: 'Отношение стоимости внеоборотных активов к величине собственного капитала организации.'
  }

  let investmentCoverageRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.INVESTMENT_COVERAGE_RATIO,
    name: 'Коэффициент покрытия инвестиций',
    values: divideArrays(sumArrays(equity, longTermLiabilities), capital), // (собств.кап + долгосрочн.обяз) / общий капитал
    description: 'Отношение собственного капитала и долгосрочных обязательств к общей сумме капитала.'
  }

  let currentAssetsToEquityRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.CURRENT_ASSETS_TO_EQUITY_RATIO,
    name: 'Коэффициент маневренности собственного капитала',
    values: divideArrays(workingCapital, equity), // СОС / источники собств.средств
    description: 'Отношение собственных оборотных средств к источникам собственных средств.'
  }

  let propertyMobilityRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.PROPERTY_MOBILITY_RATIO,
    name: 'Коэффициент мобильности имущества',
    values: divideArrays(currentAssets, sumArrays(currentAssets, fixedAssets)), // Оборотные средства / (оборот.активы + внеоборот.активы)
    description: 'Отношение оборотных средств к стоимости всего имущества. Характеризует отраслевую специфику организации.'
  }

  let workingCapitalMobilityRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.WORKING_CAPITAL_MOBILITY_RATIO,
    name: 'Коэффициент мобильности оборотных средств',
    values: divideArrays(cashAndCashEquivalents, currentAssets), // ден.средства / оборот.активы
    description: 'Отношение наиболее мобильной части оборотных средств (денежных средств и финансовых вложений) к общей стоимости оборотных активов.'
  }

  let supplyRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.SUPPLY_RATIO,
    name: 'Коэффициент обеспеченности запасов',
    values: divideArrays(workingCapital, inventories), //  СОС / Запасы
    description: 'Отношение собственных оборотных средств к стоимости запасов.'
  }

  let shortTermDebtRatio: IFinStabilityIndicator = {
    id: FIN_STABILITY_INDICATORS.SHORT_TERM_DEBT_RATIO,
    name: 'Коэффициент краткосрочной задолженности',
    values: divideArrays(shortTermLiabilities, sumArrays(shortTermLiabilities, longTermLiabilities)), // Краткосрочн.обяз / (Краткосрочн.обяз + долгосрочн.обяз)
    description: 'Отношение краткосрочной задолженности к общей сумме задолженности.'
  }

  let result: IFinStability = {
    indicators: [autonomyRatio, debtRatio, equityRatio, permanentAssetIndex, investmentCoverageRatio, currentAssetsToEquityRatio, propertyMobilityRatio, workingCapitalMobilityRatio, supplyRatio, shortTermDebtRatio]
  }

  return result;
}

function sumArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}

function subtractArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] - arr2[i]);
  }
  return result;
}

function divideArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] / arr2[i]);
  }
  return result;
}