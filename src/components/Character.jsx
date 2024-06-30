"use client";
import React, { useEffect, useRef } from "react";
import styles from "../app/page.module.scss";
import { progress, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Character = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");
  return (
    <>
      <p ref={element} className={styles.para}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <SingleWord key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </SingleWord>
          );
        })}
      </p>
    </>
  );
};

const SingleWord = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word}>
      {characters.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <SingleChar key={i} range={[start, end]} progress={progress}>
            {char}
          </SingleChar>
        );
      })}
    </span>
  );
};

const SingleChar = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default Character;
