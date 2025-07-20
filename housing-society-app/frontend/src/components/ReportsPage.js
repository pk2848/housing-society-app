import React from 'react';

function ReportsPage() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Financial Reports</h3>
          <p className="text-gray-600">Summaries of income and expenses.</p>
          {/* Add links or components for specific financial reports */}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Membership Reports</h3>
          <p className="text-gray-600">Details about society members.</p>
          {/* Add links or components for specific membership reports */}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Complaint Reports</h3>
          <p className="text-gray-600">Analysis of reported complaints.</p>
          {/* Add links or components for specific complaint reports */}
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
