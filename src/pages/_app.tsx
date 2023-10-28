import type { AppProps } from "next/app";
// import Script from "next/script";
import { NextPage } from "next";
import "../styles/globals.scss";
import "@fontsource/raleway/100.css";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;

// export type NextAppPage<P = any, IP = P> = NextPage<P, IP> & {
//   getLayout?: () => JSX.Element;
//   noAuth?: boolean; // e.g register, login
// };

// interface XedlaPageProps extends AppProps {
//   Component: NextAppPage;
// }

// export default function App({ Component, pageProps }: XedlaPageProps) {
//   // layout setup
//   const getLayout =
//     Component.getLayout ||
//     ((page: JSX.Element) => {
//       if (Component.noAuth) return page;

//       return <DefaultLayout>{page}</DefaultLayout>;
//     });

//   function Layout() {
//     return getLayout(<Component {...pageProps} />);
//   }
//   return (
//     <>
//       {Layout()}

//       {/* Facebook tracking pixel */}
//       {/* <Script>
//         {`!function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '588489919787979');
// fbq('track', 'PageView');`}
//       </Script>
//       <noscript>
//         <img
//           height="1"
//           width="1"
//           style={{ display: "none" }}
//           src="https://www.facebook.com/tr?id=588489919787979&ev=PageView&noscript=1"
//         />
//       </noscript> */}

//       {/* Twitter pixel */}
//       {/* <Script>
//         {` !function(e,t,n,s,u,a)
//         {e.twq ||
//           ((s = e.twq =
//             function () {
//               s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
//             }),
//           (s.version = "1.1"),
//           (s.queue = []),
//           (u = t.createElement(n)),
//           (u.async = !0),
//           (u.src = "https://static.ads-twitter.com/uwt.js"),
//           (a = t.getElementsByTagName(n)[0]),
//           a.parentNode.insertBefore(u, a))}
//         (window,document,'script'); twq('config','odoji');`}
//       </Script> */}
//     </>
//   );
// }
