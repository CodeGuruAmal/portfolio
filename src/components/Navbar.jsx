import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderContext } from "../context/LoaderContext";
import { BsArrowUpRight } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  const marquee = Array(8).fill();

  const [progress] = useLoaderContext();

  if (progress === 100) {
    gsap.from(".nav-container", {
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  }

  useGSAP(() => {
    gsap.from(".nav-marquee", {
      xPercent: 300,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  });

  const [menuLink] = useState([
    { label: "About", url: "about" },
    { label: "Works", url: "work" },
    { label: "Services", url: "service" },
  ]);

  return (
    <>
      <div className="nav-container font-[Sloth-Regular]">
        <div className="navbar-top w-full relative z-10 flex justify-between items-center p-4">
          <div className="logo">
<<<<<<< HEAD
            <svg
              width="30"
              height="35"
              viewBox="0 0 30 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.42424 7.48904L0 8.8647L4.24237 16.2008H0V18.7992H8.93937L2.42424 7.48904Z"
                fill="#FF4D00"
              />
              <path
                d="M8.93952 3.82095L6.36377 5.34929L10.7578 13.297L17.4244 1.68122L15.0001 0L10.7578 7.48904L8.93952 3.82095Z"
                fill="#FF4D00"
              />
              <path
                d="M23.6365 5.34932L21.0608 3.82098L16.3638 11.6158H30.0001V8.86472L21.5153 8.7118L23.6365 5.34932Z"
                fill="#FF4D00"
              />
              <path
                d="M29.9999 16.2008H21.0605L27.4242 27.9695L29.9999 26.2882L25.7575 18.7992H29.9999V16.2008Z"
                fill="#FF4D00"
              />
              <path
                d="M12.4243 33.7773L19.0909 21.856L23.6364 30.1092L21.0607 31.4847L19.0909 27.9695L15.0001 35L12.4243 33.7773Z"
                fill="#FF4D00"
              />
              <path
                d="M0 26.2882V23.3842H13.1819L8.33337 31.4847L6.36362 30.1092L8.33337 26.2882H0Z"
                fill="#FF4D00"
              />
              <path
                d="M2.42424 7.48904L0 8.8647L4.24237 16.2008H0V18.7992H8.93937L2.42424 7.48904Z"
                fill="#FF4D00"
              />
              <path
                d="M8.93952 3.82095L6.36377 5.34929L10.7578 13.297L17.4244 1.68122L15.0001 0L10.7578 7.48904L8.93952 3.82095Z"
                fill="#FF4D00"
              />
              <path
                d="M23.6365 5.34932L21.0608 3.82098L16.3638 11.6158H30.0001V8.86472L21.5153 8.7118L23.6365 5.34932Z"
                fill="#FF4D00"
              />
              <path
                d="M29.9999 16.2008H21.0605L27.4242 27.9695L29.9999 26.2882L25.7575 18.7992H29.9999V16.2008Z"
                fill="#FF4D00"
              />
              <path
                d="M12.4243 33.7773L19.0909 21.856L23.6364 30.1092L21.0607 31.4847L19.0909 27.9695L15.0001 35L12.4243 33.7773Z"
                fill="#FF4D00"
              />
              <path
                d="M0 26.2882V23.3842H13.1819L8.33337 31.4847L6.36362 30.1092L8.33337 26.2882H0Z"
                fill="#FF4D00"
              />
            </svg>

=======
            <img className="w-8" alt="" srcSet="./assets/site-logo.svg" />
>>>>>>> c89c8f1c2403fea99ea73505d5fd2c18ea48fea5
            {/* <h1 className="px-4 py-2 text-primary font-[Moderniz]">Amal</h1> */}
          </div>

          <div className="menu-btn text-2xl block sm:block lg:hidden">
            <TbMenu />
          </div>

          <div className="menu-link fixed left-1/2 -translate-x-1/2 hidden sm:hidden lg:block">
            <nav className="flex items-center gap-5 rounded-md backdrop-glass-filter bg-glass-bg  px-5 py-2">
              {menuLink.map((item, index) => {
                return (
                  <a key={index} href={item.url} className="hover:text-primary">
                    <span>{item.label}</span>
                  </a>
                );
              })}

              <a href="#">
                <button className="px-3 py-2 bg-secondary text-neutral flex items-center gap-1 transition-colors duration-200 hover:bg-primary">
                  Get in touch <BsArrowUpRight />
                </button>
              </a>
            </nav>
          </div>

          {/* <div className="lg:flex w-80 justify-center hidden sm:hidden whitespace-nowrap items-center h-10 overflow-hidden border-2 rounded-full border-primary">
            {marquee.map((_, index) => {
              return (
                <div className="px-2 nav-marquee flex gap-1 items-center justify-between">
                  <h1
                    key={index}
                    
                  >
                    Available for Work
                  </h1>
                  <GoDotFill className="text-primary" />
                </div>
              );
            })}
          </div> */}

          <div className="IST-date hidden sm:hidden lg:block">
            <h2>Based in India</h2>
            <h2 className="text-right">09:47 IST</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="navbar-bottom lg:flex justify-between items-center w-full p-4 hidden sm:hidden">
          <nav className="menu-link flex gap-5 items-center fixed left-1/2 -translate-x-1/2 px-6 py-3 rounded-md backdrop-glass-filter bg-glass-bg border-glass-border shadow-sm shadow-secondary">

            {menuLink.map((item, index) => {
              return (
                <a key={index} href={item.url} className="hover:text-primary">
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a href="#">
              <button className="px-3 py-2 bg-secondary text-neutral flex items-center gap-1 transition-colors duration-200 hover:bg-primary">
                Get in touch <BsArrowUpRight />
              </button>
            </a>
          </nav>

        </div> */
}
