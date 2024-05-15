"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PortfolioCount: React.FC = () => {
  const [portfolioCount, setPortfolioCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchPortfolioCount = async () => {
      try {
        const response = await fetch("/api/portfolios/total");
        if (response.ok) {
          const data = await response.json();
          setPortfolioCount(data.count);
        } else {
          console.error(
            "Failed to fetch portfolio count:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching portfolio count:", error);
      }
    };

    fetchPortfolioCount();
  }, []);

  return (
    <motion.div className=" py-2 px-4 text-center items-center text-white cursor-pointer rounded-lg max-w-[200px]">
      <p className="text-lg font-semibold text-center">Total Portfolios</p>
      <div className="flex items-center justify-center mt-2">
        {portfolioCount !== null ? (
          <p className="text-3xl font-semibold items-center">{portfolioCount}</p>
        ) : (
          <p className="text-xl">Loading...</p>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCount;
