"use client";
import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

type Props = {};

const BlogShare = ({}: Props) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (window !== undefined) {
      setUrl(window.location.href);
    }
  }, []);
  return (
    <div className="flex flex-row justify-center items-center lg:items-start lg:justify-start lg:flex-col gap-5 lg:sticky top-[120px] h-fit">
      <FacebookShareButton
        url={url}
        className="hover:scale-110 transition duration-300 ease-in-out"
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        className="hover:scale-110 transition duration-300 ease-in-out"
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <TelegramShareButton
        url={url}
        className="hover:scale-110 transition duration-300 ease-in-out"
      >
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>

      <WhatsappShareButton
        url={url}
        className="hover:scale-110 transition duration-300 ease-in-out"
      >
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={url}
        className="hover:scale-110 transition duration-300 ease-in-out"
      >
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
    </div>
  );
};

export default BlogShare;
