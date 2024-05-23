 'use client'

import {React,useState, useEffect} from "react";
import SearchFunction from "@/components/SearchFunction";
import ExploreSection from "@/components/ExploreSection"
import ExploreList from "@/_components/ExploreList";
import { waveform } from "ldrs";

export default     function Explore( ) {
  waveform.register();

  const [articleList,setData] = useState()
useEffect(()=>{
  const getArticles = async () =>{
    const response = await fetch(`/api/Search`);
    const articles = await response.json();   
    setData(articles.data);
  }
  getArticles();

},[])

console.log(articleList)
 
if(!articleList) return (
  <div className="flex justify-center h-screen w-full items-center">  <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform></div>

)


  return (
    <div>
      <div className="flex align-top items-center  justify-center mt-4">
        <div className="flex justify-center   w-full ">
          <h2 className="font-bold  font-sans">Explore Articles</h2>
        </div>
        <div className="flex  justify-center  w-full	mr-11 ">
          <SearchFunction getSearchResults ={(results => setData(results))}/>
        </div>
        <div className="  w-full">
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            {" "}
            Headliner{" "}
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg h-9 border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Please select</option>
            <optgroup label="Natural Sciences:">
              <option value="Chemistry">Chemistry</option>
              <option value="Earth Sciences">
                Earth Sciences (Geology, Geophysics, etc.)
              </option>

              <option value="Environmental">Environmental Sciences</option>

              <option value="Astronomy">Astronomy and Astrophysics</option>

              <option value="Physics">Physics</option>
            </optgroup>

            <optgroup label="Mathematics and Computer Science:">
              <option value="Mathematics">Mathematics </option>
              <option value="Computer"> Computer Science </option>

              <option value="Statistics"> Statistics </option>
            </optgroup>

            <optgroup label="Engineering and Technology:">
              <option value="Mechanical">Mechanical Engineering</option>
              <option value="Electrical">Electrical Engineering</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Aerospace">Aerospace Engineering</option>
              <option value="Chemical">Chemical Engineering</option>
              <option value="Materials">Materials Science</option>
            </optgroup>

            <optgroup
              label="Medical and Health Sciences:">
              <option value="Medicine">Medicine</option>
              <option value="Pharmacology">Pharmacology</option>
              <option value="Public Health">Public Health</option>
              <option value="Nursing">Nursing</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Veterinary Science">Veterinary Science</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="mt-10">
      <ExploreList articleList={articleList} />

      </div>

     </div>
  );
}
