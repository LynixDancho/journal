import { NextResponse } from "next/server";

async function fetchArticles() {
  const response = await fetch("http://localhost:1337/api/articles?populate=*", { cache: 'no-store' ,
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const articles = await response.json();
  return articles;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is missing" }, { status: 400 });
  }

  const articles = await fetchArticles();

  const filteredArticles = articles.data.filter((article) =>
    article.attributes.Title.toLowerCase().includes(query.toLowerCase()) ||
    article.attributes.Description_Of_The_Research.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filteredArticles);
}
