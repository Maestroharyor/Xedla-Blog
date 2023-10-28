import React from "react";

type Props = {
  isCategoryPage?: boolean;
};
const PageLoader = ({ isCategoryPage }: Props) => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-x-10 gap-y-16 py-10 md:grid-cols-2">
      {!isCategoryPage && (
        <div className="md:col-span-2 space-y-4">
          <div className="h-[300px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[30px] w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="space-y-3">
            <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      )}
      <div className="space-y-4">
        <div className="h-[300px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-[30px] w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="space-y-3">
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-[300px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-[30px] w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="space-y-3">
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-[300px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-[30px] w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="space-y-3">
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-[300px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-[30px] w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="space-y-3">
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      {isCategoryPage && (
        <>
          {" "}
          <div className="space-y-4">
            <div className="h-[300px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-[30px] w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-3">
              <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-[300px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-[30px] w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-3">
              <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-[10px] w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PageLoader;
