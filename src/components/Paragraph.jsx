"use client";
import React, { useEffect, useRef } from "react";
import styles from "../app/page.module.scss";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  });
  return (
    <>
      <motion.p
        ref={element}
        className={styles.para}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
    </>
  );
};

export default Paragraph;
