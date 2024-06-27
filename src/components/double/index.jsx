"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const Index = ({ projects, reversed }) => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let xPercent = reversed ? 100 : 0;
  let speed = 0.15;
  let currentXPercent = reversed ? 100 : 0;
  let requestAnimationFrameId = null;

  const manageMouseMove = (e) => {
    //for changing width to 66.66 and 33.33
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };
  const animate = () => {
    // for smooth animation

    const deltaXPercent = xPercent - currentXPercent;
    currentXPercent = currentXPercent + deltaXPercent * speed;

    firstImage.current.style.width = 66.66 - currentXPercent * 0.33 + "%";
    secondImage.current.style.width = 33.33 + currentXPercent * 0.33 + "%";

    if (Math.round(currentXPercent) == Math.round(xPercent)) {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      requestAnimationFrame(animate);
    }
  };

  return (
    <>
      <div
        className={styles.double}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
      >
        <div ref={firstImage} className={styles.imageContainer}>
          <div className={styles.stretchyContainer}>
            <Image alt="img1" fill={true} src={`/images/${projects[0].src}`} />
          </div>
          <div className={styles.body}>
            <h3> {projects[0].name}</h3>
            <p>{projects[0].description}</p>
            <p>{projects[0].year}</p>
          </div>
        </div>

        <div ref={secondImage} className={styles.imageContainer}>
          <div className={styles.stretchyContainer}>
            <Image alt="img2" fill={true} src={`/images/${projects[1].src}`} />
          </div>
          <div className={styles.body}>
            <h3> {projects[1].name}</h3>
            <p>{projects[1].description}</p>
            <p>{projects[1].year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
