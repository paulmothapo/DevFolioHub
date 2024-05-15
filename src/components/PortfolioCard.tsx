"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LikeButton from "./LikeButton";

interface PortfolioCardProps {
  id: number;
  title: string;
  tags: string[];
  likes: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  tags = [],
  likes,
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string>("");

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(`/api/portfolios/thumbnail?id=${id}`);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          setThumbnail(objectURL);
        } else {
          console.error(
            "Failed to fetch thumbnail for portfolio entry:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching thumbnail for portfolio entry:", error);
      }
    };
    fetchThumbnail();
  
    return () => {
      if (thumbnail) {
        URL.revokeObjectURL(thumbnail);
      }
    };
  }, [id]);


  const handleLike = async () => {
    try {
      const response = await fetch(`/api/portfolios/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        
      });
      if (response.ok) {
        setLiked(true);
      } else {
        console.error("Failed to like portfolio entry:", response.statusText);
      }
    } catch (error) {
      console.error("Error liking portfolio entry:", error);
    }
  };

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await fetch(`/api/portfolios/like/count?id=${id}`);

        
        if (!response.ok) {
          console.error(
            "Failed to fetch like count for portfolio entry:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching like count for portfolio entry:", error);
      }
    };
    fetchLikeCount();
  }, [id]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-1">
      <Link
        href={{
          pathname: `/portfolio/${id}`,
          query: {
            slug: encodeURIComponent(title || "")
              .replace(/\s+/g, "_")
              .toLowerCase(),
          },
        }}
        passHref
        legacyBehavior
      >
        <a>
          <img
            src={thumbnail} 
            alt={title}
            className="w-full h-48 object-cover"
          />
        </a>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold">
          <Link
            href={{
              pathname: `/portfolio/${id}`,
              query: {
                slug: encodeURIComponent(title || "")
                  .replace(/\s+/g, "_")
                  .toLowerCase(),
              },
            }}
            passHref
            legacyBehavior
          >
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
       <LikeButton liked={liked} likes={likes} handleLike={handleLike}/>
      </div>
    </div>
  );
};

export default PortfolioCard;

