import React from "react";

const ComplaintDetailsPage = ({ complaint = "Water leakage from roof" }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Complaint Details</h2>
      <p className="mt-2">{complaint}</p>
    </div>
  );
};

export default ComplaintDetailsPage;
