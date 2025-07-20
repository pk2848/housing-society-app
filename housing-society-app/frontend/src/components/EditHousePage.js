import React, { useState } from 'react';

const EditHousePage = () => {
  const [form, setForm] = useState({ houseNo: 'A-101', owner: 'Rajeev' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Updated House: ${JSON.stringify(form)}`);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">Edit House</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="houseNo" value={form.houseNo} onChange={handleChange} className="border p-2 w-full" required />
        <input type="text" name="owner" value={form.owner} onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditHousePage;
