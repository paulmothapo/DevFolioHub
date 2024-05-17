import React from "react";
import LikeButton from "@/buttons/LikeButton";

interface PortfolioDetailsProps {
  name: string;
  description: string;
  technologies: string[];
  thumbnail: string | null; 
  github: string;
  website: string;
  twitter: string;
  email: string;
  likes: number;
  liked: boolean;
  handleLike: () => void;
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({
  name,
  description,
  technologies = [],
  thumbnail,
  github,
  website,
  twitter,
  email,
  likes,
  liked,
  handleLike,
}) => {
  return (
    <div className="overflow-hidden mt-40 md:flex ">
      <div className="md:w-1/2">
        <div className="p-4">
          <div className="">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={name}
                width={640}
                height={560}
                className="w-full h-2/6 shadow-xl rounded-2xl md:h-auto"
              />
            ) : (
              <div className="w-full h-2/6 shadow-xl rounded-2xl md:h-auto bg-gray-300 flex items-center justify-center">
                <p>No thumbnail available</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/2 border-l-4 border-l-purple-600">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="mb-4 font-bold text-4xl py-10">{description}</p>
        <div className="flex flex-wrap gap-4 mb-4 ">
          {github && (
            <a
              href={github}
              className="hover:text-purple-600 border-b-4 border-b-purple-600 font-semibold"
            >
              GitHub
            </a>
          )}
          {website && (
            <a
              href={website}
              className="hover:text-purple-600 border-b-4 border-b-purple-600 font-semibold"
            >
              Website
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              className="hover:text-purple-600 border-b-4 border-b-purple-600 font-semibold"
            >
              Twitter
            </a>
          )}
        </div>
        {email && (
          <div className="mb-4">
            <p>{email}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <LikeButton likes={likes} liked={liked} handleLike={handleLike}/>
      </div>
    </div>
  );
};

export default PortfolioDetails;