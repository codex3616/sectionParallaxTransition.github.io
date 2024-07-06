import React from "react";
import styles from "../page.module.scss";

const Text = () => {
  const clicked = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className={styles.text}>
        <h1>Login Page</h1>
        <p>lorem20</p>
        <input type="text" placeholder="type here..." />
        <button onClick={clicked()}>Click</button>
      </div>
    </>
  );
};

export default Text;
