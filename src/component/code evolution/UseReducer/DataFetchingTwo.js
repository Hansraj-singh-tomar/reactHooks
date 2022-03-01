import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

// for the initial state 
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: '',
                error: 'Somoething went wrong!'
            }
        default:
            return state
    }
}

const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)  // useReducer returns pair of values which is the current state and dispatch method

    // now we can make our HTTP call
    // the only change we need is to replace all occurrences of useState with useReducer  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                // when the data fetching is successful we dispatch an action, the action thouugh is an object with type set to
                // fetch underscore success and the payload set to response.data
                // this will correspond to action.type and action.payload in our reducer function 
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            {/* {loading ? 'Loading' : post.title}
          {error ? error : null}    */}
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo

/*
    Third step - invoking useReducer and useEffect to fetch the data and set the state
        i. first within the component we call useReducer passing in the reducer function and the 
           initial state
    Final step - final step is to specify the JSX, the only change we need to make is to append state to all the 
    variables names state.loading, state.post.title, state.error this is because they are all a part of
    this object now.

    conclusion- so what have we done differently from the DataFetchingOne.js component 
    we have just replaced useState with useReducer in doing so we have grouped the related state variables together
    and at the same time the state transitions are also grouped together

*/