import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPostCard = () => {
  return (
    <div className="md:col-span-2 flex flex-col gap-y-4">
      <Link href={"/post/post-1"}>
        <figure className="rounded overflow-hidden w-full lg:w-[930px] h-[320px] lg:h-[470px] relative">
          <Image
            alt="Xedla Pay"
            src="/img/posts/featuredImage.webp"
            fill={true}
            className="object-cover"
          />
        </figure>
      </Link>
      <div className="flex text-gray-500 dark:text-gray-200 gap-4 text-base">
        <p>3 Apr 2023</p>{" "}
        <Link
          href={"/"}
          className="flex gap-1 hover:text-primary-full dark:hover:text-secondary-70 transition-all duration-300 ease-in-out"
        >
          <span>▣</span>
          <span>App Updates</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <Link
          href={"/post/post-1"}
          className="text-primary-full hover:text-purple-700 dark:text-secondary-40 dark:hover:text-secondary-70 text-3xl font-bold transition-all duration-300 ease-in-out"
        >
          <h3>How to make toys from old Olarpaper</h3>
        </Link>
        <p className="">
          Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
          Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus
          vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan...
        </p>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
