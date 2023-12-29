import React from 'react';
import UserProfile from './UserProfile';
import AccountSummary from './AccountSummary';
import MyGraphs from './MyGraphs';
import FavouritePapers from './FavouritePapers';
 import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div className='container mx-auto mt-8 p-8 bg-gray-100'>
    <div className='max-w-md mx-auto bg-white p-6 rounded-md shadow-md'>
    <h1 className="text-2xl font-semibold mb-4">Dashboard page</h1>
    <UserProfile name="John Doe" email="john@example.com" profilePhoto="https://i.pravatar.cc/150?img=68" />
    <div className='mb-4'>
    <AccountSummary subscription="Pro" />
    </div>
    <Link to="/graph" className="text-blue-500 hover:underline mt-4 block">Stats</Link>
    
    <FavouritePapers />
   
    <Link to="/pricing" className="text-blue-500 hover:underline mt-4 block">Go to Pricing Page</Link>
    </div>
   
  </div>
);

export default DashboardPage;



// DashboardPage.js
// import React from 'react';

// const DashboardPage = () => (
//   <div className="container mx-auto mt-8 p-8 bg-gray-100">
//     <div className="">
//       <h1 className="text-2xl font-semibold mb-4">Dashboard Page</h1>
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">User Profile</h2>
//         <div className="flex items-center">
//           <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="rounded-full w-16 h-16 mr-4" />
//           <div>
//             <p className="text-gray-800 text-lg font-semibold">John Doe</p>
//             <p className="text-gray-600">john@example.com</p>
//           </div>
//         </div>
//       </div>
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Account Summary</h2>
//         <p className="text-gray-600">Subscription: Pro</p>
//         {/* Add other metrics here */}
//       </div>
//       <div>
//         <h2 className="text-xl font-semibold mb-2">My Graphs</h2>
//         {/* Replace with actual graphs or buttons to create graphs */}
//       </div>
//     </div>
//         <Link to="/pricing">Go to Pricing Page</Link>
//   </div>
// );

// export default DashboardPage;
