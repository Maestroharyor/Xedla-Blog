"use client";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="grid h-full py-20 px-4 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 dark:text-gray-600 text-7xl">
          An Error Occured
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-secondary-50 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-200">
          Looks like an error occured or you are currently offline.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary-full dark:bg-secondary-50 dark:text-gray-800 rounded hover:bg-primary-700 focus:outline-none focus:ring transition-all duration-300 ease-in-out"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
