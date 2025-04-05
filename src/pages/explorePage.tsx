import React, { useState } from 'react';
import { Compass, Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Attraction');
  const navigate = useNavigate();

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
        {/* Top Section with Search and Discover Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex-1 max-w-2xl w-full">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search a destination like London, Melbourne..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-lg text-black bg-white/90 backdrop-blur-sm border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/discover')}
            className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Compass className="h-5 w-5 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-800/80 to-teal-600/80 bg-clip-text text-transparent">
              Discover Place
            </span>
          </button>
        </div>

        {/* Top Section - Destination Info */}
        <div className="bg-white text-black p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-bold">AI Generated Info about: {query || "..."}</h2>
          <p className="mt-2">This is where AI-based content about the searched place will appear...</p>
        </div>

        {/* Bottom Section - Content & Filters */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Content */}
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

          {/* Right Filters */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow text-black space-y-4">
            <h3 className="font-bold text-lg">Filters</h3>
            {['Solo Travel', 'Solo Female', 'Budget', 'Female', 'Couple', 'Family'].map((filter, idx) => (
              <label key={idx} className="block">
                <input type="checkbox" className="mr-2" />
                {filter}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;