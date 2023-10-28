import PostPagination from "@/components/partials/PostPagination";
import Postcard from "@/components/partials/cards/Postcard";
import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { baseUrl } from "@/server";
import { categoryDatatype, postDatatype } from "@/types";
import axios from "axios";
import { capitalize } from "lodash";
import { ParsedUrlQuery } from "querystring";
import DefaultLayout from "@/components/layouts/DefaultLayout";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
// import "./styles.css";

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   const categoriesRequest = await axios.get(
//     `${baseUrl}/wp-json/wp/v2/categories?_embed&per_page=100`
//   );

//   // console.log({ categoriesRequest });
//   const categories: categoryDatatype[] = categoriesRequest.data;
//   const paths = categories.map((category) => {
//     return { params: { slug: category.slug } };
//   });

//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   // const slug = context.params.slug as IParams;
//   const { slug } = context.params as IParams;
//   // console.log({ slug, baseUrl });
//   const categoryRequest = await axios.get(
//     `${baseUrl}/wp-json/wp/v2/categories?slug=${slug}`
//   );
//   console.log({ categoryRequest: categoryRequest.data });
//   const categoryID = categoryRequest.data[0].id;

//   const categoryPostRequest = await axios.get(
//     `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${categoryID}`
//   );

//   console.log({ categoryID, categoryPostRequest });

//   return {
//     props: {
//       category: categoryRequest.data[0],
//       posts: categoryPostRequest.data,
//     },
//     revalidate: 1,
//   };
// };

type Props = {
  posts: postDatatype[];
  category: categoryDatatype;
};

export const getStaticPaths = (async (context) => {
  const categoriesRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/categories?_embed&per_page=100`
  );

  // console.log({ categoriesRequest });
  const categories: categoryDatatype[] = categoriesRequest.data;
  const paths = categories.map((category) => {
    return { params: { slug: category.slug } };
  });

  console.log(paths);
  return {
    paths,
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  // const slug = context.params.slug as IParams;
  const { slug } = context.params as IParams;
  // console.log({ slug, baseUrl });
  // console.log({ slug });
  const categorySlug = slug.split("-").slice(0, -1).join("-");
  // console.log({ categorySlug });
  const categoryRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/categories?slug=${categorySlug}`
  );
  // console.log({ categoryRequest: categoryRequest.data });
  const categoryID = categoryRequest.data[0].id;

  const categoryPostRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${categoryID}`
  );

  // console.log({ categoryID, categoryPostRequest });

  return {
    props: {
      category: categoryRequest.data[0],
      posts: categoryPostRequest.data,
    },
  };
}) satisfies GetStaticProps<{
  posts: postDatatype[];
  category: categoryDatatype;
}>;

const CategoryPage = ({
  posts,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DefaultLayout
      title={`${category.name} Posts`}
      metadescription={category.description}
    >
      <div className="py-10 space-y-8">
        <h1 className="text-3xl font-bold text-center lg:text-5xl">
          Show Posts in{" "}
          <span className="text-primary-full dark:text-secondary-50">
            {capitalize(category.name)}
          </span>{" "}
          Category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
          {posts.map((post: postDatatype) => (
            <Postcard key={post.id} post={post} />
          ))}
        </div>
        <PostPagination />
      </div>
    </DefaultLayout>
  );
};

export default CategoryPage;
