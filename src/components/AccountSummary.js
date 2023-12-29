import React from 'react';

const AccountSummary = ({ subscription }) => (
  <div>
    <h2 className='text-xl font-semibold mb-2'>Account Summary</h2>
    
    <p className="text-gray-600">Subscription: {subscription}</p>
    {/* Add other metrics here */}
  </div>
);

export default AccountSummary;
