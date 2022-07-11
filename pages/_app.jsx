import "../styles/globals.css";
import Template from "../components/template";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Template>
    
      <Head>
        <title>Next + Tailwind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      </Template>
  );
}

export default MyApp;
