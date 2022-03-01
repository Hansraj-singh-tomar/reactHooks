import React, { useReducer } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

export const CountContext = React.createContext()

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

const App2 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div className="App">
                Count - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default App2

/*
    so far we have seen examples with use reducer for local state management that is at the component level but at some point you might share between  
    components that is we might want to work with global state now how do we do that well we can manage global state by combining use reducer long with  
    useContext.
    
    ! useReducer -> Local state management
    ! useReducer + useContext -> Global state management (share state between components)
*/

/*
    1. now for that we have two main steps
    first step is to create a counter in a App2.js using the reducer hook.
    second step is to provide and consume the counter context in the required components 

    2. For the dispatch method we don't want to dispatch any action from the app component we want to dispatch actions from the nested components
     this is where we begin step number two we make useContext to provide the count value and the dispatch method and consume the same from the nested components
     so for step two we first begin by creating a context using the create context API so at the very top after the set of import statements.

    3. finally we can use the context hook to consume the state and this dispatch method  
*/