import React from 'react';
import NetAssetsTable from './NetAssetsTable/NetAssetsTable';

const NetAssets: React.FC = () => {
  return (
    <div className="card p-4 mb-3">
      <h3>Чистые активы организации</h3>
      <NetAssetsTable />
    </div>
  );
}

export default NetAssets;