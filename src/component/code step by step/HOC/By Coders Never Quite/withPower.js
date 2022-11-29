// code repetitive na ho iski problem solve karta hai 

import React from 'react'

const withPower = (Wcomponent) => {  // Wcomponent hi home component hai
    const newcomponent = (props) => {
        console.log(props); // {status: "coder"}  // ye App component se bheja hua data hai Home Component ko as a props, ye Home component me jana chahiye tha but ye withPower Component me aa gya iska reason hai ki hamne Home ko withPower() component me wrap kar diya tha isliye like that - export default withPower(Home); ab data ko Home Comp. me bhejne ke liye {...props} kar dunga Wcomponent me esa karne par mujhe Home Component me ye data mil jayega
        return (
            <div style={{backgroundColor: "red"}}>
                <Wcomponent name="hansraj" {...props}/>
            </div>
        )
    }
    return newcomponent;
}

export default withPower;


// ** A Higher-Oreder Component(HOC) is an advanced technique in React for reusing component logic.
// HOCs are common in third-party React libraries.
// A HOC is a function that takes a component and returns a new component.
// syntax :- const EnhancedComponent = higherOrderComponent(WrappedComponent);
// Ex. 1. const FacebookJob = withLanguage(ReactJS)
//     2. const Army = withArm(Men){
//     3. const Army = (Men) => { training }
// ! same component logic ko bar bar likhenge alag alag compnent me to vha ham HOC ka use karenge