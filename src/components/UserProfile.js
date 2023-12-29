// UserProfile.js
// UserProfile.js
import React from 'react';

const UserProfile = ({ name, email, profilePhoto }) => (
  <div className="container mx-auto mt-8 p-8 bg-gray-100">
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
      <div className="flex items-center mb-4">
        <img src={profilePhoto} alt="Profile" className="rounded-full w-16 h-16 mr-4" />
        <div>
          <p className="text-gray-800 text-lg font-semibold">{name}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserProfile;


