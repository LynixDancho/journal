import React from 'react'
import ArticleItems from './ArticleItems'
  
function ArticleList({articleList}) {
  return (
    <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-3  ' > 
      {articleList.map(item=>(

      <ArticleItems  article={item} key={item.id}/>
       
        
     

      ))}


      
    </div>
  )
}

export default ArticleList