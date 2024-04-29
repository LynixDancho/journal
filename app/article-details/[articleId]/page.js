'use client'

import BreadCrumb from '@/app/_components/BreadCrumb'
import ArticleApi from '@/app/_utils/ArticleApi'
import React, { useEffect, useState } from 'react'
 import Articleinfo from './_components/Articleinfo'
import ArticleBody from './_components/ArticleBody'

function ArticleDetails({params}) {
  const[userDetails,setUserDetails]=useState({})
  useEffect(()=>{
    getArticleById_()
},[params?.articleId])
  const getArticleById_=()=>{
ArticleApi.getArticleById(params?.articleId).then(res=>{

  console.log('Article item', res.data.data)
  setProductDetails(res.data.data)

})
  }
  const [articleDetails,setProductDetails]=useState({})
  useEffect(()=>{
    getUserById()
},[params?.userId])
  const getUserById=()=>{
ArticleApi.getUserById(params?.userId).then(res=>{

  console.log(' UserData', res.data)
  setUserDetails(res.data)

})
  }
  





  return (
    <div className='px-10 md:px-28 py-8'> 
      <BreadCrumb/>

    <div className='mt-10  justify-around flex flex-col md:flex-row'>
    <Articleinfo article={articleDetails}  User={userDetails} />

    <ArticleBody article={articleDetails}/>

    </div>



    </div>
  )
}

export default ArticleDetails