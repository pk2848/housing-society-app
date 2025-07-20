import React, { useState } from 'react';

function AddMemberPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Member added: ${formData.name}`);
    setFormData({ name: '', role: '', email: '' });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="memberName" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="memberName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Member Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="memberRole" className="block text-sm font-medium text-gray-700">Role</label>
           <input
            type="text"
            id="memberRole"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter Member Role"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
         <div>
          <label htmlFor="memberEmail" className="block text-sm font-medium text-gray-700">Email</label>
           <input
            type="email"
            id="memberEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Member Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add Member
        </button>
      </form>
    </div>
  );
}

export default AddMemberPage;
