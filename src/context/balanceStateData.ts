import { IBalanceTableState } from './interfaces';

export function createBalanceState(startYear: number, endYear: number) {
  const initialValues = [1, 1, 1];

  return {
    active: {
      sections: [
        {
          id: "I",
          name: "ВНЕОБОРОТНЫЕ АКТИВЫ",
          data: [
            {
              name: "Нематериальные активы",
              code: 1110,
              values: [...initialValues]
            },
            {
              name: "Результаты исследований и разработок",
              code: 1120,
              values: [...initialValues]
            },
            {
              name: "Нематериальные поисковые активы",
              code: 1130,
              values: [...initialValues]
            },
            {
              name: "Материальные поисковые активы",
              code: 1140,
              values: [...initialValues]
            },
            {
              name: "Основные средства",
              code: 1150,
              values: [...initialValues]
            },
            {
              name: "Доходные вложения в материальные ценности",
              code: 1160,
              values: [...initialValues]
            },
            {
              name: "Финансовые вложения",
              code: 1170,
              values: [...initialValues]
            },
            {
              name: "Отложенные налоговые активы",
              code: 1180,
              values: [...initialValues]
            },
            {
              name: "Прочие внеоборотные активы",
              code: 1190,
              values: [...initialValues]
            },
          ],
          total: {
            code: 1100,
            values: [...initialValues]
          }
        },
        {
          id: "II",
          name: "ОБОРОТНЫЕ АКТИВЫ",
          data: [
            {
              name: "Запасы",
              code: 1210,
              values: [...initialValues]
            },
            {
              name: "Налог на добавленную стоимость по приобретенным ценностям",
              code: 1220,
              values: [...initialValues]
            },
            {
              name: "Дебиторская задолженность",
              code: 1230,
              values: [...initialValues]
            },
            {
              name: "Финансовые вложения (за исключением денежных эквивалентов)",
              code: 1240,
              values: [...initialValues]
            },
            {
              name: "Денежные средства и денежные эквиваленты",
              code: 1250,
              values: [...initialValues]
            },
            {
              name: "Прочие оборотные активы",
              code: 1260,
              values: [...initialValues]
            },
          ],
          total: {
            code: 1200,
            values: [...initialValues]
          }
        }
      ],
      total: {
        code: 1600,
        values: [...initialValues]
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
              values: [...initialValues]
            },
            {
              name: "Собственные акции, выкупленные у акционеров",
              code: 1320,
              values: [...initialValues]
            },
            {
              name: "Переоценка внеоборотных активов",
              code: 1340,
              values: [...initialValues]
            },
            {
              name: "Добавочный капитал (без переоценки)",
              code: 1350,
              values: [...initialValues]
            },
            {
              name: "Резервный капитал",
              code: 1360,
              values: [...initialValues]
            },
            {
              name: "Нераспределенная прибыль (непокрытый убыток)",
              code: 1370,
              values: [...initialValues]
            },
          ],
          total: {
            code: 1300,
            values: [...initialValues]
          }
        },
        {
          id: "IV",
          name: "ДОЛГОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА",
          data: [
            {
              name: "Заемные средства",
              code: 1410,
              values: [...initialValues]
            },
            {
              name: "Отложенные налоговые обязательства",
              code: 1420,
              values: [...initialValues]
            },
            {
              name: "Оценочные обязательства",
              code: 1430,
              values: [...initialValues]
            },
            {
              name: "Прочие долгосрочные обязательства",
              code: 1450,
              values: [...initialValues]
            },
          ],
          total: {
            code: 1400,
            values: [...initialValues]
          }
        },
        {
          id: "V",
          name: "КРАТКОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА",
          data: [
            {
              name: "Заемные средства",
              code: 1510,
              values: [...initialValues]
            },
            {
              name: "Кредиторская задолженность",
              code: 1520,
              values: [...initialValues]
            },
            {
              name: "Доходы будущих периодов",
              code: 1530,
              values: [...initialValues]
            },
            {
              name: "Оценочные обязательства",
              code: 1540,
              values: [...initialValues]
            },
            {
              name: "Прочие краткосрочные обязательства",
              code: 1550,
              values: [...initialValues]
            },
          ],
          total: {
            code: 1500,
            values: [...initialValues]
          }
        }
      ],
      total: {
        code: 1700,
        values: [...initialValues]
      }
    }
  }
}

export function changeStartColumn(balance: IBalanceTableState, delta: number) {
  if (delta > 0) {
    // Убрать последний столбец
    console.log('Убираем последний столбец------------------------------------');
    changeValuesArray(balance, popArr);
  } else {
    // Добавить столбец сзади
    console.log('Добавляем последний столбец------------------------------------');
    changeValuesArray(balance, pushArr);
  }
  return balance;
}

export function changeEndColumn(balance: IBalanceTableState, delta: number) {
  if (delta > 0) {
    // Добавить столбец спереди
    console.log('Добавляем столбец спереди------------------------------------');
    changeValuesArray(balance, unshiftArr);
  } else {
    // Убрать первый столбец
    console.log('Убираем первый столбец------------------------------------');
    changeValuesArray(balance, shiftArr);
  }
  return balance;
}

function changeValuesArray(balance: IBalanceTableState, fn: (arr: number[]) => void) {
  console.log('Вызвана функция изменения таблицы баланса', balance);

  Object.keys(balance).forEach(part => {
    balance[part].sections.forEach(section => {
      section.data.forEach(row => {
        console.log(row.values.length);
        row.values = [...row.values];
        fn(row.values);
        console.log(row.values.length);
      });
      fn(section.total.values);
    });
    fn(balance[part].total.values);
  });
}

function popArr(arr: number[]) {
  // console.log('Убираем последний элемент массива');
  arr.pop();
}

function pushArr(arr: number[]) {
  // console.log('Добавляем в конец массива 0');
  arr.push(0);
}

function shiftArr(arr: number[]) {
  // console.log('Убираем первый элемент массива');
  arr.shift();
}

function unshiftArr(arr: number[]) {
  // console.log('Добавляем в начало массива 0');
  arr.unshift(0);
}

export function changeCellValue(balance: IBalanceTableState, code: string, index: string, value: string) {

  let newBalance: IBalanceTableState = { ...balance };
  const keys: string[] = Object.keys(newBalance);

  keys.forEach((part) => {
    newBalance[part].sections.forEach(section => {
      section.data.forEach(row => {
        if (row.code === parseInt(code)) {
          row.values = [...row.values];
          row.values[parseInt(index)] = parseInt(value);
        }
      });
      console.log('зашли циклом в часть')
    });
  });

  return calculateBalanceTotals(newBalance);
}

export function calculateBalanceTotals(balance: IBalanceTableState) {
  const keys: string[] = Object.keys(balance);

  keys.forEach(part => {
    let partTotal: number[] = [];
    balance[part].sections.forEach(section => {
      let total: number[] = [];
      section.data.forEach(row => {
        row.values.forEach((val, idx) => {
          total[idx] = !total[idx] ? val : total[idx] + val;
        });
      });
      section.total.values = total;

      section.total.values.forEach((val, idx) => {
        partTotal[idx] = !partTotal[idx] ? val : partTotal[idx] + val;
      });
    });

    balance[part].total.values = partTotal;
  });

  return balance;
}