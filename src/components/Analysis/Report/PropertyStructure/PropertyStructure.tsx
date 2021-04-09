import React from 'react';
import PropertyStructureTable from './PropertyStructureTable/PropertyStructureTable';

const PropertyStructure: React.FC = () => {
  return (
    <div className="card p-4 mb-3">
      <h3>Структура имущества и источники его формирования</h3>
      <PropertyStructureTable />
    </div>
  );
}

export default PropertyStructure;