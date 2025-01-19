import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// import React from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isAnimate, setIsAnimate] = useState(false);
  const handelAnimationStart = () => {
    setIsAnimate(true);
  };
  const handelAnimationEnd = () => {
    setIsAnimate(false);
  };
  return (
    <div className={isAnimate ? "overflow-x-hidden" : ""}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100vw" }}
          transition={{ duration: 0.5 }}
          onAnimationStart={handelAnimationStart}
          onAnimationComplete={handelAnimationEnd}
          // style={{ overflowX: "hidden" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
