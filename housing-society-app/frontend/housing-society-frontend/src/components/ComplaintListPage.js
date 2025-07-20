import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ComplaintListPage() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/complaints');
        setComplaints(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/complaints/${id}`);
      setComplaints(complaints.filter(complaint => complaint.id !== id)); // Remove deleted complaint from state
      setDeleteMessage('Complaint deleted successfully!');
    } catch (error) {
      setDeleteMessage('Failed to delete complaint.');
      console.error('Error deleting complaint:', error);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading complaints...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error fetching complaints: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Complaints</h1>
      {deleteMessage && <p className={`mt-4 text-center ${deleteMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{deleteMessage}</p>}
      <div className="grid grid-cols-1 gap-6">
        {complaints.map(complaint => (
          <div key={complaint.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-300">{/* Added border */}
            <h2 className="text-xl font-semibold mb-2">Complaint #{complaint.id}</h2>
            <p>Title: {complaint.title}</p>
            <p>Description: {complaint.description}</p>
            {/* Add other complaint details here */}
            <div className="mt-4 flex space-x-4">
              <Link to={`/complaints/${complaint.id}`} className="text-blue-600 hover:underline">View Details</Link>
              {/* TODO: Add Link to Edit Complaint page when created */}
              {/* <Link to={`/edit-complaint/${complaint.id}`} className="text-green-600 hover:underline">Edit</Link> */}
              <button onClick={() => handleDelete(complaint.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComplaintListPage;
