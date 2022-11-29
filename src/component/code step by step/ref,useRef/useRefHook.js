//! Emergency me ya jha useState se kam na bane tab hame useRef() hook ka use karna hai 

import React, { useRef } from 'react';

const useRefHook = () => {
    let inputRef = useRef(null);  // jha jha bhi inputRef ka usekarunga uss element ka control iske pass aa jayega
    function HandleInput() {
        console.warn("function is working perfectly");

        // ! current useRef ki ek property hai

        // kaise ham input ke andar ek value ko add kar sakte hai
        inputRef.current.value = "hansraj";

        // jaise hi ham input ke andar kuch likhte hai to focus aa jata hai or button ke click karne par vo vapas chala jata hai to usse vapas add karne ke liye ham focus() ka use karege
        inputRef.current.focus();  // isse useEffect me likhunga to mera input hamesa focus mode me rhega

        // ab style change karenge
        inputRef.current.style.color = "red"

        // display none ka use karenge isse hamara input box gayab ho jayega, iss tarah se ham hide/show bhi kar sakte hai  
        inputRef.current.style.display = "none"
    }
    return (
        <div>
            <h1>useRef in React</h1>
            <input type="text" ref={inputRef} />
            <button onClick={HandleInput}>Handle Input</button>
        </div>
    );
};

export default useRefHook;

