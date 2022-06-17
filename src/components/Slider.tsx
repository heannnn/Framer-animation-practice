import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 40px;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
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
    </div>
  );
}

export default Slider;
