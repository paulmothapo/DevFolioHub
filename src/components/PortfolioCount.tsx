'use client'

import React, { useState, useEffect } from 'react';

const PortfolioCount: React.FC = () => {
  const [portfolioCount, setPortfolioCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchPortfolioCount = async () => {
      try {
        const response = await fetch('/api/portfolios/total');
        if (response.ok) {
          const data = await response.json();
          setPortfolioCount(data.count);
        } else {
          console.error('Failed to fetch portfolio count:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching portfolio count:', error);
      }
    };

    fetchPortfolioCount();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <p className="text-lg font-semibold text-center">Total Portfolios</p>
      <div className="flex items-center justify-center mt-2">
        {portfolioCount !== null ? (
          <p className="text-4xl font-bold">{portfolioCount}</p>
        ) : (
          <p className="text-xl">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioCount;
