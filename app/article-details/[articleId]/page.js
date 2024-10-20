"use client";

import BreadCrumb from "../../_components/BreadCrumb.jsx";
import ArticleApi from "../../_utils/ArticleApi";
import React, { useEffect, useState } from "react";
import Articleinfo from "./_components/Articleinfo";
 import "./this_area.css";
import ReaderTipTap from "./_components/ReaderTipTap.jsx";
import { usePathname } from "next/navigation";
import { waveform } from "ldrs";

 function ArticleDetails({ params }) {
  const path = usePathname();

  waveform.register();

   


  const [articleDetails, setProductDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const articleResponse = await ArticleApi.getArticleById(params?.articleId);
   
        const userResponse = await ArticleApi.getUserById(
          articleResponse?.data.data.attributes.users_permissions_user.data.id
        );

        setProductDetails(articleResponse.data.data);
        setUserDetails(userResponse.data);
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
      <BreadCrumb path={path} />
      <div className="pagecss">
        <Articleinfo article={articleDetails} User={userDetails} />
        <ReaderTipTap  article={articleDetails}  />
      </div>
    </>
  );
}

export default ArticleDetails;
