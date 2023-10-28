"use client";
import React from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useRouter } from "next/router";

const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
  current,
  pageSize
) => {
  // console.log(current, pageSize);
};

type Props = {
  totalPosts: number;
  totalPages: number;
  currentPage?: number;
  perPage?: number;
  changerSizeOptions?: number[];
};
const PostPagination: React.FC<Props> = ({
  totalPages,
  totalPosts,
  currentPage,
  perPage,
  changerSizeOptions,
}: Props) => {
  const router = useRouter();

  const redirectToPage = ({
    page,
    perPage,
  }: {
    page?: number;
    perPage?: number;
  }) => {
    const { query } = router;
    const updatedQuery: any = { ...query };
    if (page) updatedQuery.page = page;
    if (perPage) updatedQuery.per_page = perPage;
    const queryParams = new URLSearchParams(
      updatedQuery as Record<string, string>
    ).toString();
    const newUrl = `${router.pathname}?${queryParams}`;
    router.push(newUrl, undefined, { shallow: true });
  };
  return (
    <div className="flex justify-center pt-10 pb-32">
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        onChange={(page, pageSize) =>
          redirectToPage({ page, perPage: pageSize })
        }
        current={currentPage || 1}
        total={totalPosts}
        pageSize={perPage || 10}
        pageSizeOptions={changerSizeOptions || [10, 20, 30, 40, 50, 100]}
      />
    </div>
  );
};

export default PostPagination;
