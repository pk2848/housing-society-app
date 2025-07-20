import React from 'react';

const SocietyList = ({ societies, onSelect }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Society List</h2>
      <ul className="space-y-2">
        {societies.map((society, index) => (
          <li
            key={index}
            onClick={() => onSelect(society)}
            className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            {society.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocietyList;
