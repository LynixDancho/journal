import Image from "next/image";
import Hero from "./_components/Hero";
import ArticleList from "./_components/ArticleList";
import ArticleSection from "./_components/ArticleSection";
export const metadata = {
    title:"Nibras"



};
export default function Home() {
  return (
   <div>
     <Hero />
     <ArticleSection/>
    </div>
  );
}
