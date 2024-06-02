"use client";

import ArticleApi from "../../_utils/ArticleApi.js";
import React, { useEffect, useState } from "react";
  import { usePathname } from "next/navigation";
  import Articleinfo from "./_components/Articleinfo";
  import ReaderTipTap from "./_components/ReaderTipTap.jsx";
  import { waveform } from "ldrs";



 function Revise({ params }) {
  const path = usePathname();

  waveform.register();

   


  const [articleDetails, setArticleDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const articleResponse = await ArticleApi.getArticleById(params?.Revised);
        
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
    return <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>;
  }
 
  return (
    <>
      <div className="pagecss">
<Articleinfo article={articleDetails} User={userDetails} />
<ReaderTipTap  article={articleDetails}  />
</div>
    </>
  );
}

export default Revise;
