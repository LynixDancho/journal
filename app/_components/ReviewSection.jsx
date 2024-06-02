"use client"
import React, { useEffect, useState } from 'react';
import ReviewsList from './ReviewsList';
import ArticleApi from '../_utils/ArticleApi';
import { waveform } from "ldrs";
import { useUser } from "@clerk/clerk-react";

function ReviewSection() {
  const { isSignedIn, user, isLoaded } = useUser();

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    waveform.register();
    getLatestArticles();
  }, []);
console.log(user)
  const getLatestArticles = async () => {
    try {
      const res = await ArticleApi.getLatestArticles();
      setArticleList(res.data.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (!isSignedIn) {
    return <div>Please sign in to view the articles.</div>;
  }

  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-9 text-2xl font-sans font-bold'>Articles To Review</h2>
      {!articleList.length ? (
        <div className="flex justify-center h-screen w-full items-center">
          <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
        </div>
      ) : (
        <ReviewsList articleList={articleList}  />
      )}    
    </div>
  );
}

export default ReviewSection;
