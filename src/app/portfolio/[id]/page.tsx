'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState<any>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/portfolios/${id}`);
          const data = await response.json();
          setPortfolio(data);
        }
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, [id]);

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{portfolio.name}</h1>
      <p>Description: {portfolio.description}</p>
      <p>Website: <a href={portfolio.website}>{portfolio.website}</a></p>
      <p>Technologies: {portfolio.technologies}</p>
    </div>
  );
};

export default PortfolioDetailPage;
