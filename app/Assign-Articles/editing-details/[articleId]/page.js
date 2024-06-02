"use client";

import ArticleApi from "../../../_utils/ArticleApi";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AssignRole from "./_components/AssignRole.jsx";
import Articleinfo from "./_components/Articleinfo";
import { waveform } from "ldrs";
import ReaderTipTap from "./_components/ReaderTipTap"

 function EditingDetails({ params }) {
  const path = usePathname();
  waveform.register();


   


  const [articleDetails, setArticleDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const articleResponse = await ArticleApi.getArticleById(params?.articleId);
        
        setArticleDetails(articleResponse.data.data);
        const userResponse = await ArticleApi.getUserById(           articleResponse?.data.data.attributes.users_permissions_user.data.id
        );

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
    return  <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div> // Render a loading message or spinner while data is being fetched
  }
 
  return (
    <>
      <div className="pagecss">
<Articleinfo article={articleDetails} User={userDetails} />
<ReaderTipTap article={articleDetails} User={userDetails}/>
 <AssignRole article={articleDetails} />
 
 </div>
    </>
  );
}

export default EditingDetails;
