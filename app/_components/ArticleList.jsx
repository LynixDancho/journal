// Assuming ArticleItems and the required CSS are already defined
import React from 'react';
import ArticleItems from './ArticleItems';

function ArticleList({ articleList }) {
  const latestArticles = articleList
    .filter(article => article.attributes.isPublished === true) // Filter articles where isPublished is true
    .sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)) // Sort by date
    .slice(0, 8); // Limit to the latest 5 articles

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
      {latestArticles.map(item => (
        <ArticleItems article={item} key={item.id} />
      ))}
    </div>
  );
}


export default ArticleList;
