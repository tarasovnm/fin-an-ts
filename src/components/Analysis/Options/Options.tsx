import React, { useContext } from 'react';
import { BalanceContext } from '../../../context/balanceContext';
import { IBalanceContextInterface } from '../../../context/interfaces';
import Period from './Period/Period';

const Options: React.FC = () => {

  const { companyName, period, companyNameChanged, changePeriodStart, changePeriodEnd, clearInputData, enterExampleData } = useContext(BalanceContext) as IBalanceContextInterface;

  const onCompanyNameChanged = (e: any) => {
    companyNameChanged(e.target.value);
  }

  return (
    <div className="card p-4 mb-3">

      <div className="mb-2 row">
        <label className="col-sm-4 col-form-label" htmlFor="name">Наименование организации:</label>
        <div className="col-sm-8">
          <input className="form-control" type="text" id="name" value={companyName} onChange={onCompanyNameChanged} />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label" htmlFor="name">Анализируемый период:</label>
        <div className="col-sm-8">
          <Period period={period} changePeriodStart={changePeriodStart} changePeriodEnd={changePeriodEnd} />
        </div>
      </div>

      <div>
        <button className="btn btn-primary mr-2" onClick={clearInputData}>Очистить</button>
        <button className="btn btn-outline-secondary" onClick={enterExampleData}>Загрузить данные организации-примера</button>
      </div>
    </div>
  );
}

export default Options;