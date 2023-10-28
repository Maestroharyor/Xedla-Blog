import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  metadescription?: string;
  imageUrl?: string;
};

const Metadata = ({ title, metadescription, imageUrl }: Props) => {
  const router = useRouter();
  let titleView, description;
  if (title) {
    titleView = `${title} | Xedla Pay`;
  } else {
    titleView = `Exciting News about Xedla and Ecommerce World | Xedla Pay`;
  }

  if (metadescription) {
    description = metadescription;
  } else {
    description =
      "Bringing you up to date with information on how to peform secured payments on Xedla and on the Web.";
  }
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maxiumum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={`${description}`} />
      <title>{titleView}</title>
      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={"xedlapay"} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={router.pathname} key="ogurl" />
      <meta property="og:image" content={imageUrl} key="ogimage" />
      <meta property="og:site_name" content={"Xedla Pay"} key="ogsitename" />
      <meta property="og:title" content={titleView} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <link rel="icon" href={"/img/brand/Xedla Favicon Light.png"} />

      {/* Facebook tracking meta */}
      <meta
        name="facebook-domain-verification"
        content="fb17tl9t4iylxxmwo8f2rupt4zpe10"
      />
    </Head>
  );
};

export default Metadata;
