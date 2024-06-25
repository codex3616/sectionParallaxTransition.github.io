"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = 1; // -1 for move left and 1 for move right direction

  useEffect(() => {
    // for change direction of move while scrolling a page
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animation); // for inifinte text move
  });

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0; // for left move infinite
    } else if (xPercent > 0) {
      xPercent = -100; // for right move infinite
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <>
      <main className={styles.main}>
        <Image alt="bg img" src="/images/demo3.jpeg" fill={true} />

        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Akash Singh -</p>
            <p ref={secondText}>Akash Singh -</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
