import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    console.log(this.props.name);
    return (
      <>
        <button onClick={incrementCount}>
          {this.props.name} Click {count} times
        </button>
      </>
    );
  }
}

export default withCounter(ClickCount, 5);
