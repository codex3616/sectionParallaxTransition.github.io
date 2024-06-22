import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slide, scale } from "../../header/anim";

const Index = ({ data, activeIndicator, setSelectedIndicator }) => {
  // console.log(activeIndicator);
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(data.href);
      }}
    >
      <motion.div
        className={styles.indicator}
        variants={scale}
        animate={activeIndicator ? "open" : "closed"}
      ></motion.div>
      <Link
        href={data.href}
        onClick={() => {
          data.setIsActive(!data.isActive);
        }}
      >
        {data.title}
      </Link>
    </motion.div>
  );
};

export default Index;
