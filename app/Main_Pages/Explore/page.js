"use client";
import React, { useState, useEffect } from "react";
import SearchFunction from "@/components/SearchFunction";
import ExploreList from "@/_components/ExploreList";
import { waveform } from "ldrs";
import Typecomponent from "@/components/Typecomponent";

export default function Explore() {
  const [articleList, setArticleList] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`/api/Search`);
      const articles = await response.json();
      setArticleList(articles.data);
    };
    getArticles();
  }, []);

  useEffect(() => {
    waveform.register(); // Move waveform registration to the client-side context
  }, []);

  if (!articleList) {
    return (
      <div className="flex justify-center h-screen w-full items-center">
        <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
      </div>
    );
  }

  return (
    <div>
      <div className="flex align-top items-center justify-center mt-4">
        <div className="flex justify-center w-full ">
          <h2 className="font-bold font-sans">Explore Articles</h2>
        </div>
        <div className="flex justify-center w-full mr-11 ">
          <SearchFunction getSearchResults={(results) => setArticleList(results)} />
        </div>
        <Typecomponent getTypeResults={(results) => setArticleList(results)} />
      </div>
      <div className="mt-10">
        <ExploreList articleList={articleList} />
      </div>
    </div>
  );
}
