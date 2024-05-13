'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface PortfolioCardProps {
  id: number;
  title: string;
  tags: string[];
  thumbnail: string;
  likes: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  tags = [],
  thumbnail,
}) => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/portfolios/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
      if (response.ok) {
        const data = await response.json()
        setLikes(data.likes)
        setLiked(true)
      } else {
        console.error('Failed to like portfolio entry:', response.statusText)
      }
    } catch (error) {
      console.error('Error liking portfolio entry:', error)
    }
  }

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await fetch(`/api/portfolios/like/count?id=${id}`)
        const data = await response.json()
        if (response.ok) {
          setLikes(data.likes)
        } else {
          console.error('Failed to fetch like count for portfolio entry:', data.error)
        }
      } catch (error) {
        console.error('Error fetching like count for portfolio entry:', error)
      }
    }
    fetchLikeCount()
  }, [id])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/portfolio/?selected-id=${id}`} passHref legacyBehavior>
        <a>
          <Image
            src={thumbnail.startsWith("data:") ? thumbnail : `/thumbnails/${thumbnail}`}
            alt={title}
            width={640}
            height={360}
            className="w-full h-48 object-cover"
          />
        </a>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold">
          <Link href={`/portfolio/${id}`} passHref legacyBehavior>
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
        <button
          onClick={handleLike}
          className={`mt-4 ${liked ? 'text-blue-500' : 'text-gray-400'} text-sm`}
        >
          {likes} - {liked ? 'liked' : 'likes'} 
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;


