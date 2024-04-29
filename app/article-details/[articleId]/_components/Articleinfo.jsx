import React from 'react'
import Image from 'next/image'
function Articleinfo({article,User}) {
  return (
    <div>  
 
 
<Image src={article?.attributes?.ImagesOfResearch?.data?.attributes?.url}
        width={400}
        height={580}
        className="w-100 rounded-lg shadow-lg"
  
    alt='Image-card'
    
    />
    {/*  raha tekhdem shahowa khass ghi Ip ta3ref */}
    </div>
  )
}

export default Articleinfo