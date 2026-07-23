import React from 'react';

const flights = [
  { flightNo: 'AI-202', from: 'Delhi', to: 'Mumbai', time: '08:30 AM' },
  { flightNo: 'AI-305', from: 'Mumbai', to: 'Bengaluru', time: '11:00 AM' },
  { flightNo: 'AI-410', from: 'Bengaluru', to: 'Chennai', time: '02:15 PM' }
];

function GuestPage() {
  return (
    <div>
      <h2>Available Flights</h2>
      <p>Please log in to book a ticket.</p>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.flightNo}: {flight.from} → {flight.to} at {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestPage;
