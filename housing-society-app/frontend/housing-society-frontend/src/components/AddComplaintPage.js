import React, { useState } from 'react';
import axios from 'axios';

function AddComplaintPage() {
  const [formData, setFormData] = useState({
    // Add fields based on your backend Complaint model
    title: '',
    description: '',
    // Add other complaint fields
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/complaints', formData);
      setMessage('Complaint submitted successfully!');
      console.log('Complaint submitted:', response.data);
      // Optionally clear the form or redirect
      setFormData({
        title: '',
        description: '',
        // Reset other fields
      });
    } catch (error) {
      setMessage('Failed to submit complaint.');
      console.error('Error submitting complaint:', error);
      // Handle error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-center">Submit a Complaint</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="title">Title</label>
            <input type="text" placeholder="Title" name="title" onChange={handleInputChange} value={formData.title} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="description">Description</label>
            <textarea placeholder="Description" name="description" onChange={handleInputChange} value={formData.description} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required ></textarea>
          </div>
          {/* Add more input fields for complaint details here */}
          <div className="flex items-baseline justify-between">
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Submit Complaint</button>
          </div>
        </form>
        {message && <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default AddComplaintPage;
