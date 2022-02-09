// ! useReducer (complex state & action)
import React, { useReducer } from 'react';

const initialState = {
    fistCounter: 0,
    secondCounter: 10
};

// in the reducer function the switch expression is now going to be action dot type  
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            // finaally for increment and decrement actions we now need to return the new state object so return an object
            // return { fistCounter: state.fistCounter + 1 };
            return { fistCounter: state.fistCounter + action.value };
        case 'decrement':
            // return { fistCounter: state.fistCounter - 1 };
            return { fistCounter: state.fistCounter - action.value };

        case 'increment2':
            // return { fistCounter: state.fistCounter - 1 };
            return { secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            // return { fistCounter: state.fistCounter - 1 };
            return { secondCounter: state.secondCounter - action.value };

        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterTwo = () => {

    // similar to useState, useReducer also returns a pair of value, which we can hold of using the Array Destructuring syntax

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count - {count.fistCounter}</h1>
            {/* finally we convert our simple string action into an object as well the object is going to contain a property called type which is string so curly braces type increment  */}
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Inc</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Dec</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Inc 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Dec 5</button>
            <button onClick={() => dispatch({ type: 'reset', value: 1 })}>Reset</button>
        </div>
    );
};

export default CounterTwo;


/* 
! what is advantage of using this particular pattern

1. The first scenario is concerning the value by which we need to increment or decrement the counter right now you can see that the value is 1 
   what if we wanted to add two more buttons that could increment or decrement the value by 5 well that is easy when the action is an object right 
   now our action object has just the one property which is action type we can add a second property called value which should be the number to increment or the counter so
   for the existing buttons we add a value property set to 1

2. The second scenario we are going to talk about state as an object, suppose you wanted to maintain two different counters that turns out to be really simple if you state is an object 
   you simply add another property to your state let's add second counter and the initial value for this counter is 10 to change the second counter value 
   i'm going to create two more switch cases increment two and decrement two these for the second counter
   now we have two properties
*/