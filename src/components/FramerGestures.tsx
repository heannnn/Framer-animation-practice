import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 30px;
`;

const boxVariants = {
  hover: { scale: 1.3, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "100px" },
};

function FramerGestures() {
  return <Box variants={boxVariants} whileHover="hover" whileTap="tap" />;
}

export default FramerGestures;
