import styled from "styled-components";
import posed from "react-pose";
import { rem } from "polished";

import { Close } from "../Close";

const PosedDrawer = posed.section({
  enter: { transform: "translateX(0%)" },
  exit: { transform: "translateX(100%)" }
});

const Drawer = styled(PosedDrawer)`
  background-color: #fff;
  bottom: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: ${props => rem(props.width)};
`;

Drawer.Header = styled.header`
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
    left: 0;
    position: absolute;
    top: 0;
  }
`;

Drawer.Content = styled.div`
  padding: ${rem(16)};

  > :last-child {
    margin-bottom: 0;
  }
`;

export default Drawer;
