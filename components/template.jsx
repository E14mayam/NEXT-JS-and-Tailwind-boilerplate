import React from "react";
import Nav from "./nav";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./footer";

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

function Template({ children }) {
  const refScroll = useRef(null);

  useEffect(() => {
    let lscroll;
    if (!refScroll.current) return
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image.complete && image.naturalHeight !== 0;
      lscroll.update();
    });

   

  }, []);

  const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
  };  

  return (
    <div id="menu-target" className="font-syne text-zinc-50 bg-zinc-900 scroll-wrapper template" data-scroll-container ref={refScroll}>
      <motion.div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#menu-target"
          animate={{ top: "-100vh", transition: { ...transition, delay: 9 } }}
          className="preloader text-zinc-50"
        >
          <div className="preloader__wrapper">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__left pt-2 md:pt-0"
            >
              <img className="w-8 md:w-14 xl:w-16" src="https://thechurchco-production.s3.amazonaws.com/uploads/sites/2482/2022/02/white-logo-100x100.png" alt="The kings assembly" />
            </motion.div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__right"
            >
              <p className="preloader__text">WELCOME</p>
              <p className="preloader__text">TO</p>
              <p className="preloader__text">LIFE</p>
              <p className="preloader__text">THIS</p>
              <p className="preloader__text">IS</p>
              <p className="preloader__text">THE</p>
              <p className="preloader__text">KINGS ASSEMBLY</p>
            </motion.div>
          </div>
        </motion.div>
      <Nav />
      <main className="pt-24 md:pt-36 lg:pt-36 px-5 lg:px-10 md:px-5 scroll-wrapper2" data-scroll data-scroll-speed="1" >
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Template;
