import React from 'react';

const HouseDetailsPage = () => {
  const house = {
    number: 'A-101',
    owner: 'Rajeev',
    members: ['Rajeev', 'Neha', 'Kunal']
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">House Details</h2>
      <p><strong>House Number:</strong> {house.number}</p>
      <p><strong>Owner:</strong> {house.owner}</p>
      <p><strong>Members:</strong></p>
      <ul className="list-disc pl-5">
        {house.members.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
};

export default HouseDetailsPage;
