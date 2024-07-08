"use client";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import ZoomParallax from "./components/ZoomParallax";
import Lenis from "@studio-freight/lenis";

const Page = () => {
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
      <main className={styles.main}>
        <ZoomParallax />
      </main>
    </>
  );
};

export default Page;
