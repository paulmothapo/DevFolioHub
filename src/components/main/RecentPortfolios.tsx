'use client';
import React, { useState, useEffect } from 'react';
import PortfolioCard from '@/main/sub-main/PortfolioCard';
import prisma from '@/app/lib/prisma';

interface Portfolio {
  id: number;
  title: string;
  developer: string;
  tags: string[];
  thumbnail: string;
}

const RecentPortfolios: React.FC = () => {
  const [recentPortfolios, setRecentPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    const fetchRecentPortfolios = async () => {
      try {
        const response = await fetch('/api/portfolios');
        const data = await response.json();
  
        const sortedData = data.slice().reverse(); 
        setRecentPortfolios(sortedData.slice(0, 6));
      } catch (error) {
        console.error('Error fetching recent portfolios:', error);
      }
    };

    fetchRecentPortfolios();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Recently Added Portfolios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentPortfolios.length > 0 &&
          recentPortfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              likes={portfolio.id}
              {...portfolio}
            />
          ))}
      </div>
    </section>
  );
};

export default RecentPortfolios;
