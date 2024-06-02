import React from 'react'
 import ReviewItems from './Reviweritem'

import { waveform } from "ldrs";

function ReviwerList({Reviwer}) {
    return (
  <div className='flex flex-col gap-3'>
    {Reviwer
      .filter(Reviwer => Reviwer.attributes.EditorApproval === false ) // Filter articles where isPublished is true
      .map(item => (
        <ReviewItems Reviwer={item} key={item.id} />
      ))}
  </div>
    )
  }
  

export default ReviwerList