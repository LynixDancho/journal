import { NextResponse } from "next/server";

async function FetchArticle() {
  const response = await fetch("http://localhost:1337/api/articles?populate=*", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c6e5e38aff861bb8070faf66cf734009dae55046ad2488341b7eaeb68990a1aadaf547b9af02c11bb9c6ac57e8b8c46889655ad18c306c24797a5ae6b019725aa65a3c4239c717eb1acd6f497d66f6810a8428a234845e82ce802b7c307b2c464f3cc15c0e269a3f885a584f208ac6f843f9938fdf0d961f530c2073ad9ffbc3",
      "X-RapidAPI-Host": "http://localhost:1337",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    }
  });
  const articles = await response.json();
  return articles;
}

export async function GET(request) {
  const articles = await FetchArticle();
  return NextResponse.json(articles, {
    headers: {
      // Set cache-control header to enable caching for a specified duration
      "Cache-Control": "max-age=60", // Cache response for 1 hour (adjust as needed)
    },
  });
}