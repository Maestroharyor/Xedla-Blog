import DefaultLayout from "@/components/layouts/DefaultLayout";
import PageLoader from "@/components/partials/PageLoader";
import PostPagination from "@/components/partials/PostPagination";
import FeaturedPostCard from "@/components/partials/cards/FeaturedPostCard";
import Postcard from "@/components/partials/cards/Postcard";
import { baseUrl } from "@/server";
import { postDatatype } from "@/types";
import { message } from "antd";
import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getStaticProps: GetStaticProps = async (context) => {
  const postsRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/posts?_embed&page=1&per_page=9`
  );
  const totalPostsData = postsRequest.headers["x-wp-total"];
  const totalPagesData = postsRequest.headers["x-wp-totalpages"];
  return {
    props: {
      posts: postsRequest.data,
      totalPostsData,
      totalPagesData,
    },
    revalidate: 10,
  };
};

type Props = {
  posts: postDatatype[];
  totalPostsData: number;
  totalPagesData: number;
};

const Home = ({ posts, totalPostsData, totalPagesData }: Props) => {
  const router = useRouter();
  const [allPosts, setAllPosts] = useState(posts);
  const featuredPost: postDatatype = allPosts[0];
  const remainingPosts: postDatatype[] = allPosts.slice(1);
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

  const changerSizeOptions = [];
  for (let i = 1; i <= 4; i++) {
    changerSizeOptions.push(i * 9);
  }

  return (
    <DefaultLayout>
      {!isPostsLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
          <FeaturedPostCard post={featuredPost} />
          {remainingPosts.map((post) => (
            <Postcard key={post.id} post={post} />
          ))}
        </div>
      )}
      {isPostsLoading && <PageLoader />}
      <PostPagination
        totalPosts={totalPosts}
        totalPages={totalPages}
        currentPage={currentPage}
        changerSizeOptions={changerSizeOptions}
        perPage={perPage}
      />
    </DefaultLayout>
  );
};

export default Home;
