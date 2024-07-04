"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { projectDetails } from "./components/data";
import Card from "./components/card/Card";
import { motion, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], // when start tracking and when stop
  });

  // @@@@@@@@@@@@@@ lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  // @@@@@@@@@@@@@@@@@@@@@@ Done

  return (
    <>
      <main ref={container} className={styles.main}>
        {projectDetails.map((project, index) => {
          const targetScale = 1 - (projectDetails.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              project={project}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </main>
    </>
  );
};

export default Page;
