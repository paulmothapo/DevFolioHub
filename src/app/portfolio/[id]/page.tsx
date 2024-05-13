"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PortfolioDetails from "@/components/PortofolioMore";

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState<any>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(`/api/portfolios/details?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          setPortfolio(data);
        } else {
          console.error(
            "Failed to fetch portfolio details:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching portfolio details:", error);
      }
    };

    if (id) {
      fetchPortfolio();
    }
  }, [id]);

  return (
    <>
      <Header />
      <div>
        {portfolio ? (
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
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default PortfolioDetailPage;
