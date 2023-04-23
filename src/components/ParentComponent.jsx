import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Rajesh",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} father of ${childName}`);
  }

  render() {
    return (
      <>
        <div>
          <ChildComponent greetHandle={this.greetParent} />{" "}
          {/*passing a reference to a greetParent method as the prop called greetHandle*/}
        </div>
      </>
    );
  }
}
