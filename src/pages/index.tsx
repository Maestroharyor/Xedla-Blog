import DefaultLayout from "@/components/layouts/DefaultLayout";
import PostPagination from "@/components/partials/PostPagination";
import FeaturedPostCard from "@/components/partials/cards/FeaturedPostCard";
import Postcard from "@/components/partials/cards/Postcard";
import { baseUrl } from "@/server";
import { postDatatype } from "@/types";
import axios from "axios";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  const postsRequest = await axios.get(
    `${baseUrl}/wp-json/wp/v2/posts?_embed&per_page=9`
  );

  return {
    props: {
      posts: postsRequest.data,
    },
    revalidate: 10,
  };
};

type Props = {
  posts: postDatatype[];
};

const Home = ({ posts }: Props) => {
  const featuredPost: postDatatype = posts[0];
  const remainingPosts: postDatatype[] = posts.slice(1);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
        <FeaturedPostCard post={featuredPost} />
        {remainingPosts.map((post) => (
          <Postcard key={post.id} post={post} />
        ))}
      </div>
      <PostPagination />
    </DefaultLayout>
  );
};

export default Home;
