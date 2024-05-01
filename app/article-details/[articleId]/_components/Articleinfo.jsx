import React from 'react'
import Image from 'next/image'
import '../this_area.css'

function Articleinfo({article,User}) {
  return (<>
    <div className='PictureAndBio'>  
 <img
  src={User?.avatar?.url  }
   
  className="avatar shadow-lg"
 alt="Avatar"
/>
<h1 className=' SubmittedBy    text-xl font-bold dark:text-white  '>Submitted By : {User?.username}</h1>

    </div>
    </>
  )
}

export default Articleinfo