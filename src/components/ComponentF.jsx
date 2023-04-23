import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      // Consume the contest value
      <UserConsumer>
        {(username) => {
          return <h3>Hello {username}</h3>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
