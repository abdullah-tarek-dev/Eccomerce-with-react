import React, { useEffect, useRef, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import "../Styles/Hero.css";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}+
    </span>
  );
};

const Hero = () => {
  return (
    <section className="Hero bg-gray-50 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="Herocontainer max-w-6xl grid md:grid-cols-2 items-center gap-10">

        {/* -------- Left Side -------- */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="motionh1 font-extrabold text-black"
          >
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="motionp text-gray-600 text-base md:text-lg max-w-md"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="motionbutton bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 transition"
          >
            Shop Now
          </motion.button>

          {/* -------- Stats -------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="motiondiv flex  justify-center gap-8 text-center"
          >
            <div>
              <h2 className="text-2xl font-bold">
                <Counter target={200} />
              </h2>
              <p className="text-gray-500 text-sm">International Brands</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                <Counter target={2000} />
              </h2>
              <p className="text-gray-500 text-sm">High-Quality Products</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                <Counter target={30000} />
              </h2>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </motion.div>
        </motion.div>

        {/* -------- Right Side (Rotating Stars) -------- */}
        <div className="hidden md:flex justify-center items-center relative">

          <motion.img
            src="/assets/Vector (1).png"
            alt="rotating star"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute top-16 left-20 w-10 h-10"
          />
          <motion.img
            src="/assets/Vector (2).png"
            alt="rotating star"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute top-40 right-24 w-16 h-16"
          />
          <motion.img
            src="/assets/Vector (2).png"
            alt="rotating star"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute bottom-16 right-24 w-16 h-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
