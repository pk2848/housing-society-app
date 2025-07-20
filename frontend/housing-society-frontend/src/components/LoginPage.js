import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle login errors

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Replace with your actual backend login URL
      const response = await axios.post('http://localhost:8080/api/login', { 
        username, 
        password 
      });

      // Assuming your backend returns a success status or token on successful login
      if (response.status === 200) {
        console.log('Login successful!', response.data);
        // TODO: Handle successful login (e.g., store token, redirect)
      } else {
        setError('Login failed. Please check your credentials.'); // Basic error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password.');
      } else {
        setError('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#d4edda' }}>
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg" style={{ width: '300px' }}>
        <div style={{ backgroundColor: '#28a745', color: 'white', padding: '10px', textAlign: 'center' }}>
          Member Login Area
        </div>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
i n            <label className="block" htmlFor="username">UserName :</label>
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
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
}

export default LoginPage;
