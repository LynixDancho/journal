import React from 'react'
 import Link from 'next/link';
import Image from 'next/image'

function ReviewItems({Reviwer}) {
  
 


  return (
      <article className="flex bg-white transition hover:shadow-xl">
<div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
  
</div>
<div className="hidden sm:block sm:basis-56">
  <img
    alt=""
    src= "https://thumbs.dreamstime.com/b/appeal-red-rubber-stamp-over-white-background-88070354.jpg"

    className="aspect-square h-full w-full object-cover"
  />
</div>
 

<div className="flex flex-1 flex-col justify-between">
  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
    <a href="#">
      <h3 className="font-bold uppercase text-gray-900">
      {Reviwer?.attributes?.Name}
      </h3>
    </a>

    <h5 className="mt-2 line-clamp-3 text-sm/relaxed  text-black">
    {Reviwer?.attributes?.PlacesWork}

    </h5>
    <p className="mt-2 line-clamp-3 text-sm/relaxed bg-slate-100 w-fit text-gray-800">
    {Reviwer?.attributes?.Type}

    </p>
  </div>

  <div className="sm:flex sm:items-end sm:justify-end">
    <a
      href={`/ApproveReviewers/Reviewers/${Reviwer?.id}`}
      className="block bg-teal-300  px-5 py-3 text-center text-xs font-bold uppercase  text-black  transition hover:bg-teal-400"
    >
      Check information
    </a>
  </div>
</div>
</article> 
  )
  }
  
  export default ReviewItems