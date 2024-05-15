 
 import Hero from "./_components/Hero";
 import ArticleSection from "./_components/ArticleSection";
import AdduserstoSTrapi from "./_components/AdduserstoSTrapi";
import {  currentUser } from "@clerk/nextjs/server";
 

export default async function Home() {
   
const user=await currentUser()

  
  



  return (

   <div>
    <div>  </div>
    <AdduserstoSTrapi/>
     <Hero />
     <ArticleSection/>
    </div>
  );
}
