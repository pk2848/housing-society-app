import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

function Navbar() {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Housing Society App</Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/" className="text-white hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:underline">Register</Link>
          </li>
          <li>
            <Link to="/houses" className="text-white hover:underline">Houses</Link>
          </li>
          <li>
            <Link to="/add-house" className="text-white hover:underline">Add House</Link>
          </li>
          <li>
            <Link to="/complaints" className="text-white hover:underline">Complaints</Link>
          </li>
          <li>
            <Link to="/add-complaint" className="text-white hover:underline">Add Complaint</Link>
          </li>
           <li>
            <Link to="/societies" className="text-white hover:underline">Societies</Link>
          </li>
           <li>
            <Link to="/add-society" className="text-white hover:underline">Add Society</Link>
          </li>
          <li>
            <ThemeSwitcher /> {/* Add the ThemeSwitcher here */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
