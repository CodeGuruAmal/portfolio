import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderContext } from "../../context/LoaderContext";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
const [progress] = useLoaderContext();

if(progress === 100) {
  useGSAP(() => {
    gsap.from(".navbar", {
      opacity: 0,
      y:-10,
      duration: 1,
      delay: 1,
      ease: "power3.inOut",
      stagger: {
        amount: 1,
      },
    })
  })
}

  return (
    <>
      <div className="navbar flex justify-between p-4">
        <div className="logo">
          <h1>AMAL</h1>
        </div>
        <div className="menu hidden md:flex gap-6">
          <span><a href="#">About</a></span>
          <span><a href="#">Works</a></span>
          <span><a href="#">Services</a></span>
          <button className="px-3 py-1 bg-secondary text-primary">Get in Touch</button>
        </div>

        <div className="menu hidden md:block gap-6">

          <h1 className="text-primary">Available</h1>
        </div>
        
        <div className="block md:hidden">
        <MdOutlineMenu />
        </div>




{/* <div className="color-box w-[10vw] h-[10vw] bg-green-600 sm:bg-red-600 md:bg-amber-500 lg:bg-sky-800"></div> */}

      </div>
    </>
  );
};

export default Navbar;
