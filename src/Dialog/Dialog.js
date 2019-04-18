import styled from "styled-components";
import posed from "react-pose";
import { rem } from "polished";

import { Close } from "../Close";

const PosedDialog = posed.section({
  enter: { opacity: 1, top: "25%" },
  exit: { opacity: 0, top: "35%" }
});

const Dialog = styled(PosedDialog)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: fixed;
  transform: translate(-50%, 0);
  width: ${props => rem(props.width)};
`;

Dialog.Header = styled.header`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.025);
  display: flex;
  font-size: ${rem(12)};
  justify-content: center;
  font-weight: 500;
  height: ${rem(44)};
  letter-spacing: 1px;
  position: relative;
  text-transform: uppercase;

  ${Close} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

Dialog.Content = styled.div`
  padding: ${rem(16)};

  > :last-child {
    margin-bottom: 0;
  }
`;

export default Dialog;
