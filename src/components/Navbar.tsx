import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Search, LogIn, LayoutGrid, PenSquare } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Wonderland Canvas</span>
          </Link>

          {/* Navigation Links and Auth Buttons */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/explorePage" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <LayoutGrid className="h-5 w-5" />
                <span>Explore</span>
              </Link>
              <button 
                onClick={() => navigate('/discover')}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
              <Link to="/create-blog" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <PenSquare className="h-5 w-5" />
                <span>Create</span>
              </Link>
            </div>

            {/* Auth Buttons */}
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;