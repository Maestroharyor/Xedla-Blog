"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderActions from "./HeaderActions";
import { categoryMenu } from "@/data";
import { MdClose, MdMenu, MdSearch } from "react-icons/md";
import SwitchToggle from "./elements/SwitchToggle";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="flex items-center justify-between max-w-[1000px] mx-auto lg:hidden py-4 sticky top-0 bg-white px-5 sm:px-10 z-10 dark:bg-gray-700 ">
      <Link href={"/"}>
        <Image
          alt="Xedla Pay"
          src={"/img/brand/Xedla Logo.png"}
          width={100}
          height={44}
          className="dark:hidden"
        />
        <Image
          alt="Xedla Pay"
          src="/img/brand/Xedla Logo Footer.png"
          width={44}
          height={44}
          className="hidden dark:block"
        />
      </Link>

      <div className="flex gap-3 items-center">
        <SwitchToggle />
        <button
          className="bg-primary-full dark:bg-gray-200 rounded text-2xl p-3 text-white dark:text-primary-full"
          aria-label="Open Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <MdMenu />
        </button>
      </div>

      <div
        className={`fixed flex flex-col gap-3 w-full h-full bg-white dark:bg-gray-700 left-0 top-0 lg:hidden transition-all duration-300 ease-in-out px-5 sm:px-10 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-[100vw]"
        }`}
      >
        <div className="flex items-center justify-between dark:text-white text-3xl py-8 ">
          <Link href={"/"}>
            <Image
              alt="Xedla Pay"
              src={"/img/brand/Xedla Logo.png"}
              width={100}
              height={44}
              className="dark:hidden"
            />
            <Image
              alt="Xedla Pay"
              src="/img/brand/Xedla Logo Footer.png"
              width={44}
              height={44}
              className={`hidden dark:block`}
            />
          </Link>

          <button onClick={() => setIsMenuOpen(false)}>
            <MdClose />
          </button>
        </div>
        <div>
          <nav className="flex flex-col  divide-y dark:divide-gray-500">
            {categoryMenu.map((item) => (
              <div key={item.name}>
                <Link
                  href={`/category/${item.link}`}
                  className="group py-8 flex gap-1 items-center relative text-primary-full dark:text-gray-100 dark:hover:text-secondary-50 hover:text-primary-100 transition-all duration-300 ease-in-out"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <p className="text-base  ">{item.name}</p>
                </Link>
              </div>
            ))}
          </nav>

          <Link
            href={"/search"}
            className="flex justify-between items-center border border-gray-300 text-gray-400 dark:border-gray-500 rounded dark:text-gray-300 py-4 px-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <p>Search...</p>
            <MdSearch />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
