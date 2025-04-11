import React, { useState } from 'react';
import { Search, TrendingUp, Globe, Clock, Shield, Users, PlusCircle, MapPin, Star, Calendar, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Suggestion {
  title: string;
  items: string[];
}

interface SearchResult {
  name: string;
  description: string;
  bestTimeToVisit: string;
  averageCost: string;
  rating: number;
  suggestions: Suggestion[];
}

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Simulate API call with mock data
      setSearchResults({
        name: searchQuery,
        description: `Discover the wonders of ${searchQuery}, a destination rich in culture and natural beauty.`,
        bestTimeToVisit: 'Spring and Autumn',
        averageCost: '$$',
        rating: 4.5,
        suggestions: [
          {
            title: 'Must-Visit Attractions',
            items: [
              'Historic City Center',
              'Local Markets',
              'Mountain Views',
              'Cultural Museums'
            ]
          },
          {
            title: 'Local Experiences',
            items: [
              'Food Tours',
              'Cultural Workshops',
              'Nature Walks',
              'Local Festivals'
            ]
          },
          {
            title: 'Travel Tips',
            items: [
              'Best local transportation options',
              'Cultural etiquette to follow',
              'Money-saving tips',
              'Safety recommendations'
            ]
          }
        ]
      });
      setShowResults(true);
    }
  };

  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Coverage",
      description: "Access to destinations worldwide with local expertise and insights"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Booking",
      description: "Safe and protected transactions with best price guarantee"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Personalized Experience",
      description: "Customized travel plans tailored to your preferences"
    }
  ];

  const popularDestinations = [
    {
      title: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      description: "Experience the stunning white architecture and beautiful sunsets"
    },
    {
      title: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      description: "Discover ancient temples and traditional Japanese culture"
    },
    {
      title: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
      description: "Explore the mysterious ancient Incan citadel"
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] -mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-teal-600/90"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Transform Your Travel Experience with Wonderland Canvas
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl">
            Your journey begins here. Discover amazing destinations and create unforgettable memories
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-4 rounded-full border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button 
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Create Blog Button */}
          <button
            onClick={() => navigate('/create-blog')}
            className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
          >
            <PlusCircle className="h-5 w-5" />
            Create Your Travel Blog
          </button>
        </div>
      </div>

      {/* Search Results Section */}
      {showResults && searchResults && (
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">{searchResults.name}</h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-gray-700 font-medium">{searchResults.rating}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-1" />
                  <span className="text-gray-700">{searchResults.bestTimeToVisit}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-1" />
                  <span className="text-gray-700">{searchResults.averageCost}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-8">{searchResults.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {searchResults.suggestions.map((suggestion, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{suggestion.title}</h3>
                  <ul className="space-y-3">
                    {suggestion.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Why Choose Us Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Wonderland Canvas</h2>
            <p className="text-lg text-gray-600">Experience the difference with our premium travel services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <TrendingUp className="text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                    Learn More
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;