// components/TopPortfolios.tsx
import React from 'react';
import PortfolioCard from './PortfolioCard';

// Dummy data for demonstration purposes
const topPortfolios = [
  {
    id: '3',
    title: 'Portfolio Website 3',
    developer: 'Bob Johnson',
    tags: ['Angular', 'Material UI', 'Express'],
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  {
    id: '4',
    title: 'Portfolio Website 4',
    developer: 'Samantha Lee',
    tags: ['React Native', 'Styled Components', 'Node.js'],
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  // Add more top portfolio data here
];

const TopPortfolios: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Top Portfolios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topPortfolios.map((portfolio) => (
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
    </section>
  );
};

export default TopPortfolios;