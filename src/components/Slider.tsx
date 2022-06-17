import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  display: grid;
  justify-content: center;
  font-size: 40px;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  clear: both;
`;

const box = {
  entry: (isBack: boolean) => {
    return {
      x: isBack ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: (isBack: boolean) => {
    return {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    };
  },
  exit: (isBack: boolean) => {
    return {
      x: isBack ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
        rotateZ: 180,
      },
    };
  },
};

function Slider() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextPlease = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <div>
      <AnimatePresence exitBeforeEnter custom={isBack}>
        <Box
          custom={isBack}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button style={{ position: "relative" }} onClick={prevPlease}>
        prev
      </button>
      <button style={{ position: "relative" }} onClick={nextPlease}>
        next
      </button>
    </div>
  );
}

export default Slider;
