'use client'

import React, { useEffect, useState } from 'react'
import EditingList from './EditingList.jsx'
import ArticleApi from '../_utils/ArticleApi'
import { waveform } from "ldrs";
import AssignItems from "@/components/AssignItems"
 function EditingSection() {
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
    <h2 className='my-9 text-2xl font-sans font-bold'> Assign Reviewers </h2>
    {!articleList? (            <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>

) : (
<div className='flex flex-col gap-3'>
  {articleList
    .filter(article => article.attributes.isPublished === false && article.attributes.Reviewers === "None") // Filter articles where isPublished is true
    .map(item => (
      <AssignItems article={item} key={item.id} />
    ))}
</div>
)}
</div>
 </>
  )
}

export default EditingSection