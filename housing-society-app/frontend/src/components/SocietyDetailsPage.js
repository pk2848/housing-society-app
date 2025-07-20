import React from 'react';

function SocietyDetailsPage({ society }) {
  // Using dummy data if society prop is not provided for standalone testing
  const dummySociety = {
    id: 1,
    name: 'Green Valley',
    location: 'Delhi',
    flats: 80,
    // Add more details here as needed, e.g., address, contact, etc.
  };

  const societyData = society || dummySociety;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Society Details</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-700">Name:</p>
          <p className="mt-1 text-lg text-gray-900">{societyData.name}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Location:</p>
          <p className="mt-1 text-lg text-gray-900">{societyData.location}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Number of Flats:</p>
          <p className="mt-1 text-lg text-gray-900">{societyData.flats}</p>
        </div>
        {/* Add more details here with similar structure */}
      </div>
    </div>
  );
}

export default SocietyDetailsPage;
