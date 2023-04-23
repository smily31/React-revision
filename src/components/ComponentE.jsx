import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType = UserContext

  render() {
    return (
      <>
      <h2>Component E context {this.context}</h2>
        <ComponentF/>
      </>
    )
  }
}

// ComponentE.contextType = UserContext

export default ComponentE

// Disadvantages of using context type
// 1. It only works with class component
// 2. you can subscribe to only single context using contextType