// components/FeaturedPortfolios.tsx
import React from 'react';
import PortfolioCard from './PortfolioCard';

// Dummy data for demonstration purposes
const featuredPortfolios = [
  {
    id: '1',
    title: 'Portfolio Website 1',
    developer: 'John Doe',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    title: 'Portfolio Website 2',
    developer: 'Jane Smith',
    tags: ['Vue.js', 'Sass', 'Express'],
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  // Add more featured portfolio data here
];

const FeaturedPortfolios: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Portfolios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredPortfolios.map((portfolio) => (
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

export default FeaturedPortfolios;