import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

export default class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ritika'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    change = () => {
        this.setState({
            name: 'Bhatt'
        })
    }

  render() {
    console.log('LifecycleA render')
    return (
      <>
        LifeCycleA Render
        <button onClick={this.change}>Change</button>
        <LifecycleB/>
      </>
    )
  }
}
