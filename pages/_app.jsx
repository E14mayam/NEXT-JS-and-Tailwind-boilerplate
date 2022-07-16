import "../styles/globals.css";
import "animate.css";
import Template from "../components/template";
import Head from "next/head";
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'


function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Template>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <Head>
        <title>The Kings Assembly</title>
        <link
          rel="shortcut icon"
          href="https://thechurchco-production.s3.amazonaws.com/uploads/sites/2482/2022/02/white-logo-100x100.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Template>
  );
}

export default MyApp;
