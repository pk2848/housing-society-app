import React, { useState } from "react";

const EditComplaintPage = () => {
  const [complaint, setComplaint] = useState("Lift is not working");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Updated complaint: " + complaint);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Edit Complaint</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          className="border w-full p-2 mb-4"
          rows={3}
        />
        <button className="bg-yellow-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditComplaintPage;
