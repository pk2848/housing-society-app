import React, { useState } from "react";

const AddComplaintPage = ({ onBack }) => {
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint submitted: " + complaint);
    setComplaint("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Complaint</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Write your complaint here"
          className="border w-full p-2 mb-4"
          rows={4}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComplaintPage;
