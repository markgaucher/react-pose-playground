import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Dialog from "./Dialog";
import Drawer from "./Drawer";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Drawer
        renderToggle={({ toggle }) => (
          <Button onClick={toggle}>Open Drawer</Button>
        )}
        width={300}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          libero ipsum, tempor nec condimentum et, congue vel ante. Duis non
          ipsum enim. vel.
        </p>
      </Drawer>
      <Dialog
        renderToggle={({ toggle }) => (
          <Button onClick={toggle}>Open Dialog</Button>
        )}
        width={400}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          libero ipsum, tempor nec condimentum et, congue vel ante. Duis non
          ipsum enim. vel.
        </p>
      </Dialog>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
