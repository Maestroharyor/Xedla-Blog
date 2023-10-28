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
import { message } from "antd";
import PageLoader from "@/components/partials/PageLoader";

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
  const totalPostsData = categoryPostRequest.headers["x-wp-total"];
  const totalPagesData = categoryPostRequest.headers["x-wp-totalpages"];

  return {
    props: {
      category: categoryRequest.data[0],
      posts: categoryPostRequest.data || [],
      totalPostsData,
      totalPagesData,
      categoryID,
    },
    revalidate: 10,
  };
}) satisfies GetStaticProps<{
  posts: postDatatype[];
  totalPostsData: number;
  totalPagesData: number;
  category: categoryDatatype;
  categoryID: number;
}>;

const CategoryPage = ({
  posts,
  category,
  totalPagesData,
  totalPostsData,
  categoryID,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [categoryPosts, setCategoryPosts] = useState(posts || []);
  const [ID, setID] = useState(categoryID);
  const [totalPosts, setTotalPosts] = useState(totalPostsData);
  const [totalPages, setTotalPages] = useState(totalPagesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
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
        `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${ID}&page=${
          page || 1
        }&per_page=${perPage || 10}`
      );
      setTotalPages(postsRequest.headers["x-wp-totalpages"]);
      setTotalPosts(postsRequest.headers["x-wp-total"]);
      setCurrentPage(page || 1);
      setPerPage(perPage || 10);
      setCategoryPosts(postsRequest.data);
    } catch (error: any) {
      message.error(
        error?.response?.message || error?.message || "An Error Occured"
      );
    } finally {
      setIsPostsLoading(false);
    }
  };

  useEffect(() => {
    setCategoryPosts(posts || []);
    setID(categoryID);
    setPerPage(10);
    setTotalPosts(totalPostsData);
    setTotalPages(totalPagesData);
    setCurrentPage(1);
    const { page, per_page } = router.query;
    if (page || per_page) {
      fetchPosts({ page: Number(page), perPage: Number(per_page) });
    }
  }, [router.query.slug, router.query]);
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
            {!isPostsLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
                {categoryPosts.map((post: postDatatype) => (
                  <Postcard key={post.id} post={post} />
                ))}
              </div>
            )}
            {isPostsLoading && <PageLoader isCategoryPage />}
            <PageLoader />
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
      </div>
    </DefaultLayout>
  );
};

export default CategoryPage;
