import React from "react";

const complaints = [
  { id: 1, text: "Broken street light" },
  { id: 2, text: "Water leakage" },
  { id: 3, text: "Lift not working" },
];

const ComplaintListPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Complaints</h2>
      <ul className="mt-4 list-disc pl-6">
        {complaints.map((c) => (
          <li key={c.id} className="mb-2">{c.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintListPage;
