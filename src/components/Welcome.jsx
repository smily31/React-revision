import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name } = this.props; // Destructuring props
    return (
      <>
        <h1>Welcome {name}</h1>
        {this.props.children}
      </>
    );
  }
}

export default Welcome;
