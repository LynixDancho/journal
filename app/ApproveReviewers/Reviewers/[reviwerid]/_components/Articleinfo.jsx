"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../this_area.css';

function Articleinfo({ Appeal, User }) {
  const [users, setData] = useState([]);
  const [matchedUser, setMatchedUser] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`/api/ClientAvatar`);
      const userr = await response.json(); 
      setData(userr.data);
    };
    getArticles();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const matchUserByEmail = (email) => {
        return users.find(user => 
          user.emailAddresses && user.emailAddresses.some(e => e.emailAddress === email)
        );
      };

      const matched = matchUserByEmail(User);
      setMatchedUser(matched);
    }
  }, [users, User]);

  if (!users || users.length === 0 || !matchedUser) {
    return (
      <div className="flex justify-center h-screen w-full items-center">  
        <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
      </div>
    );
  }
   return (
    <>
      <div className='PictureAndBio'> 
        {Appeal ? 
          <img
            src={matchedUser?.imageUrl ?? ''}
            className="avatar shadow-lg"
            alt="Avatar"
          />
          :
          <div className='w-[200px] h-[225px] avatar bg-slate-200 rounded-lg animate-pulse'></div>
        } 

        <h1 className='SubmittedBy text-xl font-bold dark:text-white'>Submitted By: {matchedUser.firstName} {matchedUser.lastName}</h1>

        <div>
          {/* Other content goes here */}
        </div>
      </div>
    </>
  );
}

export default Articleinfo;
