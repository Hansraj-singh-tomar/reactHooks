import React, { Component } from 'react'
import Student from './Student'
export default class CompWillUnmount extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div>
        {/* <h1>Component Will Unmount.</h1> */}
        {
          this.state.show ? <Student /> : <h1>Child component Removed</h1>
        }
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child Component</button>
      </div>
    )
  }
}


// jab bhi hamara compnent dom se remove hoga tab hamara ComponentWillUnmount method call hoga
// jab bhi ham react ke andar ek component ko hide/show karte hai to esa nhi hai ki ham uski css ki property ko display none karte hai
// actual me ham uss component ko completely DOM se hi delete karte hai tabhi ye vala life cycle method run hota hai

// ! this.setState({show:!this.state.show})} ye true ko false or false ko true karta hai 