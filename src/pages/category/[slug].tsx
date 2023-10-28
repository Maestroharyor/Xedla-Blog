import PostPagination from "@/components/partials/PostPagination";
import Postcard from "@/components/partials/cards/Postcard";
import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { baseUrl } from "@/server";
import { categoryDatatype, postDatatype } from "@/types";
import axios from "axios";
import { capitalize } from "lodash";
import { ParsedUrlQuery } from "querystring";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { useRouter } from "next/router";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  posts: postDatatype[];
  category: categoryDatatype;
};

export const getStaticPaths = (async (context) => {
  const categoriesRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/categories?_embed&per_page=100`
  );
  const categories: categoryDatatype[] = categoriesRequest.data;
  const paths = categories.map((category) => {
    return { params: { slug: category.slug } };
  });

  return {
    paths,
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as IParams;

  const categoryRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/categories?slug=${slug}`
  );

  const categoryID = categoryRequest.data[0].id;

  const categoryPostRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${categoryID}`
  );

  return {
    props: {
      category: categoryRequest.data[0],
      posts: categoryPostRequest.data || [],
    },
    revalidate: 10,
  };
}) satisfies GetStaticProps<{
  posts: postDatatype[];
  category: categoryDatatype;
}>;

const CategoryPage = ({
  posts,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [categoryPosts, setCategoryPosts] = useState(posts || []);
  useEffect(() => {
    setCategoryPosts(posts || []);
  }, [router.query.slug]);
  return (
    <DefaultLayout
      title={`${category?.name || "Category"} Posts`}
      metadescription={category?.description || ""}
    >
      <div className="py-10 space-y-8">
        <h1 className="text-3xl font-bold text-center lg:text-5xl">
          Show Posts in{" "}
          <span className="text-primary-full dark:text-secondary-50">
            {capitalize(category?.name || "")}
          </span>{" "}
          Category
        </h1>
        {posts && posts.length ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
              {categoryPosts.map((post: postDatatype) => (
                <Postcard key={post.id} post={post} />
              ))}
            </div>
            <PostPagination />
          </>
        ) : (
          <div className="text-lg flex items-center justify-center">
            <p> No posts found...</p>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default CategoryPage;
