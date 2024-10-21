import React from 'react';
import '../styles/EmployeeFilter.css';

const EmployeeFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="employee-filter">
      <button
        className={`filter-button all ${currentFilter === 'All' ? 'active' : ''}`}
      >
        All
      </button>
      <button
        className={`filter-button active ${currentFilter === 'Active' ? 'active' : ''}`}

      >
        Active
      </button>
      <button
        className={`filter-button inactive ${currentFilter === 'Inactive' ? 'active' : ''}`}
      >
        Inactive
      </button>
    </div>
  );
};

export default EmployeeFilter;
