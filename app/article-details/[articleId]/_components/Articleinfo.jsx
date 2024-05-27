 "use client"
 import React from 'react'
import Image from 'next/image'
import '../this_area.css'
import { useEffect,useState } from 'react'
 function Articleinfo({article,User}) {
  const [users,setData] = useState()
   const targetEmail = User.email; 
   const [matchedUser, setMatchedUser] = useState(null);

  useEffect(()=>{
    const getArticles = async () =>{
      const response = await fetch(`/api/ClientAvatar`);
      const userr = await response.json(); 
  
      setData(userr.data);
    }
    getArticles();
  
  },[])
  useEffect(() => {
    if (users) {
      const matchUserByEmail = (email) => {
        return users.find(user => 
          user.emailAddresses && user.emailAddresses.some(e => e.emailAddress === email)
        );
      };

      const matched = matchUserByEmail(targetEmail);
      setMatchedUser(matched);
    }
  }, [users, targetEmail]);

  if(!users) return (
    <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>
  
  )

  console.log(matchedUser)
  return (<>
    <div className='PictureAndBio'> 
    {article   ?    <img
  src={matchedUser?.imageUrl  }
   
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

<div>
 

</div>

    </div>
    </>
  )
}

export default Articleinfo