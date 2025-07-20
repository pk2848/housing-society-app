import React, { useState } from "react";

const EditComplaintPage = () => {
  const [complaint, setComplaint] = useState("Lift is not working");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Updated complaint: " + complaint);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Complaint</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
         <div>
          <label htmlFor="editComplaint" className="block text-sm font-medium text-gray-700">Complaint</label>
          <textarea
            id="editComplaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Complaint
        </button>
      </form>
    </div>
  );
};

export default EditComplaintPage;
