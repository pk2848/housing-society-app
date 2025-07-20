import React, { useState } from 'react';

function EditSocietyPage() {
   const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Society updated: " + name);
    // Handle update logic
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Society</h2>
       <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="editSocietyName" className="block text-sm font-medium text-gray-700">Society Name</label>
          <input
            type="text"
            id="editSocietyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Society Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Update Society
        </button>
      </form>
    </div>
  );
}

export default EditSocietyPage;