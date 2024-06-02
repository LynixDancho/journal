"use client"; // Ensure this component runs on the client-side

import React from 'react'
 import NotePicker from './_component/NotePicker'
 import {  useUser, useClerk } from '@clerk/nextjs';
 import { useRouter } from 'next/navigation'

    function PostArticle() {
 
 
  return (
    <div>
       
  <NotePicker/>
 </div>

 
  )
  
 
}

export default PostArticle