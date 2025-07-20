import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditHousePage() {
  const { id } = useParams(); // Get the house ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    // Add fields based on your backend House model
    address: '',
    numberOfRooms: '',
    // Add other house fields
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/houses/${id}`);
        setFormData(response.data); // Pre-fill form with fetched data
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHouse();
  }, [id]); // Re-run effect if the id parameter changes

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/houses/${id}`, formData);
      setMessage('House updated successfully!');
      console.log('House updated:', response.data);
      // Optionally redirect to house details page or list page
      // navigate(`/houses/${id}`);
    } catch (error) {
      setMessage('Failed to update house.');
      console.error('Error updating house:', error);
      // Handle error
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading house details for editing...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error loading house for editing: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-center">Edit House #{id}</h3>
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
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Update House</button>
          </div>
        </form>
        {message && <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default EditHousePage;
