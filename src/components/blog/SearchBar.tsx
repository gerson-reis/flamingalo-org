'use client';

import React, { useState } from 'react';
import { useTranslations, type Language } from '../../i18n/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  categories: string[];
  selectedCategory: string;
  lang?: Language;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onCategoryFilter,
  categories,
  selectedCategory,
  lang = 'en',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const t = useTranslations(lang);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleCategoryClick = (category: string) => {
    onCategoryFilter(category);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <svg 
          className="search-icon" 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder={t('blog.searchPlaceholder')}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <button
            className="search-clear"
            onClick={() => {
              setSearchQuery('');
              onSearch('');
            }}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div className="category-filters">
        <button
          className={`category-filter ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          {t('blog.allCategories')}
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

