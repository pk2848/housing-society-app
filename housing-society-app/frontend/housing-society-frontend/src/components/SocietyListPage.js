import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SocietyListPage() {
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/societies');
        setSocieties(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSocieties();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/societies/${id}`);
      setSocieties(societies.filter(society => society.id !== id)); // Remove deleted society from state
      setDeleteMessage('Society deleted successfully!');
    } catch (error) {
      setDeleteMessage('Failed to delete society.');
      console.error('Error deleting society:', error);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading societies...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error fetching societies: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Societies</h1>
      {deleteMessage && <p className={`mt-4 text-center ${deleteMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{deleteMessage}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {societies.map(society => (
          <div key={society.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
            {/* Added border and increased padding */}
            <h2 className="text-xl font-semibold mb-2">{society.name}</h2>
            <p>Location: {society.location}</p>
            {/* Add other society details here */}
            <div className="mt-4 flex space-x-4">
              <Link to={`/societies/${society.id}`} className="text-blue-600 hover:underline">View Details</Link>
              {/* TODO: Add Link to Edit Society page when created */}
              {/* <Link to={`/edit-society/${society.id}`} className="text-green-600 hover:underline">Edit</Link> */}
              <button onClick={() => handleDelete(society.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocietyListPage;
