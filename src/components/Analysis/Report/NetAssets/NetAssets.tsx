import React from 'react';
import NetAssetsTable from './NetAssetsTable/NetAssetsTable';
import { INetAssets } from '../../../../context/interfaces';

interface NetAssetsProps {
  netAssets: INetAssets | undefined,
  analyticalPeriod: {
    start: number,
    end: number
  }
}

const NetAssets: React.FC<NetAssetsProps> = ({ netAssets, analyticalPeriod }) => {
  if (!netAssets) {
    return <></>;
  }

  return (
    <div className="card p-4 mb-3">
      <h3>Чистые активы организации</h3>
      <NetAssetsTable netAssets={netAssets} analyticalPeriod={analyticalPeriod} />
    </div>
  );
}

export default NetAssets;