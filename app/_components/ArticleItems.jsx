import React from "react";
import Image from "next/image";
import Link from "next/link";

function ArticleItems({ article }) {
  return (
    <Link
      href={`/article-details/${article?.id}`}
      className="hover:border p-1 hover:shadow-md  rounded-lg  border-teal-700   hover:cursor-pointer "
    >
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          src={article?.attributes?.ImagesOfResearch?.data?.attributes?.url}
          width={400}
          height={580}
          className="absolute inset-0 h-full w-full object-cover"
          alt="Image-card"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-white/90">
              {" "}
              {article?.attributes?.publishedAt}{" "}
            </time>
            <div className="flex align-center">
              <a href="#">
                <h3 className=" mt-0.5 text-lg text-white">
                  {article?.attributes?.Title}
                </h3>
              </a>
          
            </div>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">
                {article?.attributes?.Type}
              </h3>
            </a>
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">
                {" "}
                Published by :{" "}
                {
                  article?.attributes?.users_permissions_user?.data?.attributes
                    ?.username
                }
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              {article?.attributes?.Description_Of_The_Research}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ArticleItems;
