"use client";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import PostPagination from "@/components/partials/PostPagination";
import Postcard from "@/components/partials/cards/Postcard";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { baseUrl } from "@/server";
import { postDatatype } from "@/types";
import { message } from "antd";
import PageLoader from "@/components/partials/PageLoader";

export const getServerSideProps = (async ({ query }) => {
  if (query) {
    const postsRequest = await axios.get(
      `${baseUrl}/wp-json/wp/v2/posts?search=${query}&_embed`
    );
    const totalPostsData = postsRequest.headers["x-wp-total"];
    const totalPagesData = postsRequest.headers["x-wp-totalpages"];
    return {
      props: { posts: postsRequest.data, totalPostsData, totalPagesData },
    };
  }

  return { props: { posts: [], totalPostsData: 1, totalPagesData: 1 } };
}) satisfies GetServerSideProps<{
  posts: postDatatype[];
  totalPostsData: number;
  totalPagesData: number;
}>;

const SearchPage = ({
  posts,
  totalPagesData,
  totalPostsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const searchTerm = useSearchParams().get("query");
  const [searchText, setSearchText] = React.useState("");
  const [allPosts, setAllPosts] = useState(posts);
  const [totalPosts, setTotalPosts] = useState(totalPostsData);
  const [totalPages, setTotalPages] = useState(totalPagesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const fetchPosts = async ({
    page,
    perPage,
  }: {
    page?: number;
    perPage?: number;
  }) => {
    setIsPostsLoading(true);
    try {
      const postsRequest = await axios.get(
        `${baseUrl}/wp-json/wp/v2/posts?_embed&page=${page || 1}&per_page=${
          perPage || 9
        }`
      );
      setTotalPages(postsRequest.headers["x-wp-totalpages"]);
      setTotalPosts(postsRequest.headers["x-wp-total"]);
      setCurrentPage(page || 1);
      setPerPage(perPage || 9);
      setAllPosts(postsRequest.data);
    } catch (error: any) {
      message.error(
        error?.response?.message || error?.message || "An Error Occured"
      );
    } finally {
      setIsPostsLoading(false);
    }
  };

  useEffect(() => {
    const { page, per_page } = router.query;
    if (page || per_page) {
      fetchPosts({ page: Number(page), perPage: Number(per_page) });
    }
  }, [router.query]);

  return (
    <DefaultLayout
      title={searchTerm ? "Search Posts" : `Search Results for ${searchTerm}`}
      metadescription={"Search for..."}
    >
      <div className="py-10 space-y-8">
        {searchTerm && posts.length ? (
          <>
            <h1 className="text-3xl font-bold text-center lg:text-5xl">
              Search results for{" "}
              <span className="text-primary-full dark:text-secondary-50">
                &quot;{searchTerm}&quot;
              </span>{" "}
              in Posts
            </h1>
            {posts.length ? (
              <>
                {" "}
                {!isPostsLoading && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
                    {posts.map((post: postDatatype) => (
                      <Postcard key={post.id} post={post} />
                    ))}
                  </div>
                )}
                {isPostsLoading && <PageLoader isCategoryPage />}
                <PostPagination
                  totalPosts={totalPosts}
                  totalPages={totalPages}
                  currentPage={currentPage}
                  perPage={perPage}
                />
              </>
            ) : (
              <div className="text-lg flex items-center justify-center">
                <p> No posts found...</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="space-y-3 mb-4">
              <h1 className="text-3xl font-bold text-center lg:text-5xl">
                Search for posts
              </h1>
              <p className="text-center text-gray-400 dark:text-gray-200">
                Press Enter to search
              </p>
            </div>
            {searchTerm && !posts.length && (
              <div className="text-lg flex items-center justify-center">
                <p> No posts found...</p>
              </div>
            )}
            <div>
              <div className="relative">
                <label htmlFor="Search" className="sr-only">
                  {" "}
                  Search{" "}
                </label>

                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full rounded-md dark:bg-gray-700 border-gray-200 ring-4 outline-none focus:ring-secondary-50 py-5 px-3  pe-10 shadow-sm sm:text-sm"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      // Redirect to a new route when the Enter key is pressed
                      router.push(`/search?query=${searchText}`);
                    }
                  }}
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default SearchPage;
