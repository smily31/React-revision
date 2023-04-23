import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal-root")
  );
};

export default PortalDemo;

// Portal Examples
// 1. https://codesandbox.io/s/00254q4n6p
// 2. https://codepen.io/gaearon/pen/jGBWpE
