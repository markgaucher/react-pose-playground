import posed from "react-pose";
import styled from "styled-components";

const PosedBackground = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Background = styled(PosedBackground)`
  background-color: rgba(0, 0, 0, 0.05);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
`;

export default Background;
