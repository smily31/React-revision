import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked it")
    }
  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Click the class Button</button>
      </>
    )
  }
}

export default ClassClick