import React from 'react';
import PropertyStructureTable from './PropertyStructureTable/PropertyStructureTable';
import { IPropertyStructure } from '../../../../context/interfaces';

interface PropertyStructureProps {
  propertyStructure: IPropertyStructure | undefined,
  analyticalPeriod: {
    start: number,
    end: number
  }
}

const PropertyStructure: React.FC<PropertyStructureProps> = ({ propertyStructure, analyticalPeriod }) => {

  if (!propertyStructure) {
    return <></>;
  }

  return (
    <div className="card p-4 mb-3">
      <h3>Структура имущества и источники его формирования</h3>
      <PropertyStructureTable propertyStructure={propertyStructure} analyticalPeriod={analyticalPeriod} />
    </div>
  );
}

export default PropertyStructure;