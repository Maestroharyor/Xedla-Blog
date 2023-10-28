import { ReactNode, useEffect, useRef, useState } from "react";
import SEOHeader from "@/components/headers/partials/SEOHeader";
import Mainheader from "../headers/MainHeader";
import MobileHeader from "../headers/MobileHeader";
import MainFooter from "../footers/MainFooter";
import Backtotop from "../footers/BackToTop";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

type Props = {
  title?: string;
  metadescription?: string;
  imageUrl?: string;
  children: ReactNode;
};

const DefaultLayout = ({
  children,
  title,
  metadescription,
  imageUrl,
}: Props) => {
  const [appLoading, setAppLoading] = useState(true);
  const [routeChange, setRouteChange] = useState(false);
  const router = useRouter();
  const ref = useRef(null);
  useEffect(() => {
    const startRouteChange = (url: any, { shallow }: any) => {
      setRouteChange(true);
      ref?.current && (ref?.current as any)?.continuousStart
        ? (ref?.current as any)?.continuousStart()
        : null;
    };
    const endRouteChange = (url: any, { shallow }: any) => {
      if (ref.current) {
        (ref.current as any).complete();
      }

      setTimeout(() => {
        setRouteChange(false);
      }, 1000);

      //     `App changed to ${url} ${
      //       shallow ? 'with' : 'without'
      //     } shallow routing`
      //   )
    };

    router.events.on("routeChangeStart", startRouteChange);
    router.events.on("routeChangeComplete", endRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", startRouteChange);
      router.events.off("routeChangeComplete", endRouteChange);
    };
  }, []);

  return (
    <>
      {routeChange && (
        <LoadingBar
          color="#470973"
          ref={ref}
          height={10}
          className="transition-all duration-300"
        />
      )}
      <SEOHeader
        title={title}
        metadescription={metadescription}
        imageUrl={imageUrl}
      />

      <div className="dark:bg-gray-800">
        <Mainheader />
        <MobileHeader />
        <main className=" max-w-[1000px] mx-auto w-full min-h-screen h-full py-5 px-5 dark:text-gray-50 ">
          {children}
        </main>

        <MainFooter />
        <Backtotop />
      </div>
    </>
  );
};

export default DefaultLayout;
