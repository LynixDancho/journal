import Image from "next/image";
import Hero from "./_components/Hero";
import ArticleList from "./_components/ArticleList";
import ArticleSection from "./_components/ArticleSection";
import {currentUser} from "@clerk/nextjs/server"
import { SignInButton } from "@clerk/nextjs";
export const metadata = {
    title:"Nibras"



};
export default async function Home() {
  const user = await currentUser();
  return (
   <div>
 
    <Hero />
     <ArticleSection/>
    </div>
  );
}
