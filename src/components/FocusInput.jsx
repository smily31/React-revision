import React, { Component } from "react";
import Input from "./Input";

// when you need a ref to a child component from a parent component

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  clickHandle = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandle}>Click</button>
      </>
    );
  }
}

export default FocusInput;
