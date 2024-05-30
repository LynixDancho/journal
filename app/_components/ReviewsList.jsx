import React from 'react'
 import ReviewItems from './ReviewItems'

import { waveform } from "ldrs";

function ReviewsList({articleList}) {
    return (
  <div className='flex flex-col gap-3'>
    {articleList
      .filter(article => article.attributes.isPublished === false && article.attributes.Reviewers !== "None") // Filter articles where isPublished is true
      .map(item => (
        <ReviewItems article={item} key={item.id} />
      ))}
  </div>
    )
  }
  

export default ReviewsList