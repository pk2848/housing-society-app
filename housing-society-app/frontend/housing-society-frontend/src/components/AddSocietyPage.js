import React, { useState } from 'react';
import axios from 'axios';

function AddSocietyPage() {
  const [formData, setFormData] = useState({
    // Add fields based on your backend Society model
    name: '',
    location: '',
    // Add other society fields
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/societies', formData);
      setMessage('Society added successfully!');
      console.log('Society added:', response.data);
      // Optionally clear the form or redirect
      setFormData({
        name: '',
        location: '',
        // Reset other fields
      });
    } catch (error) {
      setMessage('Failed to add society.');
      console.error('Error adding society:', error);
      // Handle error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-center">Add New Society</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="name">Society Name</label>
            <input type="text" placeholder="Society Name" name="name" onChange={handleInputChange} value={formData.name} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="location">Location</label>
            <input type="text" placeholder="Location" name="location" onChange={handleInputChange} value={formData.location} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          {/* Add more input fields for society details here */}
          <div className="flex items-baseline justify-between">
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Add Society</button>
          </div>
        </form>
        {message && <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default AddSocietyPage;
