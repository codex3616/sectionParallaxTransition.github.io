"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/demo.jpeg";
import img2 from "../../../public/images/project.png";
import img3 from "../../../public/images/project1.png";
import img4 from "../../../public/images/project2.png";
import img5 from "../../../public/images/project3.png";
import img6 from "../../../public/images/demo.jpeg";
import img7 from "../../../public/images/demo4.jpeg";
import img8 from "../../../public/images/demo3.jpeg";
import { useScroll, useTransform, motion } from "framer-motion";

const ZoomParallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    {
      src: img1,
      scale: scale4,
    },
    {
      src: img2,
      scale: scale5,
    },
    {
      src: img3,
      scale: scale6,
    },
    {
      src: img4,
      scale: scale5,
    },
    {
      src: img5,
      scale: scale6,
    },
    {
      src: img6,
      scale: scale8,
    },
    {
      src: img7,
      scale: scale9,
    },
  ];
  return (
    <>
      <div className={styles.container} ref={container}>
        <div className={styles.sticky}>
          {images.map(({ src, scale }, index) => {
            return (
              <motion.div
                style={{ scale: scale }}
                className={styles.el}
                key={index}
              >
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ZoomParallax;
