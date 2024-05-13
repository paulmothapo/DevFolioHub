import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PortfolioCardProps {
  id: number;
  title: string;
  developer: string;
  tags: string[];
  thumbnail: string;
  website: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  tags = [],
  thumbnail,
  website,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/portfolio/${id}`} legacyBehavior>
        <a>
          <Image
            src={`/thumbnails/${thumbnail}`}
            alt={title}
            width={640}
            height={360}
            className="w-full h-48 object-cover"
          />
        </a>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold">
          <Link href={`/portfolio/${id}`} legacyBehavior>
            <a>{title}</a>
          </Link>
        </h3>
        <div className="mt-2">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;