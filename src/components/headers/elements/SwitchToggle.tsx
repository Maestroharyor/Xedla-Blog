"use client";
import { Switch } from "antd";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const SwitchToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(
      (localStorage && localStorage?.theme === "dark") ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  React.useEffect(() => {
    // Update the "dark" class on the document element based on the state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      // Switch to light mode
      localStorage.theme = "light";
    } else {
      // Switch to dark mode
      localStorage.theme = "dark";
    }

    // Update the state to reflect the new theme
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch
      checkedChildren={<MdSunny className="mt-[5px]" />}
      unCheckedChildren={<FaMoon className="mt-[10px]" />}
      checked={!isDarkMode}
      defaultChecked
      onChange={toggleDarkMode}
      className="bg-gray-500"
    />
  );
};

export default SwitchToggle;
