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
    <div style={loginPageStyle}>
      <div style={loginContainerStyle}>
        <h2 style={loginHeaderStyle}>Member Login Area</h2>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>UserName :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button onClick={handleLogin} style={loginButtonStyle}>Login</button>
        <a href="#" style={forgotPasswordLinkStyle}>Forgot Password ?</a>
      </div>
    </div>
  );
}

const loginPageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 150px)', // Adjust height to account for header and footer
};

const loginContainerStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
};

const loginHeaderStyle = {
  color: '#4CAF50', // Green color
  marginBottom: '20px',
};

const inputGroupStyle = {
  marginBottom: '15px',
  textAlign: 'left',
};

const labelStyle = {
  display: 'inline-block',
  width: '100px',
  marginRight: '10px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const loginButtonStyle = {
  backgroundColor: '#4CAF50', // Green background
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '15px',
};

const forgotPasswordLinkStyle = {
  display: 'block',
  marginTop: '10px',
  color: '#4CAF50',
  textDecoration: 'none',
};

export default LoginPage;