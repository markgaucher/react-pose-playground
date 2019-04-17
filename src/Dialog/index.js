import React from "react";
import PropTypes from "prop-types";
import { PoseGroup } from "react-pose";

import Background from "../Background";
import Dialog from "./Dialog";
import Portal from "../Portal";
import useToggle from "../useToggle";

const DialogComponent = ({ children, renderToggle, width }) => {
  const [active, toggle] = useToggle();

  return (
    <React.Fragment>
      {renderToggle({ toggle })}
      <Portal>
        <PoseGroup>
          {active && [
            <Background key="background" />,
            <Dialog key="dialog" width={width}>
              <Dialog.Close onClick={toggle}>Close</Dialog.Close>
              {children}
            </Dialog>
          ]}
        </PoseGroup>
      </Portal>
    </React.Fragment>
  );
};

DialogComponent.propTypes = {
  renderToggle: PropTypes.func,
  width: PropTypes.number
};

DialogComponent.defaultProps = {
  renderToggle: ({ toggle }) => <button onClick={toggle}>Click Me</button>,
  width: 200
};

export default DialogComponent;
