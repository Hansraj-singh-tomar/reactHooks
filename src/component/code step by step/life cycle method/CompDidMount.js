import React, { Component } from 'react';

class CompDidMount extends Component {
    constructor() {
        super();  // isse hame this keyword use karne me problem na ho isliye super() keyword ka use karte hai
        // console.warn("constructor method call");
        this.state = {
            name: "hansraj"
        }
    }
    componentDidMount() {
        console.warn("componentDidMount method call");
    }
    render() {
        console.warn("render method call");
        // this.setState({name:"hansraj"});
        return (
            <div>
                <h1>compnentDidMount this is {this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'shivani' })}>Update Name</button>
            </div>
        );
    }
}

export default CompDidMount;


/*
    -> pehle constructor call hoga then render method then componentDidMount method
    -> like that in console - 1.constructor method call
                              2.render method call
                              3.componentDidMount method call
    -> state and props update hone par render method to fir se chalega but compnentDidMount method nhi chalega
*/

//! Q. kya hame render method ke andar state ko update karvana chahiye
// onClick={() => this.setState({ name: 'shivani' })} ye alag chij hai yha ham event ka use kar rhe hai

//! kya ham componentDidMount ke andar state update karva sakte hai kya 