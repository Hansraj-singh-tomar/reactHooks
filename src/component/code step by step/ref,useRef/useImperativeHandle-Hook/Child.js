import React, { forwardRef, useImperativeHandle } from 'react'

const Child = (props, ref) => {
    useImperativeHandle(ref, () => {
        return {
            hiii: () => sayHi(),  // ye object property hiii, ref se connect ho gya hai or jaisehi ye ref iss hiii ko call karega to automatically sayHi() call ho jayega
            
            //shortcut
            // sayHi, 
        }
    })

    // shortcut 
    // useImperativeHandle(ref, () => ({sayHi,}));

    const sayHi  = () => {
        console.log("Hi, Everyone");
    }
    return (
        <div>Child Component.</div>
    )
}

export default forwardRef(Child);

// iss tarah se ham child ki method or variable ko use kar sakte haii 