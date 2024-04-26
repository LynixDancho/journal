import Image from "next/image";
import Hero from "./_components/Hero";
import ArticleCards from "./_components/Articles/ArticleCards";
export const metadata = {
    title:"Nibras"



};
export default function Home() {
  return (
   <div>
     <Hero />
     <ArticleCards/>
   </div>
  );
}
