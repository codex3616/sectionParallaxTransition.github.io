// "use client";
import React from "react";
import styles from "./page.module.scss";
import Text from "./components/Text";
import Scene from "./components/Scene";

const Page = () => {
  return (
    <>
      <main className={styles.main}>
        <Text />
        <Scene />
      </main>
    </>
  );
};

export default Page;
