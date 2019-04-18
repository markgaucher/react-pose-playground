import React from "react";
import PropTypes from "prop-types";
import { PoseGroup } from "react-pose";

import Background from "../Background";
import Close from "../Close";
import Drawer from "./Drawer";
import Portal from "../Portal";
import useToggle from "../useToggle";

const DrawerComponent = ({ children, renderToggle, width }) => {
  const [active, toggle] = useToggle();

  return (
    <React.Fragment>
      {renderToggle({ toggle })}
      <Portal>
        <PoseGroup>
          {active && [
            <Background key="background" />,
            <Drawer key="drawer" width={width}>
              <Drawer.Header>
                <Close onClick={toggle}>Close</Close>
              </Drawer.Header>
              <Drawer.Content>{children}</Drawer.Content>
            </Drawer>
          ]}
        </PoseGroup>
      </Portal>
    </React.Fragment>
  );
};

DrawerComponent.propTypes = {
  renderToggle: PropTypes.func,
  width: PropTypes.number
};

DrawerComponent.defaultProps = {
  renderToggle: ({ toggle }) => <button onClick={toggle}>Click Me</button>,
  width: 200
};

export default DrawerComponent;
