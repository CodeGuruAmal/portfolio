import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderContext } from "../../context/LoaderContext";

const Navbar = () => {
  const [progress] = useLoaderContext();

  useEffect(() => {
    if (progress === 100) {
      gsap.from("h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 2,
      });
    }
  }, [progress]);

  return (
    <div>
      <h1 className="text-primary text-[17vw] font-[Nohemi-Bold]">Hello</h1>
    </div>
  );
};

export default Navbar;
