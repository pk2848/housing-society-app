import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HouseDetailsPage() {
  const { id } = useParams(); // Get the house ID from the URL
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/houses/${id}`);
        setHouse(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHouse();
  }, [id]); // Re-run effect if the id parameter changes

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading house details...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error fetching house details: {error.message}</div>;
  }

  if (!house) {
    return <div className="flex items-center justify-center min-h-screen">House not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">House Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">House #{house.id}</h2>
        <p>Address: {house.address}</p>
        <p>Number of Rooms: {house.numberOfRooms}</p>
        {/* Display other house details here */}
      </div>
    </div>
  );
}

export default HouseDetailsPage;
