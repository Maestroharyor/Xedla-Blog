"use client";

import { MdArrowUpward } from "react-icons/md";
import { FloatButton } from "antd";

const Backtotop = () => {
  return (
    <FloatButton.BackTop icon={<MdArrowUpward />} className="bg-primary-full">
      <div className="flex items-center justify-center bg-primary text-white hover:bg-primary-hov dark:bg-warning dark:text-dark dark:hover:bg-warning-hov p-3 rounded-full shadow text-lg">
        <MdArrowUpward />
      </div>
    </FloatButton.BackTop>
  );
};

export default Backtotop;
