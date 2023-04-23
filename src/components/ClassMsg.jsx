import React, { Component } from "react";

export default class ClassMsg extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  changeMsg() {
    this.setState({
      message: "Thankyou for Subscribing",
    });
  }
  render() {
    const { message } = this.state; // destructuring state
    return (
      <>
        <h1>{message}</h1>
        <button type="submit" onClick={() => this.changeMsg()}>
          Subscribe
        </button>
      </>
    );
  }
}
