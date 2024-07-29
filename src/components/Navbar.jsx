import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderContext } from "../context/LoaderContext";
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
  const marquee = Array(7).fill();

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
      xPercent: -300,
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
        <div className="navbar-top relative z-10 flex justify-between p-4">
          <div className="logo">
            <img className="w-10" alt="" srcSet="./public/assets/logo.svg" />
            {/* <h1 className="px-4 py-2 text-primary font-[Moderniz]">Amal</h1> */}
          </div>

          <div className="flex w-52 justify-center whitespace-nowrap items-center  overflow-hidden bg-yellow-400">
            {marquee.map((_, index) => {
              return (
                <h1 key={index} className="px-2 nav-marquee">
                  Available for Job
                </h1>
              );
            })}
          </div>

          <div className="IST-date">
            <h2>Based in India</h2>
            <h2 className="text-right">09:47 IST</h2>
          </div>
        </div>

        <div className="navbar-bottom flex justify-between items-center w-full p-4 absolute z-10 bottom-10">
          <nav className="menu-link flex gap-5 items-center fixed left-1/2 -translate-x-1/2 px-6 py-3 rounded-md backdrop-glass-filter bg-glass-bg border-glass-border shadow-sm shadow-secondary">
            {/* <a href="#" className="hover:text-primary">
              <span>Home</span>
            </a> */}
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

          {/* <div className="music-btn  fixed right-4">
            <button>Sound Off</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
