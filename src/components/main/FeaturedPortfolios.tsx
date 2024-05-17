'use client'

import React, { useState, useEffect } from 'react';
import PortfolioCard from '@/main/sub-main/PortfolioCard';

const FeaturedPortfolios: React.FC = () => {
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
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Portfolios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio}
            id={portfolio}
            title={portfolio}
            // developer={portfolio.developer}
            tags={portfolio}
            // thumbnail={portfolio}
            likes={portfolio} 
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPortfolios;


