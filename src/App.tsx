import styled from "styled-components";
import FramerAnimation from "./components/FramerAnimation";
import FramerVariants from "./components/FramerVariants";
import FramerGestures from "./components/FramerGestures";
import FramerDrag from "./components/FramerDrag";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 500px;
  background: linear-gradient() 135deg, rgb(238, 0, 153), rgb(221, 0, 238);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-600, 600], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 217, 255), rgb(0, 24, 238))",
      "linear-gradient(135deg, rgb(0, 238, 56), rgb(238, 206, 0))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <Wrapper style={{ background: gradient }}>
      <FramerAnimation />
      <FramerVariants />
      <FramerGestures />
      <FramerDrag />
      <Box
        style={{ x, rotateZ: rotateZ, scale: scale }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
