import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[65px] fixed top-0  z-50 px-10">
      <nav className="w-full h-full flex flex-row items-center justify-center">
        <div className="w-full max-w-[500px] h-full flex flex-row items-center justify-between px-[10px]">
          <ul className="flex shadow-lg items-center justify-between w-full h-auto border border-[#7042f861] bg-[#2c2c2c76] backdrop-blur-md px-[20px] py-[10px] mt-4 rounded-2xl text-gray-200">
            <a href="/" className='border border-gray-600 hover:border-gray-100 rounded-2xl p-2 bg-[#2c2c2c76] px-4'>
              <h2 className="text-sm">
                Home
              </h2>
            </a>
            <a href="/about" className='border border-gray-600 hover:border-gray-100 rounded-2xl p-2 bg-[#2c2c2c76] px-4'>
              <h2 className="text-sm">
                About
              </h2>
            </a>
            <a href="/browse" className='border border-gray-600 hover:border-gray-100 rounded-2xl p-2 bg-[#2c2c2c76] px-4'>
              <h2  className="text-sm">
                Browse
              </h2>
            </a>
            <a href="/contact" className='border border-gray-600 hover:border-gray-100 rounded-2xl p-2 bg-[#2c2c2c76] px-4'>
              <h2  className="text-sm">
                Contact
              </h2>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
