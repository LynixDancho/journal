 "use client"
 import React from 'react'
import Image from 'next/image'
import '../this_area.css'
import { useUser } from "@clerk/clerk-react";
import { useEffect,useState } from 'react'
 function Articleinfo({article,User}) {
  const [users,setData] = useState()
   const targetEmail = User.email; 
   const [matchedUser, setMatchedUser] = useState(null);
   const [isLiked, setIsLiked] = useState(false);
   const [numberOfLikes, setNumberOfLikes] = useState(Number(article.attributes.NumberofLikes));
   const { isSignedIn, user, isLoaded } = useUser();
   const Checking = article.attributes.UsersLikedit.split(',');


  

 
  useEffect(()=>{
    const getprofilepicture = async () =>{
      const response = await fetch(`/api/ClientAvatar`);
      const userr = await response.json(); 
  
      setData(userr.data);
    }
    getprofilepicture();
  
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
  useEffect(() => {
    const likedUsers = article.attributes.UsersLikedit.split(',');
    setIsLiked(likedUsers.includes(user?.primaryEmailAddress.emailAddress));
  }, [article.attributes.UsersLikedit, user?.primaryEmailAddress.emailAddress]);
  

  const handleLikeChange = async (e) => {
    if(!isSignedIn){
       window.location.href = 'http://localhost:3000/sign-in';



    }
    
    let likedUsers = article.attributes.UsersLikedit || ''; // Initialize with an empty string if it's null or undefined
    const userEmail = user.primaryEmailAddress.emailAddress;
  

    if (e.target.checked) {
    
      likedUsers = likedUsers ? likedUsers + ',' + userEmail : userEmail;      
      const Likes = {
        data: {
          UsersLikedit: likedUsers,
          
            NumberofLikes :  numberOfLikes + 1  
          },
      };
      setNumberOfLikes(numberOfLikes + 1)
      try {
        const response = await fetch(`http://localhost:1337/api/articles/${article.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Likes),
        });
   
        if (!response.ok) {
          throw new Error("Failed to create article");
        }
       
   
       } catch (error) {
        console.error("Error creating article:", error);
      }

       setIsLiked(true);
    } else {
      
      likedUsers = likedUsers.replace(new RegExp(userEmail + ',', 'g'), ''); // Remove email followed by a comma
      likedUsers = likedUsers.replace(new RegExp(userEmail + '$'), ''); // Remove email at the end of the string
      // Remove any leading or trailing commas
      likedUsers = likedUsers.replace(/^,|,$/g, '');   
      const Likes = {
        data: {
          UsersLikedit: likedUsers,

            NumberofLikes : numberOfLikes -1  
          },
      };
      setNumberOfLikes(numberOfLikes - 1)
  
      try {
        const response = await fetch(`http://localhost:1337/api/articles/${article.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Likes),
        });
   
        if (!response.ok) {
          throw new Error("Failed to create article");
        }
   
       } catch (error) {
        console.error("Error creating article:", error);
      }
       setIsLiked(false);
    }
  };  



console.log(article.attributes.UsersLikedit)
   if(!users && !user) return (
    <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>
  
  )

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
<div className='flex mt-5 '>
<div className="comment-react mr-4">
  <label className="heart-container">
    <input type="checkbox" className="checkbox"  checked={isLiked}
                onChange={handleLikeChange} />
    <div className="svg-container">
      <svg
        className="svg-outline"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
          stroke="#707277"
          stroke-width="2"
          stroke-linecap="round"
          fill="none"
        ></path>
      </svg>
      <svg
        className="svg-filled"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
          stroke="#707277"
          stroke-width="2"
          stroke-linecap="round"
          fill="#707277"
        ></path>
      </svg>
      <svg
        className="svg-celebrate"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
       </svg>
    </div>
  
  </label>
  </div>
  <span className='ml-2'>{numberOfLikes}</span>

</div>



    </div>
    </>
  )
}

export default Articleinfo