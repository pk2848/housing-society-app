import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Housing Society App</h3>
            <p className="text-sm text-gray-400">
              Managing your society has never been easier.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm text-gray-400">
              Email: info@housingsocietyapp.com
            </p>
            <p className="text-sm text-gray-400">
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p className="text-sm text-gray-400">
              123 Society Lane
              <br />
              Cityville, State, 12345
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          © 2025 Housing Society App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;