"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import img from "../../public/images/demo.jpeg";
import { useScroll, motion, useTransform } from "framer-motion";

const Page = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main className={styles.main} ref={container}>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
};

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div style={{ scale: scale, rotate: rotate }} className={styles.box}>
      <h1>srolling section parallax transition</h1>
    </motion.div>
  );
};
const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <motion.div
      className={styles.imgBox}
      style={{ scale: scale, rotate: rotate }}
    >
      <Image alt="img" fill placeholder="blur" src={img} />
    </motion.div>
  );
};

export default Page;
