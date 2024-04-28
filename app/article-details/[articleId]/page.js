import React from 'react'

function ArticleDetails({params}) {
  return (
    <div>{params?.articleId}</div>
  )
}

export default ArticleDetails