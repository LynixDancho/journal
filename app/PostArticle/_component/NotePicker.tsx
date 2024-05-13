"use client"
import React, { useState } from 'react'
import TipTap from './TipTap'

function NotePicker() {
    
    const [content,setContent] = useState<string>("")
    const handleContentChange = (reason : any) =>{
        setContent(reason)
    }
  return (
    <form   className='max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10'>
        <div className='text-3xl text-center text-sky-300 mb-10'>
            NotePicker
        </div>
    <TipTap   
    content={content}
    onChange={(newContent:string)=> handleContentChange(newContent)}
   />


    </form>

)
}

export default NotePicker