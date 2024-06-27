import React from "react";
import styles from "./page.module.scss";
import Double from "../components/double/index";

const projects = [
  {
    name: "Burgerzest",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "demo.jpeg",
    year: 2022,
  },

  {
    name: "Login Auth",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "project.png",
    year: 2021,
  },
  {
    name: "Notetaking",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "project1.png",
    year: 2023,
  },
  {
    name: "MovieInfo",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "project3.png",
    year: 2024,
  },
  {
    name: "WeatherLive",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "project2.png",
    year: 2024,
  },
  {
    name: "DynamicQuotes",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "project1.png",
    year: 2024,
  },
  {
    name: "PortFolio",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "demo1.jpeg",
    year: 2024,
  },
  {
    name: "DynamicQuotes",
    client: "own",
    description: "Lorem ipsum dolor sit ame",
    src: "demo2.jpeg",
    year: 2024,
  },
];

const Page = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam
          maxime perferendis deleniti.
        </h1>
        <div className={styles.gallery}>
          <Double projects={[projects[0], projects[1]]} />
          <Double projects={[projects[2], projects[3]]} reversed={true} />
          <Double projects={[projects[4], projects[5]]} />
          <Double projects={[projects[6], projects[7]]} reversed={true} />
        </div>
      </main>
    </>
  );
};

export default Page;
