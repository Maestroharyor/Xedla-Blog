import type { Metadata } from "next";

import "./globals.scss";
import MainHeader from "@/components/headers/MainHeader";
import MobileHeader from "@/components/headers/MobileHeader";
import MainFooter from "@/components/footers/MainFooter";
import BackToTop from "@/components/footers/BackToTop";

export const metadata: Metadata = {
  title: {
    template: "%s | Xedla Pay",
    default: "Exciting News about Xedla and Ecommerce World | Xedla Pay", // a default is required when creating a template
  },
  description:
    "Bringing you up to date with information on how to peform secured payments on Xedla and on the Web.",
  generator: "Xedla Pay",
  applicationName: "Xedla Pay Blog",
  referrer: "origin-when-cross-origin",
  keywords: ["Escrow", "Fin Tech", "Ecommerce", "Xedla"],
  authors: [{ name: "Xedla Pay", url: "https://xedlapay.com" }],
  openGraph: {
    title: "Exciting News about Xedla and Ecommerce World | Xedla Pay",
    description:
      "Bringing you up to date with information on how to peform secured payments on Xedla and on the Web.",
    url: "https://blog.xedla.com",
    siteName: "Xedla Pay Blog",
    images: [
      {
        url: "/img/brand/Xedla Logo.png",
        width: 800,
        height: 600,
      },
      // {
      //   url: "",
      //   width: 1800,
      //   height: 1600,
      //   alt: "My custom alt",
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/img/brand/Xedla Favicon Light.png",
    // shortcut: "/shortcut-icon.png",
    // apple: "/apple-icon.png",
    // other: {
    //   rel: "apple-touch-icon-precomposed",
    //   url: "/apple-touch-icon-precomposed.png",
    // },
  },
  metadataBase: new URL("https://blog.xedla.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  // colorScheme: "dark",
  // creator: "Jiachi Liu",
  // publisher: "Sebastian Markbåge",
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-800">
        <MainHeader />
        <MobileHeader />
        <main className=" max-w-[1000px] mx-auto w-full min-h-screen h-full py-5 px-5 dark:text-gray-50 ">
          {children}
        </main>

        <MainFooter />
        <BackToTop />
      </body>
    </html>
  );
}
