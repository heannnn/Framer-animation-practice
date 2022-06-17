import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  display: grid;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child {
  }
  div:last-child {
    grid-column: span 2;
  }
`;

function SharedLayout() {
  return (
    <Grid>
      <Box layoutId="hello" />
      <Box />
      <Box />
      <Box />
    </Grid>
  );
}

export default SharedLayout;
