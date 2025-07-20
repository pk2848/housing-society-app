import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ComplaintDetailsPage() {
  const { id } = useParams(); // Get the complaint ID from the URL
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/complaints/${id}`);
        setComplaint(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchComplaint();
  }, [id]); // Re-run effect if the id parameter changes

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading complaint details...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error fetching complaint details: {error.message}</div>;
  }

  if (!complaint) {
    return <div className="flex items-center justify-center min-h-screen">Complaint not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Complaint Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">Complaint #{complaint.id}</h2>
        <p>Title: {complaint.title}</p>
        <p>Description: {complaint.description}</p>
        {/* Display other complaint details here */}
      </div>
    </div>
  );
}

export default ComplaintDetailsPage;
