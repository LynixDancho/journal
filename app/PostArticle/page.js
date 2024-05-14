import React from 'react'
import NotePicker from './_component/NotePicker'
import { getUser, auth, currentUser } from "@clerk/nextjs/server";
 async function PostArticle() {
    const { userId } = auth();
    if (!userId) {
      <div> You are Not Logged In </div>
    }
  
    // Get the Backend API User object when you need access to the user's information
    const user = await currentUser()
    console.log(user)

   return (
    <div>
      <div> 
        {user.id}
      </div>
 
<NotePicker/>
 













    </div>
  )
}

export default PostArticle