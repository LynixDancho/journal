'use client'

import React, { useEffect } from 'react'
import ArticleList from './ArticleList'
import ArticleApi from '../_utils/ArticleApi'
function ArticleSection() {
    useEffect(()=>{
        getLatestArticles_();

    },[])
    const getLatestArticles_=()=>{
        ArticleApi.getLatestArticles().then(res=>{
            console.log(res.data.data)




        })



        
    }
  return (
   
    <div><ArticleList/></div>
  )
}

export default ArticleSection