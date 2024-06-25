"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Project from "../components/project/index";
import Modal from "../components/modal/index";

const Page = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const projects = [
    {
      title: " BurgerZest",
      src: "project.png",
      color: "#000000",
    },
    {
      title: " Login App",
      src: "project1.png",
      color: "#8C8C8C",
    },
    {
      title: "MoveInfo",
      src: "project2.png",
      color: "#EFE8D3",
    },
    {
      title: " NoteTaking",
      src: "project3.png",
      color: "#706D63",
    },
  ];

  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                index={index}
                title={project.title}
                setModal={setModal}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  );
};

export default Page;
