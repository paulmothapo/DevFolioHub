'use client'
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import PortfolioFilters from '../../components/PortfolioFilters';
import PortfolioCard from '../../components/PortfolioCard';

const Browse: React.FC = () => {
  // Dummy data for demonstration purposes
  const portfolios = [
    {
      id: '1',
      title: 'Portfolio Website 1',
      developer: 'John Doe',
      tags: ['React', 'Tailwind CSS', 'Node.js'],
      thumbnail: 'https://ibb.co/M5hW9H7',
    },
    {
      id: '2',
      title: 'Portfolio Website 2',
      developer: 'Jane Smith',
      tags: ['Vue.js', 'Sass', 'Express'],
      thumbnail: 'https://ibb.co/M5hW9H7',
    },
    // Add more portfolio data here
  ];

  return (
    <>
      <Head>
        <title>Browse Portfolios - DevFolioHub</title>
        <meta name="description" content="Discover developer portfolios on DevFolioHub" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Browse Portfolios</h1>
        <PortfolioFilters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              id={portfolio.id}
              title={portfolio.title}
              developer={portfolio.developer}
              tags={portfolio.tags}
              thumbnail={portfolio.thumbnail}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Browse;