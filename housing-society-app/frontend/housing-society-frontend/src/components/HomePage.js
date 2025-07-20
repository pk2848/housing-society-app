import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/5 border-r border-gray-200 p-4">
        <ul className="space-y-2">
          <li><Link to="/societies/add" className="text-blue-600 hover:underline">ADD Society</Link></li>
          <li><Link to="/houses/add" className="text-blue-600 hover:underline">ADD House</Link></li>
          <li><Link to="/members/add" className="text-blue-600 hover:underline">ADD Member</Link></li>
          <li><Link to="/allocate-house" className="text-blue-600 hover:underline">Allocate House</Link></li>
          <li><Link to="/complaints" className="text-blue-600 hover:underline">Manage Complain</Link></li>
          <li><Link to="/buy-sell" className="text-blue-600 hover:underline">Buy / Sell List</Link></li>
          <li><Link to="/reports" className="text-blue-600 hover:underline">Reports</Link></li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="w-4/5 p-4">
        {/* Outlet will render the matched nested route component */}
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
