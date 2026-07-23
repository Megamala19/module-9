import React from 'react';

// Object representing a single office space.
const office = {
  name: 'Downtown Executive Suite',
  rent: 75000,
  address: '12 Business Park Road, Bengaluru'
};

// List of office space objects to loop through.
const officeList = [
  { name: 'Downtown Executive Suite', rent: 75000, address: '12 Business Park Road, Bengaluru' },
  { name: 'Riverside Co-working Hub', rent: 45000, address: '4 River View Lane, Pune' },
  { name: 'Tech Park Tower', rent: 92000, address: '8 Innovation Ave, Hyderabad' },
  { name: 'Old Town Studio', rent: 28000, address: '21 Heritage Street, Chennai' }
];

// Inline CSS style object for the main image.
const imageStyle = {
  width: '400px',
  height: '250px',
  borderRadius: '8px',
  border: '2px solid #444'
};

function getRentColor(rent) {
  return rent < 60000 ? 'red' : 'green';
}

function App() {
  return (
    <div>
      {/* Element to display the heading of the page */}
      <h1>Office Space Rental</h1>

      {/* Attribute (src) to display the image of the office space, with inline CSS */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
        alt="Office space"
        style={imageStyle}
      />

      {/* Object rendering: single featured office */}
      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={{ color: getRentColor(office.rent) }}>₹{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      {/* List of objects rendering: loop through office space items */}
      <h2>All Available Offices</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> — Rent:{' '}
            <span style={{ color: getRentColor(item.rent) }}>₹{item.rent}</span> — {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
