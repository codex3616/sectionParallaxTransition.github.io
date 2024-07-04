"use client";
import React, { useEffect } from "react";
import Framer from "@/components/framer/Framer";
import Gsap from "@/components/gsap/Gsap";
import styles from "./page.module.scss";
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
        <Gsap />
        <Framer />
      </main>
    </>
  );
};

export default Page;
