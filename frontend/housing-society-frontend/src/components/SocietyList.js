import React from 'react';

function SocietyList() {
  // Placeholder data for society list
  const societies = ['Shyam Park', 'Pavan City'];

  return (
    <div style={{ width: '200px', backgroundColor: '#f8f9fa', padding: '10px' }}>
      <h2>Society List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {societies.map((society, index) => (
          <li key={index} style={{ marginBottom: '5px', cursor: 'pointer' }}>
            {society}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocietyList;
