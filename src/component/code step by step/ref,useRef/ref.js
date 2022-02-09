// Functional component me ref ka directly use nhi kar sakte hai
// isse hame class base component me use karna padega
// ref directly DOM ko manipulate karta hai 

// TODO ref ko hame kam se kam use karna hai

// ! reactJs hamesha ye bolta hai ki aap log directly DOM ko manipulate na kare, agar dom ko manipulate karoge to reactJS thodi slow ho jayegi
// ! iske apne tarike state prop se khelo,
// ** hide / show ke liye state ka use karte hai react js me.

// ! ref hame dom ko maniputate karne ki power deta hai like show/hide, style chang karna ,focus add karna 





import React, { Component, createRef } from 'react';

class Ref extends Component {
    constructor() {
        super();
        this.inputRef = createRef();  // ab inputRef ke pass ref ki power aa gyi hai, ab inputRef ke power hai ki jiske upar bhi me apply kar dungana ye uski properties ko change kar sakta hai
        // but iss inputRef ko lgane ke liye ref={} attribute ka use karna padta hai
    }

    // jab tak hamara html ready ho chuka hota hai 
    componentDidMount() {
        // console.warn(this.inputRef);  // isme hame sari ki sari properties mil jayegi ref ki 
        // console.warn(this.inputRef.current.value = "1000")  // ye 1000 hame input ke andar dikhega iss tarah se ham Dom ko manipulate kar sakte hai 
    }

    getVal() {
        console.warn(this.inputRef);
        console.warn(this.inputRef.current.value); // ab jo bhi value input me likhunga vo mujhe console me dekhne ko milegi mtlb ham yha input ki value bhi get kar sakte hai 
        this.inputRef.current.style.color = "black";  // jaise hi button par click karunga iske text ka color red ho jayega 
        this.inputRef.current.style.backgroundColor = "green";
        this.inputRef.current.focus(); // focus ke alava nya element bhi add kar sakte hai 
    }

    render() {
        return (
            <div>
                <h1>Ref in React</h1>
                <input type="text" ref={this.inputRef} />
                {/* button ke click ke upar kuch change karenge  */}
                <button onClick={() => this.getVal()}>check Ref</button>
            </div>
        );
    }
}

export default Ref;

// ! ref ko function compnent ke andar use karne ke liye hamarre pass ek hook hota hai useRef() name se iss hook ko class base component me use nhi kar payenge
//Q. kya me ek component ke andar ek se jyada Ref use kar sakta hu, yes
//Q. or kya ek hi element ke andar ek se jyada ref use kar paunga 

