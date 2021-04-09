import { calculateBalanceTotals } from './balanceStateData';
import { IBalanceState } from '../interfaces';

export default function getExampleState(): IBalanceState {
  return {
    companyName: 'ООО "ОБРАЗЕЦ"',
    analysisPeriod: {
      start: 2017,
      end: 2019
    },
    balance: calculateBalanceTotals({
      active: {
        sections: [
          {
            id: "I",
            name: "ВНЕОБОРОТНЫЕ АКТИВЫ",
            data: [
              {
                name: "Нематериальные активы",
                code: 1110,
                values: [0, 0, 0]
              },
              {
                name: "Результаты исследований и разработок",
                code: 1120,
                values: [0, 0, 0]
              },
              {
                name: "Нематериальные поисковые активы",
                code: 1130,
                values: [0, 0, 0]
              },
              {
                name: "Материальные поисковые активы",
                code: 1140,
                values: [0, 0, 0]
              },
              {
                name: "Основные средства",
                code: 1150,
                values: [10716, 10462, 7612]
              },
              {
                name: "Доходные вложения в материальные ценности",
                code: 1160,
                values: [0, 0, 0]
              },
              {
                name: "Финансовые вложения",
                code: 1170,
                values: [72, 72, 72]
              },
              {
                name: "Отложенные налоговые активы",
                code: 1180,
                values: [0, 0, 0]
              },
              {
                name: "Прочие внеоборотные активы",
                code: 1190,
                values: [0, 0, 0]
              },
            ],
            total: {
              code: 1100,
              values: [0, 0, 0]
            }
          },
          {
            id: "II",
            name: "ОБОРОТНЫЕ АКТИВЫ",
            data: [
              {
                name: "Запасы",
                code: 1210,
                values: [35, 53, 53]
              },
              {
                name: "Налог на добавленную стоимость по приобретенным ценностям",
                code: 1220,
                values: [0, 0, 0]
              },
              {
                name: "Дебиторская задолженность",
                code: 1230,
                values: [7608, 5599, 4653]
              },
              {
                name: "Финансовые вложения (за исключением денежных эквивалентов)",
                code: 1240,
                values: [0, 0, 0]
              },
              {
                name: "Денежные средства и денежные эквиваленты",
                code: 1250,
                values: [570, 1874, 365]
              },
              {
                name: "Прочие оборотные активы",
                code: 1260,
                values: [5, 10, 126]
              },
            ],
            total: {
              code: 1200,
              values: [0, 0, 0]
            }
          }
        ],
        total: {
          code: 1600,
          values: [0, 0, 0]
        }
      },
      passive: {
        sections: [
          {
            id: "III",
            name: "КАПИТАЛ И РЕЗЕРВЫ",
            data: [
              {
                name: "Уставный капитал (складочный капитал, уставный фонд, вклады товарищей)",
                code: 1310,
                values: [96, 96, 96]
              },
              {
                name: "Собственные акции, выкупленные у акционеров",
                code: 1320,
                values: [0, 0, 0]
              },
              {
                name: "Переоценка внеоборотных активов",
                code: 1340,
                values: [3697, 3697, 3697]
              },
              {
                name: "Добавочный капитал (без переоценки)",
                code: 1350,
                values: [0, 0, 0]
              },
              {
                name: "Резервный капитал",
                code: 1360,
                values: [0, 0, 0]
              },
              {
                name: "Нераспределенная прибыль (непокрытый убыток)",
                code: 1370,
                values: [7181, 6627, 5113]
              },
            ],
            total: {
              code: 1300,
              values: [0, 0, 0]
            }
          },
          {
            id: "IV",
            name: "ДОЛГОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА",
            data: [
              {
                name: "Заемные средства",
                code: 1410,
                values: [0, 0, 0]
              },
              {
                name: "Отложенные налоговые обязательства",
                code: 1420,
                values: [0, 0, 0]
              },
              {
                name: "Оценочные обязательства",
                code: 1430,
                values: [0, 0, 0]
              },
              {
                name: "Прочие долгосрочные обязательства",
                code: 1450,
                values: [0, 0, 0]
              },
            ],
            total: {
              code: 1400,
              values: [0, 0, 0]
            }
          },
          {
            id: "V",
            name: "КРАТКОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА",
            data: [
              {
                name: "Заемные средства",
                code: 1510,
                values: [340, 5940, 733]
              },
              {
                name: "Кредиторская задолженность",
                code: 1520,
                values: [1126, 1091, 2394]
              },
              {
                name: "Доходы будущих периодов",
                code: 1530,
                values: [1066, 619, 848]
              },
              {
                name: "Оценочные обязательства",
                code: 1540,
                values: [0, 0, 0]
              },
              {
                name: "Прочие краткосрочные обязательства",
                code: 1550,
                values: [5500, 0, 0]
              },
            ],
            total: {
              code: 1500,
              values: [0, 0, 0]
            }
          }
        ],
        total: {
          code: 1700,
          values: [0, 0, 0]
        }
      }
    }),
    isReportDone: false,
    report: undefined
  }
}