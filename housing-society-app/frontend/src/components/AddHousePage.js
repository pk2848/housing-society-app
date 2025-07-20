import React, { useState } from "react";

const AddHousePage = () => {
  const [formData, setFormData] = useState({ houseNo: "", owner: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`House added: ${formData.houseNo} owned by ${formData.owner}`);
    setFormData({ houseNo: "", owner: "" });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New House</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="houseNo" className="block text-sm font-medium text-gray-700">House Number</label>
          <input
            type="text"
            id="houseNo"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleChange}
            placeholder="Enter House Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700">Owner Name</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            placeholder="Enter Owner Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add House
        </button>
      </form>
    </div>
  );
};

export default AddHousePage;