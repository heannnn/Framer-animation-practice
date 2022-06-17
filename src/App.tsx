import styled from "styled-components";
import FramerAnimation from "./components/FramerAnimation";
import FramerVariants from "./components/FramerVariants";
import FramerGestures from "./components/FramerGestures";
import FramerDrag from "./components/FramerDrag";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <FramerAnimation />
      <FramerVariants />
      <FramerGestures />
      <FramerDrag />
    </Wrapper>
  );
}

export default App;
