'use client'

import React, { useEffect, useState } from 'react'
import ReviwerList from "./ReviewerList"
import ArticleApi from "@/utils/ArticleApi"
import { waveform } from "ldrs";

 function ReviewerSection() {
  const [type,setTypeList]=useState([])
  waveform.register();

  const [Reviwer,setReviewer]=useState([])
   useEffect(()=>{
    getReviwersAppeal();

    },[])
    const getReviwersAppeal=()=>{
        ArticleApi.getReviwersAppeal().then(res=>{
            console.log(res.data.data)
            setReviewer(res.data.data)
            


        })



        
    }
  return (
   <> 

    <div className='px-10 md:px-20'>
    <h2 className='my-9 text-2xl font-sans font-bold'> Reviewers to Accept</h2>
    {!Reviwer? (            <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>

) : (
  <ReviwerList Reviwer={Reviwer}/>

)}
</div>
 </>
  )
}

export default ReviewerSection