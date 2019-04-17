import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Drawer from "./Drawer";
import Dialog from "./Dialog";

function App() {
  return (
    <main>
      <Drawer
        renderToggle={({ toggle }) => <Button onClick={toggle}>Drawer</Button>}
      />
      <Dialog
        renderToggle={({ toggle }) => <Button onClick={toggle}>Dialog</Button>}
      />
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
