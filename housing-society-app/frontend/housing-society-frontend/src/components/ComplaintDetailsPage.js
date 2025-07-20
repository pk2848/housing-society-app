import React from "react";

const ComplaintDetailsPage = ({ complaint = "Water leakage from roof" }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Complaint Details</h2>
      <div>
        <p className="text-sm font-medium text-gray-700">Complaint:</p>
        <p className="mt-1 text-lg text-gray-900">{complaint}</p>
      </div>
      {/* Add more details here as needed, e.g., status, date, etc. */}
    </div>
  );
};

export default ComplaintDetailsPage;
