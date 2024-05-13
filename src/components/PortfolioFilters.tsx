'use client'

import React, { useState } from 'react';

const PortfolioFilters: React.FC = () => {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <label htmlFor="search" className="font-semibold mr-2">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleSearchChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Search portfolios..."
          />
        </div>
        <div>
          <label htmlFor="sortBy" className="font-semibold mr-2">
            Sort By:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSortChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Default</option>
            <option value="latest">Latest</option>
            <option value="mostViewed">Most Viewed</option>
            {/* Add more sorting options here */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilters;