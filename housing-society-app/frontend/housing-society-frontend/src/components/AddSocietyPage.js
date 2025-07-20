import React, { useState } from "react";

const AddSocietyPage = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Society added: " + name);
    setName("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Society</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Society Name"
          className="border w-full p-2 mb-4"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AddSocietyPage;
