import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderContext } from "../context/LoaderContext";
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
  // const marquee = Array(6).fill();

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


  return (
    <>
      <div className="nav-container font-[Sloth-Regular]">
        <div className="navbar-top flex justify-between p-4">
          <div className="logo">
            <img className="w-10" alt="" srcSet="./public/assets/logo.svg" />
          </div>



          <div className="IST-date">
            <h2>Based in India</h2>
            <h2 className="text-right">09:47 IST</h2>
          </div>
        </div>

        <div className="navbar-bottom flex justify-between items-center w-full p-4 absolute bottom-10">
          <nav className="menu-link flex gap-5 items-center fixed left-1/2 -translate-x-1/2 px-6 py-3 rounded-md backdrop-glass-filter bg-glass-bg border-glass-border">
            <a href="#">
              <span>Home</span>
            </a>
            <a href="#">
              <span>About</span>
            </a>
            <a href="#">
              <span>Works</span>
            </a>
            <a href="#">
              <span>Services</span>
            </a>
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
