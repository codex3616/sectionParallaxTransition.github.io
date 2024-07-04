import React, { useLayoutEffect, useRef } from "react";
import styles from "../../app/page.module.scss";
import img1 from "../../../public/images/demo.jpeg";
import img2 from "../../../public/images/project1.png";
import img3 from "../../../public/images/project.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const word = "with gsap";

const Gsap = () => {
  const images = [img1, img2, img3];
  const container = useRef(null);
  const title = useRef(null);
  const characterRef = useRef([]);
  const imageRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          target: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(title.current, { y: -50 }, 0);
      tl.to(imageRef.current[1], { y: -120 }, 0);
      tl.to(imageRef.current[2], { y: -150 }, 0);

      characterRef.current.forEach((char) => {
        const top = Math.floor(Math.random() * -75) - 25;
        tl.to(char, { top: top }, 0); // target all single char
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div className={styles.container} ref={container}>
        <div className={styles.body}>
          <h1 ref={title}>Parallax</h1>
          <h1>Scroll</h1>
          <div className={styles.word}>
            <p>
              {word.split("").map((letter, i) => {
                return (
                  <span ref={(ref) => (characterRef.current[i] = ref)} key={i}>
                    {letter}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className={styles.images}>
          {images.map((img, i) => {
            return (
              <div className={styles.imageContainer} key={`i_${i}`}>
                <Image
                  fill
                  alt="img"
                  className={styles.img}
                  src={img}
                  placeholder="blur"
                  ref={(ref) => (imageRef.current[i] = ref)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gsap;
