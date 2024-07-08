import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  // Code for Marquee
  const marquee = Array(12).fill();

  // Code for Refs

  const curtainEffect = useRef([]);
  const marqueeRight = useRef([]);
  const marqueeLeft = useRef([]);
  const loaderMarquee = useRef([]);

  const addToRefs = (ref, el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  // Code for Progress
  const [progress, setProgress] = useState(0);
  const progressTimer = useRef([]);
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

          gsap.to(".enter-container", {
            opacity: 1,
            display: "flex",
            duration: 1,
            delay: 0.5,
          });


          gsap.to(".enter-marquee", {
            opacity:1,
            display:"block",
            duration: 1
          })

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

  // Code for Overlay

  const overlay = Array(11).fill();

  // Code for Enter Button Click

  const [btnStatus, setBtnStatus] = useState(false);
  const handleEnterClick = () => {
    setBtnStatus(true);
    gsap.to(".enter-container", {
      opacity: 0,
      display: "none",
      duration: 1,
    });

    gsap.to(curtainEffect.current, {
      duration: 1.7,
      height: 0,
      stagger: { amount: 0.7 },
      ease: "power3.inOut",
    });

    gsap.to(".enter-marquee", {
      opacity:0,
      display:"none",
      duration: 1
    })
  };

  return (
    <>
      <div className="loader-section fixed w-full font-[moderniz] h-screen bg-neutral">
        <div className="loader-marquee w-full">
          <div className="marquee fixed top-4 -left-1 bg-primary p-2 flex">
            {marquee.map((_, index) => {
              return (
                <h1
                  ref={(el) => addToRefs(marqueeRight, el)}
                  key={index}
                  className="text-[3vw] md:text-[1.5vw] toRight text-secondary  px-[1.5vw]"
                >
                  loading
                </h1>
              );
            })}
          </div>

          <div className="marquee fixed bottom-4 -left-1 bg-primary p-2 flex">
            {marquee.map((_, index) => {
              return (
                <h1
                  key={index}
                  ref={(el) => addToRefs(marqueeLeft, el)}
                  className="text-[3vw] md:text-[1.5vw] toLeft text-secondary  px-[1.5vw]"
                >
                  Loading
                </h1>
              );
            })}
          </div>
        </div>

        <div className="progress-timer flex w-full h-full justify-center items-center">
          <h2 className="text-primary text-[1.8rem] md:text-[2.3rem] lg:text-[2.7rem]">
            {progress}%
          </h2>
        </div>

        <div className="overlay-container fixed -z-10 top-0 flex">
          {overlay.map((_, index) => {
            return (
              <div
                ref={(el) => addToRefs(curtainEffect, el)}
                key={index}
                className="overlay w-[13vw] md:w-[11.5vw] lg:w-[9.5vw] h-screen bg-secondary"
              ></div>
            );
          })}
        </div>

        <div onClick={handleEnterClick} className="container w-full h-screen">
          <div className="enter-container opacity-0 hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-12">
            <div className="img-box">
              <svg
                width="116"
                height="103"
                viewBox="0 0 116 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M97 102.875C108.783 92.2173 116 75.4036 116 58.228C116 26.0696 90.0325 0 58 0C25.9675 0 0 26.0696 0 58.228C0 74.6946 8.055 90.2838 19 100.875L24 79L9.5 78.5L11.5 75.5L25 76L10.5 73L13 69.5L26 73.875L27 70.6877L39 31.875L49.8534 46.7676H57.0938H64.3341L75.5 31.875L85 63L89 73.875L102.5 69.5L105 72L89 76L102.5 75.5L105 78.5L90.5 79L97 102.875Z"
                  fill="#EDE140"
                />
                <circle cx="48" cy="71" r="8.5" fill="white" stroke="#454545" />
                <path
                  d="M51.5 71C51.5 72.933 49.933 74.5 48 74.5C46.067 74.5 44.5 72.933 44.5 71C44.5 69.067 46.067 67.5 48 67.5C49.933 67.5 51.5 69.067 51.5 71Z"
                  fill="black"
                  stroke="#454545"
                />
                <circle cx="69" cy="71" r="8.5" fill="white" stroke="#454545" />
                <circle cx="69" cy="71" r="3.5" fill="black" stroke="#454545" />
              </svg>
            </div>
          </div>

          <div className="enter-marquee w-full hidden opacity-0">
          <div className="marquee fixed top-4 -left-1 bg-primary p-2 flex">
            {marquee.map((_, index) => {
              return (
                <h1
                  ref={(el) => addToRefs(marqueeRight, el)}
                  key={index}
                  className="text-[3vw] md:text-[1.5vw] toRight text-secondary px-[1.5vw] whitespace-nowrap"
                >
                  Click anywhere
                </h1>
              );
            })}
          </div>

          <div className="marquee fixed bottom-4 -left-1 bg-primary p-2 flex">
            {marquee.map((_, index) => {
              return (
                <h1
                  key={index}
                  ref={(el) => addToRefs(marqueeLeft, el)}
                  className="text-[3vw] md:text-[1.5vw] toLeft text-secondary px-[1.5vw] whitespace-nowrap"
                >
                  click anywhere
                </h1>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
