// The Uncontrolled
// Uncontrolled inputs are like traditional HTML form inputs

// Example-
// class Form extends Component {
//     render() {
//         return (
//             <div>
//                 <input type="text" />
//             </div>
//         );
//     }
// }

// They remember what you typed.You can then get their value using a ref.

// In other words, you have to 'pull' the value from the field when you need it.This can happen when the form is submitted.

// That is the simplest way to implement the form inputs.There certainly are valid cases for using it: in simple forms in the real world; and when learning React.

//!  Class based component support control type functionality
//!  React ke andar input fields ko state ke through controll karte hai to unko ham controlled component kehte hai
//! uncontrolled component vo component hote hai jo directly DOM ke through handle hote hai 

// Ek bar load hone par hi ham data ko put kar sakte hai 
// dusri bar dalne ke liye hame refresh karna padega page ko
import React, { useRef, useState } from 'react';

const UnControlled = () => {

    // It like a useState only and its preserve the value. No reRender . same as like we are handling DOM // kisi chij ko hold kar ke rakhta hai
    const luckyName = useRef(null)   // luckyName hamare input field ko refrence kar rha hai
    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        // console.log(luckyName);        // {current: input#luckyName}
        // console.log(luckyName.current);  // <input type="text" id="luckyName" spellcheck="false" data-ms-editor="true">
        // console.log(luckyName.current.value);   // hansraj , mtlb jo bhi type kiya hai mene input field me 
        const name = luckyName.current.value;
        name === "" ? alert('plz fill the input') : setShow(true);  // agar input field empty hai to alert chalega nhi to show ki value true ho jayegi

    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">Enter Your luckyName</label>
                    <input type="text" id="luckyName" ref={luckyName} />
                </div>
                <br />
                <button>Submit</button>
            </form>
            <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
        </div>
    );
};

export default UnControlled;
