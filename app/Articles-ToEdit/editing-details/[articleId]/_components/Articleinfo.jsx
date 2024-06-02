"use client"
import React from 'react'
import Image from 'next/image'
import '../this_area.css'
import Comment from "../../../../Articles-ToReview/[Revised]/_components/Comment"
  import { useEffect,useState } from 'react'

function Articleinfo({article,User}) {
  const [users,setData] = useState()
  const targetEmail = User.email; 
  const [comments, setComments] = useState([]);

  const [matchedUser, setMatchedUser] = useState(null);
  const addComment = () => {
    const newComment = {
      id: Date.now(),
      text: "",
      checked: false,
    };
    setComments([...comments, newComment]);
  };
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

   return (<>
    <div className='PictureAndBio'> 
    {article   ?    <img
  src={matchedUser?.imageUrl  }
   
  className="avatar shadow-lg"
 alt="There is no avatar"
/> 

:
<div className='w-[200px} h-[225px]
avatar
ml-2
bg-slate-200 rounded-lg animate-pulse

'
></div>


} 




<h1 className=' SubmittedBy    text-xl font-bold dark:text-white  '>Submitted By : {User?.username}</h1>

<div className="mb-4 mt-4">
          <button
            onClick={addComment}
            className="p-2 bg-green-500 text-white rounded-full"
          >
            + Add Comment
          </button>
        </div>
{comments.map((comment, index) => (
            <Comment
              key={comment.id}
              article={article}
              User={User} // Pass User prop to Comment
            />
          ))}
     </div>
    </>
  )
}

export default Articleinfo