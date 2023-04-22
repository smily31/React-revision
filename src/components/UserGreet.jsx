import React, { Component } from 'react'

export default class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    // 4. Short circuit operator 
    return this.state.isLoggedIn && <div>Hello Ritika</div>

    // 3. Ternary Operator
    /* return (
        this.state.isLoggedIn ? <div>Hello Ritika</div> : <div>Hello Guest</div>
    ) */

    // 2. Element variable
    /* let message  // message is a variable which contain element to be rendered
    if(this.state.isLoggedIn){
        message = <div>Hello Ritika</div>
    }else {
        message = <div>Hello Guest</div>
    }
    return <div>{message}</div>  */

    // 1. if-else method 
    /* if(this.state.isLoggedIn){
        return <div>Hello Ritika</div>
    }
    else{
        return <div>Hello Guest</div>
    } */

    // return (
    //   <>
    //    <div>Hello Ritika</div> 
    //    <div>Hello Guest</div> 
    //   </>
    // )
  }
}
