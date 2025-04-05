import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-teal-600/80 z-0" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Link
            to="/discover"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-white bg-opacity-90 hover:bg-opacity-100"
          >
            <span className="bg-gradient-to-r from-blue-800/80 to-teal-600/80 bg-clip-text text-transparent">
              Discover
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-white mb-4 mt-6">
            Ready to share your travel journey?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-white bg-opacity-90 hover:bg-opacity-100"
            >
              <span className="bg-gradient-to-r from-blue-800/80 to-teal-600/80 bg-clip-text text-transparent">
                Sign up
              </span>
            </Link>
            <Link
              to="/subscription"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-white bg-opacity-90 hover:bg-opacity-100 border-2 border-white"
            >
              <span className="bg-gradient-to-r from-blue-800/80 to-teal-600/80 bg-clip-text text-transparent">
                View subscription
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;