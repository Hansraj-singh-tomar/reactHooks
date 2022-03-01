import React, { Component } from 'react'

class Construc extends Component {
    constructor() {
        super();  // iss constructor ka jo parent constructor hota hai na usko call karne ke liye ham super() method ka use karte hai jo Component hai hamara parent constructor
        // console.log("constructor");   // pehle constructur ke andar ka console chalega then render ke andar ka 
        this.state = {
            name: "Hansraj",
        }
        // console.warn(this.props.name); // only jab name nam ka props chahiye ho tab 
        // console.warn(this.props); // or jab sare props chahiye tab

        // ! constructor function ke andar API call nhi karni chahiye componenetDidMount ke andar hame API call karni chahiye
    }
    render() {
        // console.log("render");  // pehle constructur ke andar ka console chalega then render ke andar ka 
        return (
            <h1>Hello, this is constructor method which is first life cycle method. {this.state.name} </h1>  // so name nam ki state pehle hi ready ho jayegi html ke ready hone se pehle 
        )
    }
}

export default Construc;

// TODO Q. kya ham constructor ke andar props le sakte hai, props hamare parent component se aaate hai
// to kya jab tak hamara constructor banta hai tab tak hamare props aa chuke hote hai kya ya nhi aate hai ?
// Answer - yes



// ! component unmount hone ke baad us component ki lifecycle method dobara se chalegi or component bhi dobara se hi banega