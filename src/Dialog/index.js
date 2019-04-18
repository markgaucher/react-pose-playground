import React from "react";
import PropTypes from "prop-types";
import { PoseGroup } from "react-pose";

import Background from "../Background";
import Close from "../Close";
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
              <Dialog.Header>
                Dialog Header
                <Close onClick={toggle}>Close</Close>
              </Dialog.Header>
              <Dialog.Content>{children}</Dialog.Content>
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
