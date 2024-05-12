// components/PortfolioFilters.tsx
import React, { useState } from 'react';

const PortfolioFilters: React.FC = () => {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setTags([...tags, tag]);
    } else {
      setTags(tags.filter((t) => t !== tag));
    }
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
        <div className="mb-4 md:mb-0">
          <label className="font-semibold mr-2">Tags:</label>
          <div className="flex flex-wrap">
            <div className="mr-2 mb-2">
              <label>
                <input
                  type="checkbox"
                  value="React"
                  onChange={handleTagChange}
                  className="mr-1"
                />
                React
              </label>
            </div>
            <div className="mr-2 mb-2">
              <label>
                <input
                  type="checkbox"
                  value="Vue.js"
                  onChange={handleTagChange}
                  className="mr-1"
                />
                Vue.js
              </label>
            </div>
            {/* Add more tag checkboxes here */}
          </div>
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