import PostPagination from "@/components/partials/PostPagination";
import Postcard from "@/components/partials/cards/Postcard";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center lg:text-5xl">
        Show Posts in <span className="text-primary-full">This</span> Category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
      </div>
      <PostPagination />
    </div>
  );
};

export default CategoryPage;
