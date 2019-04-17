import styled from "styled-components";
import posed from "react-pose";
import { rem } from "polished";

const PosedDialog = posed.div({
  enter: { opacity: 1, top: "25%" },
  exit: { opacity: 0, top: "35%" }
});

const Dialog = styled(PosedDialog)`
  background-color: #fff;
  left: 50%;
  min-height: ${rem(44)};
  position: fixed;
  transform: translate(-50%, -50%);
  width: ${props => rem(props.width)};
`;

Dialog.Close = styled.button`
  background-color: rgba(0, 0, 0, 0.25);
  border: 0;
  height: ${rem(44)};
  left: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  text-indent: -9999px;
  top: 0;
  width: ${rem(44)};
`;

export default Dialog;
