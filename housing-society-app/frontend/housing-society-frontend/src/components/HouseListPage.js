import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HouseListPage() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/houses');
        setHouses(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/houses/${id}`);
      setHouses(houses.filter(house => house.id !== id)); // Remove deleted house from state
      setDeleteMessage('House deleted successfully!');
    } catch (error) {
      setDeleteMessage('Failed to delete house.');
      console.error('Error deleting house:', error);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading houses...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error fetching houses: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Houses</h1>
      {deleteMessage && <p className={`mt-4 text-center ${deleteMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{deleteMessage}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {houses.map(house => (
          <div key={house.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">House #{house.id}</h2>
            <p>Address: {house.address}</p>
            {/* Display other house details here */}
            <div className="mt-4 flex space-x-4">
              <Link to={`/houses/${house.id}`} className="text-blue-600 hover:underline">View Details</Link>
              {/* TODO: Add Link to Edit House page when created */}
              {/* <Link to={`/edit-house/${house.id}`} className="text-green-600 hover:underline">Edit</Link> */}
              <button onClick={() => handleDelete(house.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HouseListPage;
