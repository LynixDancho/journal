"use client"
import React, { useEffect, useState } from 'react'
import ReviewsList from './ReviewsList.jsx'
import ArticleApi from '../_utils/ArticleApi'
import { waveform } from "ldrs";
 

function ReviewSection() {
    const [type,setTypeList]=useState([])
  waveform.register();

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
    <h2 className='my-9 text-2xl font-sans font-bold'>Articles To Review</h2>
    {!articleList? (            <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>

) : (
  <ReviewsList articleList={articleList}/>

)}
</div>
 </>
       )
 
}
export default ReviewSection;