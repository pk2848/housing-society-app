import React, { useState } from 'react';
import SocietyList from './SocietyList';
import SocietyDetailsPage from './SocietyDetailsPage';

const dummySocieties = [
  { id: 1, name: 'Green Valley', location: 'Delhi', flats: 80 },
  { id: 2, name: 'Sunrise Apartments', location: 'Pune', flats: 120 },
];

const SocietyListPage = () => {
  const [selectedSociety, setSelectedSociety] = useState(null);

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r">
        <SocietyList societies={dummySocieties} onSelect={setSelectedSociety} />
      </div>
      <div className="w-2/3 p-4">
        {selectedSociety ? (
          <SocietyDetailsPage society={selectedSociety} />
        ) : (
          <p>Select a society to view details.</p>
        )}
      </div>
    </div>
  );
};

export default SocietyListPage;
