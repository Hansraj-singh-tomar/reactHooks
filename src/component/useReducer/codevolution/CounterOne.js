// ! useReducer (simple state & action)
import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterOne = () => {
    // similar to useState, useReducer also returns a pair of value, which we can hold of using the Array Destructuring syntax  
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={() => dispatch('increment')}>Inc</button>
            <button onClick={() => dispatch('increment')}>Dec</button>
            <button onClick={() => dispatch('increment')}>Reset</button>
        </div>
    );
};

export default CounterOne;


/*
 1. useReducer is a hook that is used for state management
 2. It is an alternative to useState
 3. useState is built using useReducer, so useReducer is more primitive hook in compare to useState
 4. when to use useReducer and useState ? - copy me hai isk answer

 ! reduce in javaScript - 
 1. array.reduce(reducer,initialValue)
 2. singleValue = reducer(accumulator, itemValue)
 3. reduce method returns a single value 

 ! useReducer in React
 1. useReducer(reducer,initialState)
 2. newState = reducer(currentState, action)
 3. useReducer returns a pair of values,[newState, dispatch]
 
 ! useReducer summary
 1. useReducer is a hook that is used for state management
 2. useReducer is a related to reducer function 
 3. useReducer hook accepts two parameter -> useReducer(reducer.initialState) first is reducer function and second is initial value 
 4. the reducer function also takes two parameter reducer(currentState,action)  

 */