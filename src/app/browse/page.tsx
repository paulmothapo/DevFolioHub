'use client'

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import PortfolioFilters from '../../components/PortfolioFilters';
import PortfolioCard from '../../components/PortfolioCard';

const Browse: React.FC = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch('/api/portfolios');
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <>
      <Head>
        <title>Browse Portfolios - DevFolioHub</title>
        <meta name="description" content="Discover developer portfolios on DevFolioHub" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-20">
        <PortfolioFilters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio}
              id={portfolio}
              title={portfolio}
              tags={portfolio}
              likes={portfolio}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Browse;