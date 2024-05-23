// Assuming ArticleItems and the required CSS are already defined
import React from 'react';
import ExploreItems from './ExploreItems';

function ExploreList({ articleList }) {
  const latestArticles = articleList
    .filter(article => article.attributes.isPublished === true) // Filter articles where isPublished is true
     

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
      {latestArticles.map(item => (
        <ExploreItems article={item} key={item.id} />
      ))}
    </div>
  );
}


export default ExploreList;
