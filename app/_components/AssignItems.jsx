import React from 'react'
 import Link from 'next/link';
import Image from 'next/image'

function AssignItems({article}) {
  const dateStr = article?.attributes?.publishedAt;
  const date = new Date(dateStr);
  
   const year = date.getFullYear();
  const month = date.getMonth() + 1; // Note: Months are zero-based, so add 1 to get the correct month
  const day = date.getDate();
  
  // Format month and day with leading zeros if needed
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  
  // Create formatted date string with year, month, and day
  const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;


  return (
 <article className="flex bg-white transition hover:shadow-xl">
<div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
<time
 dateTime="2022-10-10"
    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
  >
    <span>{year}</span>
    <span className="w-px flex-1 bg-gray-900/10"></span>
    <span> {formattedDay}-{formattedMonth}</span>
  </time>
</div>

<div className="hidden sm:block sm:basis-56">
  <img
    alt=""
    src= {article?.attributes?.ImagesOfResearch?.data?.attributes?.url}

    className="aspect-square h-full w-full object-cover"
  />
</div>

<div className="flex flex-1 flex-col justify-between">
  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
    <a href="#">
      <h3 className="font-bold uppercase text-gray-900">
      {article?.attributes?.Title}
      </h3>
    </a>

    <h5 className="mt-2 line-clamp-3 text-sm/relaxed  text-black">
    {article?.attributes?.Description_Of_The_Research}

    </h5>
    <p className="mt-2 line-clamp-3 text-sm/relaxed bg-slate-100 w-fit text-gray-800">
    {article?.attributes?.Type}

    </p>
  </div>

  <div className="sm:flex sm:items-end sm:justify-end">
    <a
      href={`/Assign-Articles/editing-details/${article?.id}`}
      className="block bg-teal-300  px-5 py-3 text-center text-xs font-bold uppercase  text-black  transition hover:bg-teal-400"
    >
        Assign Roles to this Article
    </a>
  </div>
</div>
</article> 
  )
  }
  
  export default AssignItems