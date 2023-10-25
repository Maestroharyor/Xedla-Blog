"use client";
import React from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

const PostPagination: React.FC = () => (
  <div className="flex justify-center pt-10 pb-32">
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
  </div>
);

export default PostPagination;
