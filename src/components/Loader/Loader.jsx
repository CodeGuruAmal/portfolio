import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLoaderContext } from "../../context/LoaderContext";

const Loader = () => {
  // Code for Marquee
  const marquee = Array(12).fill();

  // Code for Refs

  const overlayRight = useRef([]);
  const overlayLeft = useRef([]);
  const marqueeRight = useRef([]);
  const marqueeLeft = useRef([]);
  const loaderSection = useRef([]);

  const addToRefs = (ref, el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  // Code for Progress
  const [progress, setProgress] = useLoaderContext();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev > 99) {
          clearInterval(interval);

          gsap.to(".loader-marquee, .progress-timer", {
            opacity: 0,
            display: "none",
            duration: 0.5,
          });

          // gsap.to(curtainEffect.current, {
          //   duration: 1.5,
          //   height: 0,
          //   stagger: { amount: 0.7 },
          //   ease: "power3.inOut",
          // });

          gsap.to(overlayLeft.current, {
            xPercent: -100,
            duration: 1.5,
            ease: "power3.inOut",
          });

          gsap.to(overlayRight.current, {
            xPercent: 100,
            duration: 1.5,
            ease: "power3.inOut",
          });

          return prev;
        } else {
          return prev + 1;
        }
      });
    }, 30);
  }, []);

  useGSAP(() => {
    gsap.from(marqueeRight.current, {
      xPercent: -300,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(marqueeLeft.current, {
      xPercent: -300,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <>
      <div
        ref={(el) => addToRefs(loaderSection, el)}
        className="loader-section fixed z-[99999] w-full font-[moderniz] h-screen"
      >
        <div className="loader-marquee w-full">
          <div className="marquee fixed top-5 -left-1 bg-primary p-2 flex">
            {marquee.map((_, index) => {
              return (
                <h1
                  ref={(el) => addToRefs(marqueeRight, el)}
                  key={index}
                  className="text-[2.6vw] md:text-[1.2vw] toRight text-secondary  px-[1.5vw]"
                >
                  loading
                </h1>
              );
            })}
          </div>

          <div className="marquee fixed bottom-5 -left-1 bg-primary p-2 flex">
            {marquee.map((_, index) => {
              return (
                <h1
                  key={index}
                  ref={(el) => addToRefs(marqueeLeft, el)}
                  className="text-[2.6vw] md:text-[1.2vw] toLeft text-secondary  px-[1.5vw]"
                >
                  Loading
                </h1>
              );
            })}
          </div>
        </div>

        <div className="progress-timer flex w-full h-full justify-center items-center">
          <h2 className="text-primary text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
            {progress}%
          </h2>
        </div>

        <div className="h-screen">
          <div
            ref={(el) => addToRefs(overlayRight, el)}
            className="overlay1  w-screen h-[50%] bg-secondary fixed -z-10 top-0"
          ></div>
          <div
            ref={(el) => addToRefs(overlayLeft, el)}
            className="overlay2  w-screen h-[50%] bg-secondary fixed -z-10 bottom-0"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
