import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increase() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Sync update", this.state.count);
    //   }
    // );
    // console.log(this.state.count);
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback count", this.state.count);
      }
    );
    console.log(this.state.count);
  }
  incFive() {
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
  }
  render() {
    return (
      <>
        <h2>Counter - {this.state.count}</h2>
        <button type="submit" onClick={() => this.incFive()}>
          Click to Increase
        </button>
      </>
    );
  }
}
