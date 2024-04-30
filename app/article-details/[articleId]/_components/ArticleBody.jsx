import React from 'react'
import Image from 'next/image'

function ArticleBody({article}) {
  return (
    <div> <Image
    src={article?.attributes?.ImagesOfResearch?.data?.attributes?.url || ''}
    width={400}
    height={580}
    className="w-100 rounded-lg shadow-lg"
    alt="Image-card"
  /></div>
  )
}

export default ArticleBody