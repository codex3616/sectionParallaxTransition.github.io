"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Nav from "../nav/index";
import { AnimatePresence } from "framer-motion"; // this is for nav exits animation

const Index = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} isActive={isActive} />}
      </AnimatePresence>
    </>
  );
};

export default Index;
