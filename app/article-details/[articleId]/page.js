'use client'

import BreadCrumb from '../../_components/BreadCrumb.jsx'
import ArticleApi from '../../_utils/ArticleApi'
import React, { useEffect, useState } from 'react'
 import Articleinfo from './_components/Articleinfo'
import ArticleBody from './_components/ArticleBody'
import './this_area.css'
import { usePathname } from 'next/navigation'
function ArticleDetails({params}) {
  const path =usePathname();
  
  const [articleDetails,setProductDetails]=useState({})
  const[userDetails,setUserDetails]=useState({})
  useEffect(()=>{
    getArticleById_()
},[params?.articleId])
  const getArticleById_=()=>{
ArticleApi.getArticleById(params?.articleId).then(res=>{
   console.log('Article item', res.data.data)
  setProductDetails(res.data.data)
  ArticleApi.getUserById(res?.data.data.attributes.users_permissions_user.data.id).then(res=>{

    setUserDetails(res.data)
    console.log("test ", res.data)



  })
 
})
  }
   
  





  return (
    <> <BreadCrumb  path={path}/>
    
     

    <div className='pagecss'>
    <Articleinfo article={articleDetails}  User={userDetails} />

    <ArticleBody article={articleDetails} User={userDetails}/>

    </div>



   
    </>
  )
}

export default ArticleDetails