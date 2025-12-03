'use client';

import React, { useState, useMemo } from 'react';
import { BlogCard } from './BlogCard';
import { SearchBar } from './SearchBar';
import { ErrorBoundary } from '../common/ErrorBoundary';
import type { BlogPost } from '../../types';

interface BlogFeedProps {
  posts: BlogPost[];
}

export const BlogFeed: React.FC<BlogFeedProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach(post => {
      post.categories.forEach(cat => categories.add(cat));
    });
    return Array.from(categories).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        post.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <ErrorBoundary>
      <div className="blog-feed-container">
        <SearchBar
          onSearch={setSearchQuery}
          onCategoryFilter={setSelectedCategory}
          categories={allCategories}
          selectedCategory={selectedCategory}
        />

        {filteredPosts.length === 0 ? (
          <div className="no-results">
            <p>No posts found 😔</p>
            <p className="no-results-hint">
              Try searching for other terms or select "All" in categories.
            </p>
          </div>
        ) : (
          <>
            <div className="results-count">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </div>
            <div className="blog-feed-grid">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  {...post}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

