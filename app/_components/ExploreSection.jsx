'use client'

import React, { useEffect, useState } from 'react'
 import ArticleApi from '../_utils/ArticleApi'
import ExploreList from './ExploreList'
 function ExploreSection() {
  const [type,setTypeList]=useState([])
  const [articleList,setArticleList]=useState([])
   useEffect(()=>{
        getLatestArticles_();

    },[])
    const getLatestArticles_=()=>{
        ArticleApi.getLatestArticles().then(res=>{
            console.log(res.data.data)
            setArticleList(res.data.data)
            


        })



        
    }
  return (
   <> 

    <div className='px-10 md:px-20'>
    <h2 className='my-9 text-2xl font-sans font-bold'>Check Our Latest Articles</h2>
    {!articleList? (     <div>loading..</div>

) : (
  <ExploreList articleList={articleList}/>

)}
</div>
 
 </>
  )
}

export default ExploreSection