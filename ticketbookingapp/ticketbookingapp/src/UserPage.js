import React from 'react';

const flights = [
  { flightNo: 'AI-202', from: 'Delhi', to: 'Mumbai', time: '08:30 AM' },
  { flightNo: 'AI-305', from: 'Mumbai', to: 'Bengaluru', time: '11:00 AM' },
  { flightNo: 'AI-410', from: 'Bengaluru', to: 'Chennai', time: '02:15 PM' }
];

function UserPage() {
  return (
    <div>
      <h2>Book Your Flight</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.flightNo}: {flight.from} → {flight.to} at {flight.time}{' '}
            <button onClick={() => alert(`Ticket booked for ${flight.flightNo}`)}>
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
