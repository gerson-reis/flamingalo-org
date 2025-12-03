'use client';

import React from 'react';
import type { BlogCardProps } from '../../types';

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  slug,
  date,
  author,
  authorImage,
  image,
  excerpt,
  categories,
}) => {

  return (
    <article className="blog-card">
      <div className="blog-card-header">
        <div className="blog-card-author">
          <div className="author-avatar">
            {authorImage && (
              <img src={authorImage} alt={author} />
            )}
          </div>
          <div className="author-info">
            <span className="author-name">{author}</span>
            <span className="post-date">{date}</span>
          </div>
        </div>
      </div>

      {image && (
        <div className="blog-card-image">
          <a href={`/blog/${slug.replace('/index.md', '')}`}>
            <img src={image} alt={title} loading="lazy" />
          </a>
        </div>
      )}

      <div className="blog-card-content">
        <h2 className="blog-card-title">
          <a href={`/blog/${slug.replace('/index.md', '')}`}>{title}</a>
        </h2>

        <p className="blog-card-excerpt">{excerpt}</p>

        {categories && categories.length > 0 && (
          <div className="blog-card-categories">
            {categories.map((category, index) => (
              <span key={index} className="category-tag">
                #{category}
              </span>
            ))}
          </div>
        )}

        <a href={`/blog/${slug.replace('/index.md', '')}`} className="blog-card-link">
          Read more →
        </a>
      </div>
    </article>
  );
};

