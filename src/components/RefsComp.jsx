import React, { Component } from "react";

class RefsComp extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(); // first approach of accessing ref using CreateRef  // 1 step in second approach called callback ref
    this.cbRef = null; // 2 step, create a property
    this.setCbRef = (element) => {
      // 3 step, create a method that assign the property with DOM element pass as parameter
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
    if (this.cbRef) {
      // 4 step
      this.cbRef.focus();
    }
  }

  clickHandle = () => {
    alert(`${this.inputRef.current.value}`);
  };

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandle}>Click</button>
      </>
    );
  }
}

export default RefsComp;
