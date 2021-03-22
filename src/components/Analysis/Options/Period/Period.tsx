import React from 'react';
import YearPicker from './YearPicker/YearPicker';

const Period: React.FC = () => {

  return (
    <div className="row px-3">
      <YearPicker />
      <div className="d-flex align-items-center px-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </div>
      <YearPicker />
    </div>
  );
}

export default Period;