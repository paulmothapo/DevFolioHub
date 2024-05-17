'use client'
import React, { useState, useEffect } from 'react';
import PortfolioCard from '@/main/sub-main/PortfolioCard';

const TopPortfolios: React.FC = () => {
  const [portfolios, setPortfolios] = useState<any[]>([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch('/api/portfolios/top');
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.error('Error fetching top portfolios:', error);
      }
    };
    fetchPortfolios();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Top Portfolios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            id={portfolio.id}
            title={portfolio.name}
            tags={portfolio.technologies}
            thumbnail={portfolio.thumbnail}
            likes={portfolio.likes}
          />
        ))} */}
      </div>
    </section>
  );
};

export default TopPortfolios;


