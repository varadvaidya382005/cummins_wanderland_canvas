import React from 'react';
import { MapPin, Star, Heart } from 'lucide-react';

const Discover = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      description: 'Experience the stunning white architecture and beautiful sunsets',
      rating: 4.8,
      reviews: 1243,
      price: '$$$',
      tags: ['Romantic', 'Beach', 'Historic']
    },
    {
      id: 2,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      description: 'Discover ancient temples and traditional Japanese culture',
      rating: 4.9,
      reviews: 987,
      price: '$$',
      tags: ['Cultural', 'Historic', 'Food']
    },
    {
      id: 3,
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
      description: 'Explore the mysterious ancient Incan citadel',
      rating: 4.7,
      reviews: 856,
      price: '$$',
      tags: ['Adventure', 'Historic', 'Nature']
    },
    {
      id: 4,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      description: 'Experience tropical paradise and rich cultural heritage',
      rating: 4.6,
      reviews: 1123,
      price: '$$',
      tags: ['Beach', 'Cultural', 'Nature']
    },
    {
      id: 5,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      description: 'The city of love and lights, rich in art and history',
      rating: 4.8,
      reviews: 2345,
      price: '$$$',
      tags: ['Romantic', 'Cultural', 'Historic']
    },
    {
      id: 6,
      name: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80',
      description: 'The city that never sleeps, full of energy and diversity',
      rating: 4.7,
      reviews: 1987,
      price: '$$$',
      tags: ['Urban', 'Cultural', 'Food']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Amazing Destinations</h1>
          <p className="text-xl text-gray-600">Explore handpicked travel destinations from around the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                  <span className="text-green-600 font-medium">{destination.price}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-gray-700 font-medium">{destination.rating}</span>
                  </div>
                  <span className="text-gray-500 ml-2">({destination.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Explore Destination
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover; 