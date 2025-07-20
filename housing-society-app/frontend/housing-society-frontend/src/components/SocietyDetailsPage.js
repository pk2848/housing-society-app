import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SocietyDetailsPage() {
  const { id } = useParams(); // Get the society ID from the URL
  const [society, setSociety] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSociety = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/societies/${id}`);
        setSociety(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSociety();
  }, [id]); // Re-run effect if the id parameter changes

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading society details...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error fetching society details: {error.message}</div>;
  }

  if (!society) {
    return <div className="flex items-center justify-center min-h-screen">Society not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Society Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">{/* Added border and increased padding */}
        <h2 className="text-xl font-semibold mb-2">{society.name}</h2>
        <p>Location: {society.location}</p>
        {/* Display other society details here */}
      </div>
    </div>
  );
}

export default SocietyDetailsPage;
