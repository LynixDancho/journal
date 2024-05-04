'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '../this_area.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

function ArticleBody({article,User}) {
  const [content, setContent] = useState(null); 
   useEffect(() => {
    if (article && article.attributes && article.attributes.Body) {
      setContent(article.attributes.Body); 
    }
  }, [article]);
  return (
    <div className='ThepictureandBody'> 
    
    {article?.attributes?.ImagesOfResearch?.data?.attributes?.url ? (
  <Image
    src={article?.attributes?.ImagesOfResearch?.data?.attributes?.url}
    width={400}
    height={580}
    className="w-100 rounded-lg shadow-lg"
    alt="Image-card"
  />
) : (
  <div> The article Doesn't have a cover    </div>
)}

  <div className='flex flex-row justify-between'> 
  <h1 className='font-bold mt-3 mb-3' >
    {article?.attributes?.Title}

  </h1>
  
 
  <h1 className='font-bold mt-3 mb-3 mr-5'  >
  {User?.username && User.username.charAt(0).toUpperCase() + User.username.slice(1)}


  </h1>
  </div>
  {content && <BlocksRenderer content={content} />}
  
  </div>
  )
}

export default ArticleBody