// GraphDetailsPage.js
import React from 'react';

const GraphDetailsPage = () => {
  // Placeholder data for graph details
  const graphDetails = {
    title: 'Graph Title',
    description: 'Graph Description goes here.',
    dateCreated: 'January 1, 2023', // Replace with the actual date created
    papers: ['Paper 1', 'Paper 2', 'Paper 3'], // Replace with actual paper data
  };

  // Function to handle editing the graph (replace with actual edit logic)
  const handleEdit = () => {
    console.log('Editing the graph...');
  };

  // Function to handle sharing the graph (replace with actual share logic)
  const handleShare = () => {
    console.log('Sharing the graph...');
  };

  // Function to handle deleting the graph (replace with actual delete logic)
  const handleDelete = () => {
    console.log('Deleting the graph...');
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">{graphDetails.title}</h1>
        <p className="text-gray-600 mb-2">{graphDetails.description}</p>
        <p className="text-sm text-gray-500 mb-4">Date Created: {graphDetails.dateCreated}</p>

        {/* Button to view the graph (replace with actual link or logic) */}
        <a
          href="/path-to-view-graph" // Replace with the actual path to view the graph
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
        >
          View Graph
        </a>

        {/* List of papers in the graph */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Papers in the Graph</h2>
          <ul>
            {graphDetails.papers.map((paper, index) => (
              <li key={index} className="text-gray-600">
                {paper}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons for editing, sharing, and deleting the graph */}
        <div className="flex">
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300 mr-2"
          >
            Edit
          </button>
          <button
            onClick={handleShare}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 mr-2"
          >
            Share
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphDetailsPage;
