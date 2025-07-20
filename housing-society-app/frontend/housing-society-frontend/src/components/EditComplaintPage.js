
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditComplaintPage() {
  const { id } = useParams(); // Get the complaint ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    // Add fields based on your backend Complaint model
    title: '',
    description: '',
    // Add other complaint fields
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/complaints/${id}`);
        setFormData(response.data); // Pre-fill form with fetched data
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchComplaint();
  }, [id]); // Re-run effect if the id parameter changes

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/complaints/${id}`, formData);
      setMessage('Complaint updated successfully!');
      console.log('Complaint updated:', response.data);
      // Optionally redirect to complaint details page or list page
      // navigate(`/complaints/${id}`);
    } catch (error) {
      setMessage('Failed to update complaint.');
      console.error('Error updating complaint:', error);
      // Handle error
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading complaint details for editing...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error loading complaint for editing: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-center">Edit Complaint #{id}</h3>
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
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Update Complaint</button>
          </div>
        </form>
        {message && <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default EditComplaintPage;
