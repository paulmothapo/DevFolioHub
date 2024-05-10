import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-purple-900 font-bold text-2xl">
            DevFolioHub
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-900 font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolios"
              className="text-gray-700 hover:text-purple-900 font-semibold"
            >
              Portfolios
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-900 font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;