import DefaultLayout from "@/components/layouts/DefaultLayout";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <DefaultLayout title="Page Not Found">
      <div className="grid h-full py-20 px-4 place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-secondary-50 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500 dark:text-gray-200">
            We can&apos;t find that page.
          </p>

          <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary-full rounded hover:bg-primary-700 focus:outline-none focus:ring transition-all duration-300 ease-in-out"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NotFound;
