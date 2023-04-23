import React from "react";

const ChildComponent = (props) => {
  return (
    <>
      {/* When button clicked in child component, we want execute method define in Parent component */}
      {/* <button onClick={props.greetHandle}>Greet Parent</button>  */}
      {/* How to pass parameter when calling a parent method from child component */}
      <button onClick={() => props.greetHandle("ritika")}>Greet Parent</button>
    </>
  );
};

export default ChildComponent;
