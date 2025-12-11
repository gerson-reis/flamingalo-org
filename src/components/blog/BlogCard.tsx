'use client';

import React from 'react';
import type { BlogCardProps } from '../../types';
import { useTranslations, getLocalizedPath, type Language } from '../../i18n/utils';

interface BlogCardComponentProps extends BlogCardProps {
  lang?: Language;
}

export const BlogCard: React.FC<BlogCardComponentProps> = ({
  title,
  slug,
  date,
  author,
  authorImage,
  image,
  excerpt,
  categories,
  lang = 'en',
}) => {
  const t = useTranslations(lang);
  const blogPostUrl = getLocalizedPath(`/blog/${slug}`, lang);

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
          <a href={blogPostUrl}>
            <img src={image} alt={title} loading="lazy" />
          </a>
        </div>
      )}

      <div className="blog-card-content">
        <h2 className="blog-card-title">
          <a href={blogPostUrl}>{title}</a>
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

        <a href={blogPostUrl} className="blog-card-link">
          {t('blog.readMore')} →
        </a>
      </div>
    </article>
  );
};

