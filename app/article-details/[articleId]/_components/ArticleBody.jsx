'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '../this_area.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import SkeletonArticleInfo from './SkeletonArticleInfo';

function ArticleBody({article,User}) {
  const [content, setContent] = useState(null); 
   useEffect(() => {
    if (article && article.attributes && article.attributes.Body) {
      setContent(article.attributes.Body); 
    }
  }, [article]);
  return (

    <div>
      {article?.id  ?
       <div className='ThepictureandBody'> 
       <div className='flex  justify-center mb-3'>
       {article?.attributes?.ImagesOfResearch?.data?.attributes?.url ? (
     <Image
       src={article?.attributes?.ImagesOfResearch?.data?.attributes?.url}
       width={400}
       height={580}
       className="w-100 pictureofthearticle  shadow-lg"
       alt="Image-card"
     />
   ) : (
     <div> The article Doesn't have a cover    </div>
   )}
   </div>
     <div className='flex flex-row justify-between'> 
     <h1 className='font-bold mt-3 mb-3' >
       {article?.attributes?.Bbody}
   
     </h1>
     
    
     <h1 className='username_in_articlBody font-bold mt-3 mb-3 mr-5'  >
     {User?.username && User.username.charAt(0).toUpperCase() + User.username.slice(1)}
   
   
     </h1>
     </div>
     {content && <BlocksRenderer content={content} />}
   
   </div>
      :  <SkeletonArticleInfo/>
    }
   
  </div>


  )
}

export default ArticleBody