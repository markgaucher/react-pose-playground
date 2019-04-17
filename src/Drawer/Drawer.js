import styled from "styled-components";
import posed from "react-pose";
import { rem } from "polished";

const PosedDrawer = posed.div({
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

Drawer.Close = styled.button`
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

export default Drawer;
