import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#303030] backdrop-blur-md py-4 flex justify-center items-center bottom-0">
      <p className="text-gray-200">
        Endorsed by{' '}
        <a href="https://idealisticworld.com" target="_blank" rel="noopener noreferrer" className="text-[#b49bff] hover:underline">
          Idealistic Group
        </a>
      </p>
    </footer>
  );
};

export default Footer;
