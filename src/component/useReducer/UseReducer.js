/*  In JavaScript Reduce method :- The first and most important thing to understand about a reducer is that 
it will always only return one value. The job of a reducer is to reduce. 
That one value can be a number, a string, an array or an object, 
but it will always only be one. Reducers are really great for a lot of things,
but they’re especially useful for applying a bit of logic to a 
group of values and ending up with another single result. */

/* But in React useReducer having seen the way reduce fires a function against an initial value. 
It’s the same sort of concept, but returns two elements as an array,
the current state and a dispatch function. */
/*differences 
 1: Js reduce method returns only one value 
 1: react useReducer return two elements as an array  */

// ! Reducers are pure functions that take in a state and action and return a new state.
// TODO: pure function - the function does not produce any side-effects.the function returns the same output if the same arguments are passed in.
//  like 5+5 dene par 10 milega mtlb jo bhi value denge output same dega

// ! we call dispatch() in our code when we want to change state. we already have a reducer set up to do the legwork of changing
// !  the state we just need to be able to trigger how to change it.

import React from 'react';
import './reducers.css';

const initialState = 5; // ! 0 ki jagah multiple object bhi pass kar sakta hu as a initialState 

const reducer = (state, action) => {           // reducer function takes two parameter pehla current state and second action method/function
    // hame 2 action perform karne hai first is increament vala and second is decrement vala

    // console.log(state, action);  // TODO :  5 {type: 'INCREMENT'} on click of increment button
    // console.log(state, action);  // TODO :  5 {type: 'DECREMENT'} on click of decrement button

    // ! {type: "INCREMENT"}, me type attribute se action method ko pta chalega ki ye logic trigger karna hai
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    if (action.type === 'DECREMENT') {
        return state - 1;
    }
    // instate of if_else we can use switch case
    return state;
}

const UseReducer = () => {
    // react useReducer return two elements as an array
    // const [count, setCount] = React.useState(0);  // initialState = state,  count = state and setCount = dispatch
    const [count, dispatch] = React.useReducer(reducer, initialState); // ! ab hame iss reducer function ko define karna hai ham isse iss component ke andar or component ke bahar or dusre folder or dusri file me bhi define kar sakte hai
    // UseReducer(reducer, 0);  //  initialState ko ese bhi direct difine kar sakta hu ya const initialState = 0; variable bna kar bhi use kar sakta hu 
    // dispatch - jis bhi address par apka product bhejna hai ab vo vha aa jayega
    // dispatch ka kam hai tregger the action method jo increment ya decrement hai

    return (
        <>
            <div>
                <p>{count}</p>  
                <div className='btnStylePosition'>
                    <button onClick={() => dispatch({ type: "INCREMENT" })}> INC </button>
                    <button onClick={() => dispatch({ type: "DECREMENT" })}> DEC </button>
                    {/* dispatch ka kya kam hai -> trigger the action method */}
                </div>
            </div>
        </>
    );
};

export default UseReducer;




