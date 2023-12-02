import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar";
import "../css/tailwind.css";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Head>
    <meta name="google-adsense-account" content="ca-pub-7427894411448013"/>
    </Head>
    <ThemeProvider attribute="class">
    <Script async="true"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7427894411448013"
            crossorigin="anonymous" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
