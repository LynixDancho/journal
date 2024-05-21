import React from 'react'
import EditingItems from './EditingItems'

  
function EditingList({articleList}) {
  return (
<div className='flex flex-col gap-3'>
  {articleList
    .filter(article => article.attributes.isPublished === false) // Filter articles where isPublished is true
    .map(item => (
      <EditingItems article={item} key={item.id} />
    ))}
</div>
  )
}

export default EditingList