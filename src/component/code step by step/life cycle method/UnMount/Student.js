import React, { Component } from 'react'

export default class Student extends Component {
    componentWillUnmount() {  // jab hamara Student.js vala component remove hoga tab ye component chalega
        // alert("compnent will mount called")
        console.warn("componentWillUnmount called");
    }
    //! componentWillUnmount use karne ke fayde -
    // kai bar jab ham API call kar rhe hote hai or hame ek dam se component remove karna hota hai to uss request ko yha par cancel kar sakte hai
    // agar hamari koi data loading chal rhi ho usko ham yha par cancel kar sakte hai
    // yha par ham koi function or event call bhi kar sakte hai
    // uss compnent ke liye jo setTimeOut functio chal rha hai usse iske through component remove hone par hta sakte hai 
    render() {
        return (
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
}

//! Q. agar hamara parent component function component hai or child component class compnent hai kya tab bhi componentWillUnmount call hoga
// Ans - yes 