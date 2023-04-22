import React, { Component } from 'react'
// EventHandler Binding
export default class EventBind extends Component {
    constructor() {
      super()
      this.state = {
         msg: 'Hello'
      }
    //   this.clickHandle = this.clickHandle.bind(this)   // binding in Constructor
    }
    
    // clickHandle(){
    //     this.setState({
    //         msg: 'Bye'
    //     })
    //     console.log(this)
    // }

    // EventHandle - use arrow function as class property
    clickHandle = () => {
        this.setState({
            msg: 'bye'
        })
    }

  render() {
    return (
      <>
       <div>{this.state.msg}</div>
       {/* <button onClick={this.clickHandle.bind(this)}>Click</button> */}    {/* Binding in render function */}
       {/* <button onClick={() => this.clickHandle()}>Click</button> */}        {/* Arrow function in render */}
       <button onClick={this.clickHandle}>Click</button>
      </>
    )
  }
}
