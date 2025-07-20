import React from 'react';

const HouseListPage = () => {
  const houses = [
    { number: 'A-101', owner: 'Ravi Kumar', status: 'Occupied' },
    { number: 'B-202', owner: 'Sunita Sharma', status: 'Vacant' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Houses</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">House No</th>
            <th className="border px-4 py-2">Owner</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{house.number}</td>
              <td className="border px-4 py-2">{house.owner}</td>
              <td className="border px-4 py-2">{house.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseListPage;