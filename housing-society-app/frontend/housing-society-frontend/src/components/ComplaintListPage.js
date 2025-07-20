import React from "react";

const complaints = [
  { id: 1, text: "Broken street light" },
  { id: 2, text: "Water leakage" },
  { id: 3, text: "Lift not working" },
];

const ComplaintListPage = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Complaints</h2>
      <ul className="divide-y divide-gray-200">
        {complaints.map((c) => (
          <li key={c.id} className="py-4">
            <p className="text-sm font-medium text-gray-900">Complaint ID: {c.id}</p>
            <p className="mt-1 text-sm text-gray-600">{c.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintListPage;
