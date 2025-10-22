import React from "react";
import { motion } from "framer-motion";
import "../Styles/Slider.css";

function Slider() {
  return (
    <div className="Slider bg-black w-full overflow-hidden ">
      <motion.div
        className="flex items-center gap-10 w-max"
        animate={{ x: ["0%", "-20%"] }} 
        transition={{
          repeat: Infinity,
          duration: 15, 
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10">
            <img
              src="/assets/Group (1).png"
              alt="brand"
              className="w-36 md:w-44 h-auto"
            />
                    <img
              src="/assets/zara-logo-1 1.png"
              alt="brand"
              className="w-36 md:w-44 h-auto"
            />
            <img
              src="/assets/Group.png"
              alt="brand"
              className="w-36 md:w-44 h-auto"
            />
            <img
              src="/assets/gucci-logo-1 1.png"
              alt="brand"
              className="w-36 md:w-44 h-auto"
            />
            <img
              src="/assets/prada-logo-1 1.png"
              alt="brand"
              className="w-36 md:w-44 h-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Slider;
