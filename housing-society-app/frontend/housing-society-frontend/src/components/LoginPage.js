import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend for authentication
    console.log('Attempting to login with:', { username, password });
    // Add your backend integration logic here
    // Example: axios.post('/api/login', { username, password }).then(...)
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#d4edda' }}>
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg" style={{ width: '300px' }}>
        <div style={{ backgroundColor: '#28a745', color: 'white', padding: '10px', textAlign: 'center' }}>
          Member Login Area
        </div>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block" htmlFor="username">UserName :</label>
            <input
              type="text"
              placeholder=""
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">Password :</label>
            <input
              type="password"
              placeholder=""
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button type="submit" className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-800" style={{ backgroundColor: '#28a745' }}>Login</button>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password ?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
