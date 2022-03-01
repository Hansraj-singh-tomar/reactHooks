// ! useReducer (complex state & action)
import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

// in the reducer function the switch expression is now going to be action.type  
const reducer = (state, action) => {
    // by using action as an object we are able to pass additional data to the reducer function
    switch (action.type) {
        case 'increment':
            // finaally for increment and decrement actions we now need to return the new state object so return an object
            // return { fistCounter: state.fistCounter + 1 };
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            // return { fistCounter: state.fistCounter - 1 };
            return { ...state, firstCounter: state.firstCounter - action.value };

        case 'increment2':
            // return { fistCounter: state.fistCounter - 1 };
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            // return { fistCounter: state.fistCounter - 1 };
            return { ...state, secondCounter: state.secondCounter - action.value };

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
            <h1>firstCount - {count.firstCounter}</h1>
            <h1>secondCount - {count.secondCounter}</h1>
            {/* finally we convert our simple string action into an object as well the object is going to contain a property called type which is string so curly braces type increment  */}
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Inc</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Dec</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Inc 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Dec 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Inc counter 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Dec counter 2</button>
            </div>
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
   now we have two properties in the state object we're changing only one at a time, to get the expected output we have to modify the return statements to merge the state properties and 
   we have already seen how to do that using the spread operator so within the object we spread the state object ...state and then overwrite the appropriate
   property first counter said the state.firstcounter + action.value let's add this for the other cases as well in the render function we can now add the JSX
   pertaining to the second counter 

   i'm also going to add two more buttons to increment this second counter this is going to be increment counter 2 and decrement counter 2 and 
   dispatch is going to be increment two and decrement two

3. so by using state as an object we are able to keep tract of two different counters so what i want you to take away from this secomd example 
   we can maintain both the state and action as objects, by using action as an object we are able to pass additional data to the reducer function,
    by using state as an obejct we are able to keep track of multiple state variables. we have this approach of maintaining multiple variables in a single state object is suited when dealing with 
   global state but right now we are dealing with local state and when dealing with local state we have another way to keep track of multiple variables   
*/