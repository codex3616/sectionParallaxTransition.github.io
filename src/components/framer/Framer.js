import React, { useRef } from "react";
import styles from "../../app/page.module.scss";
import img1 from "../../../public/images/demo1.jpeg";
import img2 from "../../../public/images/project3.png";
import img3 from "../../../public/images/project2.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const word = "with framer-motion";

const Framer = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: img1,
      parallex: 0,
    },
    {
      src: img2,
      parallex: md,
    },
    {
      src: img3,
      parallex: lg,
    },
  ];

  return (
    <>
      <div className={styles.container} ref={container}>
        <div className={styles.body}>
          <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
          <h1>Scroll</h1>
          <div className={styles.word}>
            <p>
              {word.split("").map((letter, i) => {
                const rd = Math.floor(Math.random() * -75) - 25;
                const sm = useTransform(scrollYProgress, [0, 1], [0, rd]);

                return (
                  <motion.span key={i} style={{ top: sm }}>
                    {letter}
                  </motion.span>
                );
              })}
            </p>
          </div>
        </div>
        <div className={styles.images}>
          {images.map(({ src, parallex }, i) => {
            return (
              <motion.div
                className={styles.imageContainer}
                style={{ y: parallex }}
                key={`i_${i}`}
              >
                <Image
                  fill
                  alt="img"
                  className={styles.img}
                  src={src}
                  placeholder="blur"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Framer;
