import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-blue-300 p-4 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md font-bold hover:bg-gray-700 hover:text-white"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md font-bold hover:bg-gray-700 hover:text-white"
          >
            LOGIN
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="block px-3 py-2 rounded-md font-bold hover:bg-gray-700 hover:text-white"
          >
            REGISTER
          </Link>
        </li>
        {/* Add other navigation links here with the same styling */}
        {/* <li><Link to="/societies" className="block px-3 py-2 rounded-md font-bold hover:bg-gray-700 hover:text-white">SOCIETIES</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;