import React, { useState } from "react";

const AddHousePage = () => {
  const [formData, setFormData] = useState({ houseNo: "", owner: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`House added: ${formData.houseNo} owned by ${formData.owner}`);
    setFormData({ houseNo: "", owner: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add House</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="houseNo"
          value={formData.houseNo}
          onChange={handleChange}
          placeholder="House Number"
          className="border w-full p-2 mb-3"
        />
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          placeholder="Owner Name"
          className="border w-full p-2 mb-3"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddHousePage;
