// MyGraphsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyGraphsPage = () => {
  // State for form fields
  const [graphTitle, setGraphTitle] = useState('');
  const [graphDescription, setGraphDescription] = useState('');
  const [selectedPapers, setSelectedPapers] = useState([]);
  const [layout, setLayout] = useState('default');
  const [colors, setColors] = useState('default');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with form data (e.g., send to server, create graph, etc.)
    console.log('Form submitted with data:', {
      graphTitle,
      graphDescription,
      selectedPapers,
      layout,
      colors,
    });
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">My Graphs</h1>
        <form onSubmit={handleSubmit}>
          {/* Graph Title */}
          <div className="mb-4">
            <label htmlFor="graphTitle" className="block text-sm font-medium text-gray-700">
              Graph Title
            </label>
            <input
              type="text"
              id="graphTitle"
              name="graphTitle"
              value={graphTitle}
              onChange={(e) => setGraphTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          {/* Graph Description */}
          <div className="mb-4">
            <label htmlFor="graphDescription" className="block text-sm font-medium text-gray-700">
              Graph Description
            </label>
            <textarea
              id="graphDescription"
              name="graphDescription"
              value={graphDescription}
              onChange={(e) => setGraphDescription(e.target.value)}
              rows="3"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>

          {/* Paper Selection (Replace with actual paper selection component) */}
          <div className="mb-4">
            <label htmlFor="selectedPapers" className="block text-sm font-medium text-gray-700">
              Select Papers
            </label>
            <select
              id="selectedPapers"
              name="selectedPapers"
              multiple
              value={selectedPapers}
              onChange={(e) => setSelectedPapers(Array.from(e.target.selectedOptions, (option) => option.value))}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="paper1">Paper 1</option>
              <option value="paper2">Paper 2</option>
              {/* Add more paper options as needed */}
            </select>
          </div>

          {/* Graph Settings */}
          <div className="mb-4">
            <label htmlFor="layout" className="block text-sm font-medium text-gray-700">
              Graph Layout
            </label>
            <select
              id="layout"
              name="layout"
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="default">Default Layout</option>
              {/* Add more layout options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="colors" className="block text-sm font-medium text-gray-700">
              Graph Colors
            </label>
            <select
              id="colors"
              name="colors"
              value={colors}
              onChange={(e) => setColors(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="default">Default Colors</option>
              {/* Add more color options as needed */}
            </select>
          </div>

          {/* Submit Button */}
          <div>
            {/* <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Create Graph
            </button> */}
            <Link to='/graphd' className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">create graph</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyGraphsPage;


