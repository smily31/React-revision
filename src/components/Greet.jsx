import React from "react";

// function Greet(){
//     return <h1>Hello Ritu</h1>
// }

// ES6

// this is named export
// export const Greet = () => <h1>Hello Ritika</h1>

// JSX
const Greet = (props) => {
  const {name} = props
  return (
      <div>
          <h1>Hello {name}</h1>
          {props.children}
      </div>
  )
//   return React.createElement(
//     "div",
//     { id: "hello", className: "dummyClass" },
//     React.createElement("h1", null, "Hello Sir")
//   );
};

export default Greet;
