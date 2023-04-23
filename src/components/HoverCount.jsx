import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hover {count} times</h2>;
  }
}

export default withCounter(HoverCount, 10);
