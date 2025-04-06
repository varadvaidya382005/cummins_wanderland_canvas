import React, { useState, useEffect } from 'react';
import { Compass, Search, MapPin, Star, Heart, Calendar, DollarSign, Filter, Globe, TrendingUp, Clock, Users, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  price: string;
  tags: string[];
  bestTimeToVisit: string;
  popularAttractions: string[];
  localExperiences: string[];
  travelTypes: string[];
}

const ExplorePage = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Attraction');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Destination | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();

  const filters = ['Solo Travel', 'Solo Female', 'Budget', 'Female', 'Couple', 'Family', 'Adventure', 'Luxury', 'Cultural', 'Nature'];

  const handleSearch = () => {
    if (query.trim()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setSearchResults({
          id: 1,
          name: query,
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
          description: `Discover the wonders of ${query}, a destination rich in culture and natural beauty. Experience the perfect blend of history, modernity, and breathtaking landscapes.`,
          rating: 4.5,
          reviews: 1284,
          price: "$$",
          tags: ['Cultural', 'Historic', 'Scenic', 'Food'],
          bestTimeToVisit: 'Spring and Autumn',
          popularAttractions: [
            'Historic City Center',
            'Local Markets',
            'Mountain Views',
            'Cultural Museums',
            'Ancient Temples'
          ],
          localExperiences: [
            'Food Tours',
            'Cultural Workshops',
            'Nature Walks',
            'Local Festivals',
            'Traditional Crafts'
          ],
          travelTypes: ['Cultural', 'Adventure', 'Luxury']
        });
        setIsLoading(false);
        setRecentSearches(prev => [query, ...prev].slice(0, 5));
      }, 1500);
    }
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const filteredResults = searchResults && selectedFilters.length > 0
    ? {
        ...searchResults,
        travelTypes: searchResults.travelTypes.filter(type => 
          selectedFilters.some(filter => 
            filter.toLowerCase().includes(type.toLowerCase()) ||
            type.toLowerCase().includes(filter.toLowerCase())
          )
        )
      }
    : searchResults;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Hero Section with Background Image */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[400px] -mt-16"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-700/90"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl">
            Explore amazing destinations and create unforgettable memories
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Where would you like to go?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-4 rounded-full text-black bg-white/90 backdrop-blur-sm border-none shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                >
                  {isLoading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Recent Searches */}
        <AnimatePresence>
          {recentSearches.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setQuery(search);
                      handleSearch();
                    }}
                    className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
                  >
                    {search}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters */}
        <AnimatePresence>
          {selectedFilters.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-gray-700">Active filters:</span>
                {selectedFilters.map((filter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {filter}
                    <button
                      onClick={() => toggleFilter(filter)}
                      className="ml-1 hover:text-blue-900"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </motion.div>
                ))}
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Clear all
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Results */}
        <AnimatePresence>
          {filteredResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative group">
                    <img
                      src={filteredResults.image}
                      alt={filteredResults.name}
                      className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-colors">
                        <Heart className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-700 font-medium">{filteredResults.rating} ({filteredResults.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{filteredResults.price}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{filteredResults.name}</h2>
                  <p className="text-gray-600 text-lg mb-6">{filteredResults.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredResults.tags.map((tag, index) => (
                      <span key={index} className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        Popular Attractions
                      </h3>
                      <ul className="space-y-3">
                        {filteredResults.popularAttractions.map((attraction, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                            {attraction}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-blue-600" />
                        Local Experiences
                      </h3>
                      <ul className="space-y-3">
                        {filteredResults.localExperiences.map((experience, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                            {experience}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filters and Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-3/4">
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              {['Attraction', 'Food', 'Practical Info'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Best Time to Visit
                  </h3>
                  <p className="text-gray-600">
                    {filteredResults?.bestTimeToVisit || 'Varies by season'}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Average Stay Duration
                  </h3>
                  <p className="text-gray-600">3-5 days recommended</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{activeTab} Information</h3>
                <div className="prose prose-lg text-gray-600">
                  {activeTab === 'Attraction' && (
                    <div className="space-y-4">
                      <p>Discover the most popular attractions and hidden gems that make this destination unique. From historic landmarks to natural wonders, there's something for every traveler.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Attraction" className="rounded-lg shadow-md" />
                        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80" alt="Attraction" className="rounded-lg shadow-md" />
                      </div>
                    </div>
                  )}
                  {activeTab === 'Food' && (
                    <div className="space-y-4">
                      <p>Explore the rich culinary scene with local specialties and international cuisine. From street food to fine dining, experience the flavors that define this destination.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Food" className="rounded-lg shadow-md" />
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" alt="Food" className="rounded-lg shadow-md" />
                      </div>
                    </div>
                  )}
                  {activeTab === 'Practical Info' && (
                    <div className="space-y-4">
                      <p>Essential information for planning your trip, including transportation options, local customs, and practical tips to make your visit smooth and enjoyable.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" alt="Transport" className="rounded-lg shadow-md" />
                        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" alt="Culture" className="rounded-lg shadow-md" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Filters */}
          <div className="w-full lg:w-1/4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center space-x-2 bg-white px-6 py-4 rounded-xl shadow-lg mb-4 hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Filters</span>
            </motion.button>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white p-6 rounded-xl shadow-lg space-y-4"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-gray-900">Travel Types</h3>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Clear all
                    </button>
                  </div>
                  {filters.map((filter, idx) => (
                    <motion.label
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter)}
                        onChange={() => toggleFilter(filter)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{filter}</span>
                    </motion.label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExplorePage;