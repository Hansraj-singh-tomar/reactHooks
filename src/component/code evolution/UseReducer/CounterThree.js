/*
    In CounterTwo we maintain a state object to track two different counters to update the second counter we also had to create additional
    switch cases in the reducer function. now this is fine but if we need two counters with the exact same state transition 
    there is a much simpler alternative and that is to use multiple use reducer hooks 
*/
/* 
   ! so when dealing with multiple state variables that have the same state transitions it is a good idea to have multiple views reducer 
   ! making use of the same reducer function. this will avoid the complexity of merging the state if it were to be an object and also prevents us
   ! duplicating code in the reducer function like we have already seen in counterTwo.js file 
*/



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

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={() => dispatch('increment')}>Inc</button>
            <button onClick={() => dispatch('decrement')}>Dec</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <h1>Count Two - {countTwo}</h1>
                <button onClick={() => dispatchTwo('increment')}>Inc</button>
                <button onClick={() => dispatchTwo('decrement')}>Dec</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    );
};

export default CounterThree;

/*
    so far we have seen examples with use reducer for local state management that is at the component level but at some point you might share between  
    components that is we might want to work with global state now how do we do that well we can manage global state by combining use reducer long with  
    useContext.
    
    ! useReducer -> Local state management
    ! useReducer + useContext -> Global state management (share state between components)
*/

