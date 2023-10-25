"use client";

import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdClose, MdSearch, MdSunny } from "react-icons/md";
import SwitchToggle from "./elements/SwitchToggle";
import { useRouter } from "next/navigation";

const HeaderActions = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();
  return (
    <>
      <div className="flex gap-3">
        <button
          className="text-3xl text-gray-400 dark:hover:text-secondary-50 hover:text-gray-800 transition-all duration-300 ease-in-out"
          onClick={() => setIsSearchOpen(true)}
          aria-label="Open Search"
        >
          <MdSearch />
        </button>
        <SwitchToggle />
      </div>
      {isSearchOpen && (
        <form className="absolute w-full h-fit bg-white dark:bg-gray-700 flex px-5 py-2">
          <input
            type="text"
            className="py-5 px-2 flex-1 outline-none text-xl text-gray-500 dark:text-gray-200 dark:bg-transparent"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Redirect to a new route when the Enter key is pressed
                router.push(`/search?query=${searchText}`);
              }
            }}
          />
          <button
            className="text-2xl text-gray-400 dark:hover:text-secondary-50 hover:text-gray-800 transition-all duration-300 ease-in-out"
            aria-label="Close Search"
            onClick={() => setIsSearchOpen(false)}
          >
            <MdClose />
          </button>
        </form>
      )}
    </>
  );
};

export default HeaderActions;
