"use client";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ project, i, progress, targetScale, range }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"], // when start tracking and when stop
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]); //here 0 = 2, 1 = 1
  const scale = useTransform(progress, range, [1, targetScale]); //here 0 = 2, 1 = 1
  return (
    <>
      <div ref={container} className={styles.cardContainer}>
        <motion.div
          className={styles.card}
          style={{
            backgroundColor: project.color,
            top: `calc(-10% + ${i * 25}px)`,
            scale: scale,
          }}
        >
          <p>{project.pageName}</p>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image alt="img" src={`/images/${project.src}`} fill />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
