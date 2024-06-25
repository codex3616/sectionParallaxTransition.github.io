import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const Index = ({ modal, projects }) => {
  const { active, index } = modal;

  const container = useRef(null); // for target model to use that target in gsap
  const cursor = useRef(null); // for target model to use that target in gsap
  const cursorLabel = useRef(null); // for target model to use that target in gsap

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveCusorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCusorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCusorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    const moveCusorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCusorX(clientX);
      moveCusorY(clientY);
      moveCusorLabelX(clientX);
      moveCusorLabelY(clientY);
    });
  }, []);

  //   @@@@@@@@@@@@@@@@@ DONE##################

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={styles.modal}
              >
                <Image
                  src={`/images/${src}`}
                  alt="image"
                  width={300}
                  height={0}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={styles.cursor}
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        ref={cursorLabel}
        className={styles.cursorLabel}
      >
        View
      </motion.div>
    </>
  );
};

export default Index;
