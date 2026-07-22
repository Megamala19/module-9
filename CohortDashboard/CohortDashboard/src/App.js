import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { name: 'React Fundamentals - Batch 12', status: 'ongoing', startDate: '2026-06-01', trainer: 'Alice Johnson' },
  { name: 'Spring Boot Microservices - Batch 7', status: 'completed', startDate: '2026-04-15', trainer: 'Brian Lee' },
  { name: 'DevOps Essentials - Batch 3', status: 'ongoing', startDate: '2026-07-01', trainer: 'Carla Mendes' }
];

function App() {
  return (
    <div>
      <h1>Cognizant Academy — Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
