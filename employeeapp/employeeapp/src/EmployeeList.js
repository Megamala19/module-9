import React from 'react';
import EmployeeCard from './EmployeeCard';
import employees from './employees';

// Theme name is no longer received or passed down as a prop —
// EmployeeCard reads it directly from ThemeContext.
function EmployeeList() {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
