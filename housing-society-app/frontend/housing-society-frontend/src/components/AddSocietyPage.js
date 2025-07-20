import React, { useState } from "react";

const AddSocietyPage = () => {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to add the society
    console.log('New society data:', formData);
    alert(`Society added: ${formData.name}`);
    setFormData({ address: '', name: '' }); // Clear form after submission
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Society</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="societyName" className="block text-sm font-medium text-gray-700">Society Name</label>
          <input
            type="text"
            id="societyName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Society Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="societyAddress" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="societyAddress"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Society Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add Society
        </button>
      </form>
    </div>
  );
};

export default AddSocietyPage;
