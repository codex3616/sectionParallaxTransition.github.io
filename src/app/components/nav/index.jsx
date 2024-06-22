"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Link from "./Link/index";
import { motion } from "framer-motion";
import { menuSlide } from "../header/anim";
import Curve from "./curve/index";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const Index = ({ setIsActive, isActive }) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          className={styles.nav}
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <div className={styles.header}>
            <p>Navigation</p>
            <div className={styles.stripe}></div>
          </div>
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                data={{ ...item, index, isActive, setIsActive }}
                activeIndicator={selectedIndicator == item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>

        <div className={styles.footer}>
          <div className={styles.footHeader}>
            <p>socials</p>
          </div>
          <div className={styles.links}>
            <a>GitHub</a>
            <a>Instagram</a>
            <a>Twitter</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Index;
