import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically send a request to your backend for authentication
    console.log('Attempting to login with:', { username, password });
    // Handle login logic and navigation based on backend response
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-300 p-6 rounded-md bg-gray-50 text-center">
        <h2 className="text-xl font-semibold text-green-600 mb-4">Member Login Area</h2>
        <div className="mb-4 text-left">
          <label className="inline-block w-24 mr-2 font-bold">UserName :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4 text-left">
          <label className="inline-block w-24 mr-2 font-bold">Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer mt-4">
          Login
        </button>
        <a href="#" className="block mt-2 text-green-600 no-underline">Forgot Password ?</a>
      </div>
    </div>
  );
}

export default LoginPage;