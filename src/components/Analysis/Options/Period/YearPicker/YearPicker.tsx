import React from 'react';

const YearPicker: React.FC = () => {
  // https://o7planning.org/12391/bootstrap-input-group
  return (
    <div>
      <div className="input-group input-group-sm">

        <div className="input-group-prepend">
          <button className="btn btn-outline-primary" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
        </div>

        {/* <input type="text" className="form-control" /> */}
        <span className="input-group-text bg-white">2019</span>

        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default YearPicker;