"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PortfolioDetails from "@/components/PortofolioMore";

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/portfolios/details?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          if (data.thumbnail) {
            const blob = new Blob([Buffer.from(data.thumbnail)], { type: 'image/png' });
            const objectURL = URL.createObjectURL(blob);
            data.thumbnail = objectURL;
          }
          setPortfolio(data);
        } else {
          setError("Failed to fetch portfolio details");
        }
      } catch (error) {
        console.error("Error fetching portfolio details:", error);
        setError("Error fetching portfolio details");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPortfolio();
    }

    // Cleanup function to revoke the object URL
    return () => {
      if (portfolio?.thumbnail) {
        URL.revokeObjectURL(portfolio.thumbnail);
      }
    };
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Header />
      <div>
        {portfolio && (
          <PortfolioDetails
            name={portfolio.name}
            description={portfolio.description}
            technologies={portfolio.technologies}
            thumbnail={portfolio.thumbnail}
            github={portfolio.github}
            website={portfolio.website}
            twitter={portfolio.twitter}
            email={portfolio.email}
            likes={portfolio.likes}
            liked={portfolio.liked}
            handleLike={portfolio.handleLike}
          />
        )}
      </div>
    </>
  );
};

export default PortfolioDetailPage;