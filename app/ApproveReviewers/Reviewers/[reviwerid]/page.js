"use client";

 import ArticleApi from "@/utils/ArticleApi";
import React, { useEffect, useState } from "react";
import Articleinfo from "./_components/Articleinfo";
 import "./this_area.css";
import ReaderTipTap from "./_components/ReaderTipTap.jsx";
import { usePathname } from "next/navigation";
import { waveform } from "ldrs";

 function ArticleDetails({ params }) {
  const path = usePathname();

  waveform.register();

   

  const [Appeal, setProductDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const Appeal = await ArticleApi.getReviwersAppeal(params?.reviwerid);
        console.log(Appeal.data.data[0])
        const userResponse =Appeal?.data.data[0].attributes.Email
          
 
        setProductDetails(Appeal.data.data);
        setUserDetails(userResponse);
      } catch (error) {
        console.error('Error fetching article data:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchArticleData();


  }, [params?.articleId]);
 
  if (loading) {
    return <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>; // Render a loading message or spinner while data is being fetched
  }


  return (
    
    <>
       <div className="pagecss">
        <Articleinfo Appeal={Appeal} User={userDetails} />
        <ReaderTipTap  Appeal={Appeal}  User={userDetails} />
      </div>
    </>
  );
}

export default ArticleDetails;
