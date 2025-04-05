import React, { useState } from 'react';

const ExplorePage = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Attraction');

  const handleSearch = () => {
    // Trigger AI-based fetch here
    console.log('Fetching AI data for:', query);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-teal-600/80 z-0" />

      {/* Page content */}
      <div className="relative z-10 px-4 py-8 max-w-7xl mx-auto text-white">
        
        {/* Search Section */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search a destination like London, Melbourne..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-md text-black"
          />
          <button
            onClick={handleSearch}
            className="mt-4 bg-white px-6 py-3 rounded-md font-medium bg-opacity-90 hover:bg-opacity-100"
          >
            <span className="bg-gradient-to-r from-blue-800/80 to-teal-600/80 bg-clip-text text-transparent">
              Search
            </span>
          </button>
        </div>

        {/* Top Section - Destination Info */}
        <div className="bg-white text-black p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-bold">AI Generated Info about: {query || "..."}</h2>
          <p className="mt-2">This is where AI-based content about the searched place will appear...</p>
        </div>

        {/* Bottom Section - Filters & Tabs */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Filters */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow text-black space-y-4">
            <h3 className="font-bold text-lg">Filters</h3>
            {['Solo Travel', 'Solo Female', 'Budget', 'Female', 'Couple', 'Family'].map((filter, idx) => (
              <label key={idx} className="block">
                <input type="checkbox" className="mr-2" />
                {filter}
              </label>
            ))}
          </div>

          {/* Right Tabs Content */}
          <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow text-black">
            {/* Tabs */}
            <div className="flex gap-4 mb-4">
              {['Attraction', 'Food', 'Practical Info'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{activeTab}</h3>
              <p>This section will show AI-generated info for "{activeTab}" about {query || "the searched place"}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;