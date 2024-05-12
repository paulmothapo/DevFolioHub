import React from 'react';
import Link from 'next/link';

interface PortfolioCardProps {
  id: string;
  title: string;
  developer: string;
  tags: string[];
  thumbnail: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  developer,
  tags,
  thumbnail,
}) => {
  return (
    <Link href={`/portfolio/${id}`}>
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{developer}</p>
          <div className="mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;