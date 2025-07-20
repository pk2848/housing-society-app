import React, { useState } from 'react';
import axios from 'axios';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // Add other registration fields as needed based on your backend User model
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend registration endpoint
      const response = await axios.post('http://localhost:8080/api/users', formData);
      setMessage('Registration successful!');
      console.log('Registration successful:', response.data);
      // Optionally redirect to login page or show a success message
    } catch (error) {
      setMessage('Registration failed. Please try again.');
      console.error('Registration failed:', error);
      // Handle errors (e.g., display error message to the user)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/3">
        <h3 className="text-2xl font-bold text-center">Register for an account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="username">Username</label>
            <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={formData.username} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" onChange={handleInputChange} value={formData.email} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={formData.password} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
          </div>
          {/* Add other input fields for registration here */}
          <div className="flex items-baseline justify-between">
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
          </div>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
}

export default RegistrationPage;
