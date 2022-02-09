// ! forwardRef - ye ref ka hi ek advance version hai

// why use forwardRef - man lo jab hamare input box and button alag alag component ho tab ham uska dom kis tarah se access karenge tab ham use karte hai forwardRef
// make a child component - which is our User.js
// pass Ref with props and use it in User.js child component.

// abhi hamare pass ek parent component hai jisme ek button hai or ek hamare pass child compnent hai jisme input box hai 
// hame button ke click par input  me changes karvana hai ref ka use kar ke tlb Dom me manipulation karvana hai
// ek component se dusre component me ref ko le jane ke liye ham forwardRef ka use karenge

import React, { useRef } from 'react';
import User from './User';

const Home = () => {
    let inputRef = useRef(null);
    function updateInput() {
        inputRef.current.value = "shivani";
        inputRef.current.style.color = "red"
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>forwardRef in React.</h1>
            <User ref={inputRef} />
            <button onClick={updateInput}>Update Input Box</button>
        </div>
    );
};

export default Home;
