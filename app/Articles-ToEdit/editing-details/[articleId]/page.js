"use client";

import ArticleApi from "../../../_utils/ArticleApi";
import React, { useEffect, useState } from "react";
  import { usePathname } from "next/navigation";
  import Articleinfo from "./_components/Articleinfo";
  import ReaderTipTap from "./_components/ReaderTipTap.jsx";



 function EditingDetails({ params }) {
  const path = usePathname();


   


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
    return <div>Loading...</div>; // Render a loading message or spinner while data is being fetched
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

export default EditingDetails;
