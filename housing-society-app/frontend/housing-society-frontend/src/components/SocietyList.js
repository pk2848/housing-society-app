import React from 'react';

const SocietyList = ({ societies, onSelect }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Societies</h2>
      <ul className="divide-y divide-gray-200">
        {societies.map((society, index) => (
          <li
            key={society.id}
            onClick={() => onSelect(society)}
            className={`px-4 py-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
          >
            <div className="flex-1 flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {society.name.charAt(0)}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{society.name}</div>
                <div className="text-sm text-gray-500">{society.location}</div>
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <p className="text-sm text-gray-900">{society.flats} Flats</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocietyList;
