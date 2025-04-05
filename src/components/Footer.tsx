import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center">
          <Link
            to="/subscription"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Upgrade to Premium
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;