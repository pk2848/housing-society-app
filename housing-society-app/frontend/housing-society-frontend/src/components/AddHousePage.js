import React, { useState } from 'react';
import axios from 'axios';

function AddHousePage() {
  const [formData, setFormData] = useState({
    // Add fields based on your backend House model
    address: '',
    numberOfRooms: '',
    // Add other house fields
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/houses', formData);
      setMessage('House added successfully!');
      console.log('House added:', response.data);
      // Optionally clear the form or redirect
      setFormData({
        address: '',
        numberOfRooms: '',
        // Reset other fields
      });
    } catch (error) {
      setMessage('Failed to add house.');
      console.error('Error adding house:', error);
      // Handle error (e.g., display specific error message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-center">Add New House</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="address">Address</label>
            <input type="text" placeholder="Address" name="address" onChange={handleInputChange} value={formData.address} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="numberOfRooms">Number of Rooms</label>
            <input type="number" placeholder="Number of Rooms" name="numberOfRooms" onChange={handleInputChange} value={formData.numberOfRooms} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          {/* Add more input fields for house details here */}
          <div className="flex items-baseline justify-between">
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Add House</button>
          </div>
        </form>
        {message && <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default AddHousePage;
