import React from 'react'
import Image from 'next/image'
import '../this_area.css'

function Articleinfo({article,User}) {
  return (<>
    <div className='PictureAndBio'> 
    {article   ?    <img
  src={User?.avatar?.url  }
   
  className="avatar shadow-lg"
 alt="Avatar"
/> 

:
<div className='w-[200px} h-[225px]
avatar

bg-slate-200 rounded-lg animate-pulse

'
></div>


} 




<h1 className=' SubmittedBy    text-xl font-bold dark:text-white  '>Submitted By : {User?.username}</h1>

    </div>
    </>
  )
}

export default Articleinfo