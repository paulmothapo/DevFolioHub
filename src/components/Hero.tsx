import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero bg-purple-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Welcome to DevFolioHub
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            Showcase your personal portfolio website and get discovered by potential clients and employers.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;