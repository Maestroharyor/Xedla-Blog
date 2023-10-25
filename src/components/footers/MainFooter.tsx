import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { footerMenu } from "@/data";

const MainFooter = () => {
  const socialIconLinks = [
    {
      title: "Facebook",
      link: "https://web.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/",
      icon: <FaTwitter />,
    },

    {
      title: "Linkedin",
      link: "https://www.linkedin.com/",
      icon: <FaLinkedinIn />,
    },
    {
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=2348087614841&text=Hello,%20I%20would%20like%20to%20make%20enquiries%20about",
      icon: <FaWhatsapp />,
    },
  ];
  return (
    <footer>
      <div className="bg-primary-full text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center text-teal-600">
            <Link href={"/"}>
              <Image
                alt="Xedla Pay"
                src="/img/brand/Xedla Logo Footer.png"
                width={60}
                height={60}
              />
            </Link>
          </div>

          <p className="mx-auto  max-w-[660px] text-xl text-center leading-relaxed text-gray-300">
            Xedla offers seamless and secure financial transactions for your
            personal and business needs while providing the trust both parties
            needs.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 py-5 md:py-3">
            {footerMenu.map((item) => (
              <div key={item.link}>
                <Link
                  href={item.link}
                  target={item.isExternal ? "_blank" : "_self"}
                  className="group lg:py-6 flex gap-1 items-center relative  transition-all duration-300 ease-in-out text-gray-300 hover:text-secondary-60"
                >
                  <p className="text-base">{item.name}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex gap-5 justify-center">
            {socialIconLinks.map((menu, index) => (
              <Tooltip title={menu.title} placement="bottom" key={menu.link}>
                <a
                  href={menu.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-primary-full w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  aria-label={`${menu.title} link`}
                >
                  {menu.icon}
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link href={"/"}>
                <Image
                  alt="Xedla Pay"
                  src="/img/brand/Xedla Logo.png"
                  width={100}
                  height={24}
                  className="dark:mix-blend-plus-lighter"
                />
              </Link>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
