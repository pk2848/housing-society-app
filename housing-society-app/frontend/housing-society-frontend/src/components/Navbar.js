import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white font-bold hover:underline">HOME</Link></li>
        <li><Link to="/login" className="text-white font-bold hover:underline">LOGIN</Link></li>
        <li><Link to="/register" className="text-white font-bold hover:underline">REGISTER</Link></li>
        {/* Add other navigation links here using Link component */}
        {/* Example: <li><Link to="/societies" className="text-white font-bold hover:underline">SOCIETIES</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
