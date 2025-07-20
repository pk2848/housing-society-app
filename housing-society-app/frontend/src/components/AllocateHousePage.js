import React, { useState } from 'react';

function AllocateHousePage() {
  const [allocationData, setAllocationData] = useState({
    houseNumber: '',
    memberName: '',
  });

  const handleChange = (e) => {
    setAllocationData({ ...allocationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`House ${allocationData.houseNumber} allocated to ${allocationData.memberName}`);
    setAllocationData({ houseNumber: '', memberName: '' });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Allocate House</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700">House Number</label>
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={allocationData.houseNumber}
            onChange={handleChange}
            placeholder="Enter House Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="memberName" className="block text-sm font-medium text-gray-700">Member Name</label>
          <input
            type="text"
            id="memberName"
            name="memberName"
            value={allocationData.memberName}
            onChange={handleChange}
            placeholder="Enter Member Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Allocate House
        </button>
      </form>
    </div>
  );
}

export default AllocateHousePage;