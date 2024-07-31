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
            <img className="w-8" alt="" srcSet="./assets/site-logo.svg" />
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
