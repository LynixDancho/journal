'use client'
import React, { useEffect, useState } from 'react';
import ArticleApi from '../_utils/ArticleApi';
import IsSentList from './IsSentList';
import { waveform } from "ldrs";

function SentSection() {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);
  waveform.register();

  useEffect(() => {
    getLatestArticles_();
  }, []);

  const getLatestArticles_ = () => {
    ArticleApi.getLatestArticles()
      .then(res => {
        console.log(res.data.data);
        setArticleList(res.data.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false whether fetching succeeds or fails
      });
  };

  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-9 text-2xl font-sans font-bold'>Pending Articles</h2>
      {loading ? (
       <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>
      ) : articleList.length === 0 ? (
        <div>No articles found.</div>
      ) : (
        <IsSentList articleList={articleList} />
      )}
    </div>
  );
}

export default SentSection;
