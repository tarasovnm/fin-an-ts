import { IBalanceState } from '../interfaces';

export const FIN_STABILITY_INDICATORS = {
  AUTONOMY_RATION: 2000,                    // Коэффициент автономии
  DEBT_RATION: 2100,                        // Коэффициент финансового левериджа
  EQUITY_RATIO: 2200,                       // Коэффициент обеспеченности собственными оборотными средствами
  PERMANENT_ASSET_INDEX: 2300,              // Индекс постоянного актива
  INVESTMENT_COVERAGE_RATIO: 2400,          // Коэффициент покрытия инвестиций
  CURRENT_ASSETS_TO_EQUITY_RATIO: 2500,     // Коэффициент маневренности собственного капитала
  PROPERTY_MOBILITY_RATIO: 2600,            // Коэффициент мобильности имущества
  WORKING_CAPITAL_MOBILITY_RATIO: 2700,     // Коэффициент мобильности оборотных средств
  SUPPLY_RATIO: 2800,                       // Коэффициент обеспеченности запасов
  SHORT_TERM_DEBT_RATIO: 2900               // Коэффициент краткосрочной задолженности 
}

export default function prepareFinStability(state: IBalanceState) {
  console.log('Preparing Fin Stability report');

  // собственный капитал
  const equity = 0;
  // заемный капитал
  const loanCapital = 0;
  // общий капитал
  const capital = 0;

  // Оборотные средства

  // Собственные оборотные средства

  // Оборотные активы

  // Краткосрочные обязательства

  // Внеоборотные активы

  // Долгосрочные обязательства

  // Источники собственных средств

  // Денежные cредства и фин. вложения

  // Запасы

}