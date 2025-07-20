import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditSocietyPage() {
  const { id } = useParams(); // Get the society ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    // Add fields based on your backend Society model
    name: '',
    location: '',
    // Add other society fields
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSociety = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/societies/${id}`);
        setFormData(response.data); // Pre-fill form with fetched data
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSociety();
  }, [id]); // Re-run effect if the id parameter changes

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/societies/${id}`, formData);
      setMessage('Society updated successfully!');
      console.log('Society updated:', response.data);
      // Optionally redirect to society details page or list page
      // navigate(`/societies/${id}`);
    } catch (error) {
      setMessage('Failed to update society.');
      console.error('Error updating society:', error);
      // Handle error
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading society details for editing...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error loading society for editing: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-center">Edit Society #{id}</h3>
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
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Update Society</button>
          </div>
        </form>
        {message && <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default EditSocietyPage;
