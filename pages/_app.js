import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";
import NProgress from "nprogress";
function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return <Component {...pageProps} />;
}

export default MyApp;
