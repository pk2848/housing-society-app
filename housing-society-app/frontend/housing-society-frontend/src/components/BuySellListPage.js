import React from 'react';

const buySellItems = [
  { id: 1, title: 'Apartment for Sale', description: '2BHK, great location', price: '₹ 50 Lac' },
  { id: 2, title: 'House for Rent', description: '3BHK, fully furnished', price: '₹ 25000/month' },
];

function BuySellListPage() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Buy / Sell List</h2>
      <ul className="divide-y divide-gray-200">
        {buySellItems.map((item) => (
          <li key={item.id} className="py-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-lg font-bold text-green-600">{item.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuySellListPage;
