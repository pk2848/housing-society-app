import React, { useState } from "react";

const AddMemberPage = () => {
  const [member, setMember] = useState({ name: "", role: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Member added: ${member.name} as ${member.role}`);
    setMember({ name: "", role: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={member.name}
          onChange={(e) => setMember({ ...member, name: e.target.value })}
          placeholder="Name"
          className="border w-full p-2 mb-3"
        />
        <input
          value={member.role}
          onChange={(e) => setMember({ ...member, role: e.target.value })}
          placeholder="Role"
          className="border w-full p-2 mb-3"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddMemberPage;
