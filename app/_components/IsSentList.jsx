'use client'
import React, { useEffect, useState } from 'react'
import IsSentItems from './IsSentItems'
import { useUser } from "@clerk/nextjs";

function IsSentList({ articleList }) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    // Wait until user data is loaded
    return <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>
  }

  if (!isSignedIn) {
    // Handle case where user is not signed in
    return <div>User is not signed in.</div>;
  }

  if (!user.primaryEmailAddress) {
    // Handle case where primary email address is not available
    return <div>Primary email address not found for user.</div>;
  }

  return (
    <div className='flex flex-col gap-3'>
      {articleList
        .filter(article => 
          article.attributes.IsSent === false && 
          article.attributes.Email === user.primaryEmailAddress.emailAddress
        )  
        .map(item => (
          <IsSentItems article={item} key={item.id} />
        ))}
    </div>
  );
}

export default IsSentList;

