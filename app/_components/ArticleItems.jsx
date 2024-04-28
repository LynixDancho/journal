import React from 'react'
import Image from 'next/image'
function ArticleItems({article}) {
  return (
    <div className='hover:border p-1 hover:shadow-md  rounded-lg  border-teal-700   hover:cursor-pointer '>  
    
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  
  <Image src={article?.attributes?.ImagesOfResearch?.data?.attributes?.url}
        width={400}
        height={580}
    className='absolute inset-0 h-full w-full object-cover'
  
    alt='Image-card'
    
    />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
      <time datetime="2022-10-10" className="block text-xs text-white/90"> {article?.attributes?.DateofEdition} </time>
<div className='flex align-center'>
      <a href="#" >
        <h3 className=" mt-0.5 text-lg text-white">{article?.attributes?.Title}</h3>
      </a>
      <button
  title="Add New"
  class="group cursor-pointer outline-none ml-5 hover:rotate-90 duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    
    class="stroke-indigo-400 fill-none group-hover:fill-indigo-800 group-active:stroke-indigo-200 group-active:fill-indigo-600 group-active:duration-0 duration-300"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke-width="1.5"
    ></path>
    <path d="M8 12H16" stroke-width="1.5"></path>
    <path d="M12 16V8" stroke-width="1.5"></path>
  </svg>
</button>
</div>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">{article?.attributes?.type?.data?.attributes?.Type}</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        {article?.attributes?.Body}
      </p>
    </div>
  </div>
</article>

    
    </div>
  )
}

export default ArticleItems