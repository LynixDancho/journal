import React from 'react'
import Image from 'next/image'
function Articleinfo({article,User}) {
  return (
    <div>  
 <img
  src={User?.avatar?.url  }
   
  className="w-52 h-52 rounded-full"
 alt="Avatar"
/>

<h1 className='mt-4  text-xl font-bold tracking-wide'>Submitted By : {User?.username}</h1>

 


    </div>
  )
}

export default Articleinfo