// components/RecentPortfolios.tsx
import React from 'react';
import PortfolioCard from './PortfolioCard';

// Dummy data for demonstration purposes
const recentPortfolios = [
  {
    id: '5',
    title: 'Portfolio Website 5',
    developer: 'Emily Wilson',
    tags: ['React', 'Tailwind CSS', 'Express'],
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  {
    id: '6',
    title: 'Portfolio Website 6',
    developer: 'Michael Brown',
    tags: ['Vue.js', 'Bootstrap', 'Node.js'],
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  // Add more recent portfolio data here
];

const RecentPortfolios: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Recently Added Portfolios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentPortfolios.map((portfolio) => (
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

export default RecentPortfolios;