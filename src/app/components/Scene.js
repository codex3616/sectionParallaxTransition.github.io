"use client";
import React, { useEffect, useRef } from "react";
import useWindow from "./useWindow";
import styles from "../page.module.scss";

const Scene = () => {
  const { dimension } = useWindow();
  const canvas = useRef();
  const prevPosition = useRef(null);

  useEffect(() => {
    if (dimension.width > 0) {
      init();
    }
  }, [dimension]);

  const init = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, dimension.width, dimension.height);
    ctx.globalCompositeOperation = "destination-out";
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;
    // console.log(movementX, movementY);

    const noOfCircle = Math.max(Math.abs(movementX), Math.abs(movementY)) / 5;

    if (prevPosition.current != null) {
      // console.log(prevPosition);
      const { x, y } = prevPosition.current;
      for (let i = 0; i < noOfCircle; i++) {
        const targetX = lerp(x, clientX, (1 / noOfCircle) * i);
        const targetY = lerp(y, clientY, (1 / noOfCircle) * i);
        drawCircle(targetX, targetY, 30);
      }
    }

    prevPosition.current = {
      x: clientX,
      y: clientY,
    };
  };

  const drawCircle = (x, y, radius) => {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };
  return (
    <>
      <div className={styles.scene}>
        {dimension.width == 0 && <div className={styles.bg}></div>}
        <canvas
          ref={canvas}
          height={dimension.height}
          width={dimension.width}
          onMouseMove={manageMouseMove}
        />
      </div>
    </>
  );
};

export default Scene;
