import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

// when we change our parent comp to pure comp then no component wil re-render
// as componentDidMount() will listen to change in state
export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ritika",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ritika",
      });
    }, 2000);
  }

  render() {
    console.log("***Parent Component Render ****");
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}
