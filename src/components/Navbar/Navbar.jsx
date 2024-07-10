import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderContext } from "../../context/LoaderContext";

const Navbar = () => {
  const [progress] = useLoaderContext();

  useEffect(() => {
    if (progress === 100) {
     
    }
  }, [progress]);

  return (
    <>
      <div className="navbar flex justify-between">
        <div className="logo">
          <h1>AMAL</h1>
        </div>
        <div className="menu flex gap-6">
          <span><a href="#">About</a></span>
          <span><a href="#">Works</a></span>
          <span><a href="#">Services</a></span>
          <button>Get in Touch</button>
        </div>

        <div>
          <h1>AVAILABLE FOR WORK JULY 2024</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
