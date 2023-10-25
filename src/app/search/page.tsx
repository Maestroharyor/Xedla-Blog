"use client";
import PostPagination from "@/components/partials/PostPagination";
import Postcard from "@/components/partials/cards/Postcard";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchPage = () => {
  const router = useRouter();
  const searchTerm = useSearchParams().get("query");
  const [searchText, setSearchText] = React.useState("");
  console.log(searchTerm);
  return (
    <div className="py-10 space-y-8">
      {searchTerm ? (
        <>
          <h1 className="text-3xl font-bold text-center lg:text-5xl">
            Searching for{" "}
            <span className="text-primary-full dark:text-secondary-50">
              &quot;This&quot;
            </span>{" "}
            in Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
            <Postcard />
            <Postcard />
            <Postcard />
            <Postcard />
          </div>
          <PostPagination />
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
  );
};

export default SearchPage;
