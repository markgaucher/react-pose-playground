import ReactDOM from "react-dom";

export default ({ children }) =>
  ReactDOM.createPortal(children, document.getElementById("modal-root"));
