import Link from "next/link";
import React from "react";
import Image from "next/image";

const Postcard = () => {
  function generateRandomPaddedNumber(min: number, max: number): string {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // Use string padding to add leading zeros if necessary
    return randomNumber.toString().padStart(2, "0");
  }

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <Link href={"/post/post-1"}>
        <figure className="rounded overflow-hidden w-full h-[300px]  relative">
          <Image
            alt="Xedla Pay"
            src={`/img/posts/${generateRandomPaddedNumber(1, 6)}.webp`}
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

export default Postcard;
