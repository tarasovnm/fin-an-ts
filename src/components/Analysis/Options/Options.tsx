import React, { useContext } from 'react';
import { BalanceContext } from '../../../context/balanceContext';
import Period from './Period/Period';

const Options: React.FC = () => {

  const context = useContext(BalanceContext);

  return (
    <div className="card p-4 mb-3">

      <div className="mb-2 row">
        <label className="col-sm-4 col-form-label" htmlFor="name">Наименование организации:</label>
        <div className="col-sm-8">
          <input className="form-control" type="text" id="name" />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label" htmlFor="name">Анализируемый период:</label>
        <div className="col-sm-8">
          <Period {...context} />
        </div>
      </div>

      <div>
        <button className="btn btn-primary mr-2">Очистить</button>
        <button className="btn btn-outline-secondary">Загрузить данные организации-примера</button>
      </div>
    </div>
  );
}

export default Options;