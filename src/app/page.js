import React from "react";
import styles from "./page.module.scss";
import Paragraph from "@/components/Paragraph";
import Word from "@/components/Word";
import Character from "@/components/Character";

const Page = () => {
  const paragraph =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non debitis ad iure a repudiandae dignissimos veritatis eos quis at ea!";
  return (
    <>
      <main className={styles.main}>
        <div style={{ height: "100vh" }}></div>
        <Paragraph value={paragraph} />
        <div style={{ height: "100vh" }}></div>
        <Word value={paragraph} />
        <div style={{ height: "100vh" }}></div>
        <Character value={paragraph} />
        <div style={{ height: "100vh" }}></div>
      </main>
    </>
  );
};

export default Page;
