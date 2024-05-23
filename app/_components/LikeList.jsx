import React from 'react'
import ArticleItems from './ArticleItems'

function LikeList({articleList}) {
    const latestArticles = articleList
    .filter(article => article.attributes.isPublished === true) // Filter articles where isPublished is true
    .sort((a, b) => (b.attributes.NumberofLikes) -    (a.attributes.NumberofLikes)) // Sort by date
    .slice(0, 8);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
    {latestArticles.map(item => (
      <ArticleItems article={item} key={item.id} />
    ))}
  </div>  )
}

export default LikeList