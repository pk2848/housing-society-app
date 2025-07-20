import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 shadow-md text-white">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Features</h2> {/* Heading text color is white due to parent div */}
          <ul className="space-y-2">
            <li>
              <Link
                to="societies/add"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                ADD Society
              </Link>
            </li>
            <li>
              <Link
                to="houses/add"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                ADD House
              </Link>
            </li>
            <li>
              <Link
                to="members/add"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                ADD Member
              </Link>
            </li>
            <li>
              <Link
                to="allocate-house"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                Allocate House
              </Link>
            </li>
            <li>
              <Link
                to="complaints"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                Manage Complain
              </Link>
            </li>
            <li>
              <Link
                to="buy-sell"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                Buy / Sell List
              </Link>
            </li>
            <li>
              <Link
                to="reports"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                Reports
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6 overflow-y-auto flex justify-center">
        {/* Outlet will render the matched nested route component */}
        <Outlet />
         {/* Default content when no nested route is matched */}
        {!location.pathname || location.pathname === '/' ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Housing Society App</h2>
                <p className="text-gray-600 mb-6">Select a feature from the sidebar to get started.</p>
                <img 
                  src="https://actionhousing.org/wp-content/uploads/2020/06/Photo-3-1800x1000.jpg"
                  alt="Illustration of a house"
                  className="mx-auto rounded-md shadow-sm transition-transform duration-300 hover:scale-105"
                />
            </div>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
