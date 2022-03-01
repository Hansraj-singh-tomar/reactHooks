import React, { useState, useEffect } from 'react'
import axios from 'axios'  // for making the HTTP call we need Axios so import Axios from Axios 

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError("Something went wrong!")
            })
    }, [])
    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne


/*
  we will be fetching data from an API endpoint if you can recollect we have already had a look at data fetching with the useEffect hook
  however with useEffect we were using the useState hook this time though instead of useState we will be using the useReducer hook remember 
  both useState and useReducer are used for state management so what i want to do is compare in contrast how we use them both 
  for data fetching which is why in this video we will go over data fetching with the useState hook and in the next video.
  
  we are going to do the same with useReducer hook in the both vidoe the scenario remains the same as soon as the component 
  mounts we will make an API call to fetch data while the data is being fetched we will show a loading indicator when the data is fetched successfully
  we will hide the loading indicator and display the data if there was an error fetching the data we hide the loading indicator and display an error message
  all right with these points in mind 
  
  1. let's begin the first step is to install the axios package in the terminal run the command npm install Axios
  2. next i'm going to create a new file called DataFetchingOne.js
  3. let's begin with our imports we need useState for managing the component state and useEffect for the side effect   
  4. for making the HTTP call we need Axios so import Axios from Axios 
  5. the next step is to define the state variables required for this data fetching component for our simple scenario 
    we need three state variables a loading flag to indicate the data fetching happening in the background so 
    i. const [loading, setLoading] = useState(true)
    
    ii. next variable is an error message to display an error if something went wrong 
        const [error, setError] = useState("")  // the initial value will be an empty string 
    
    iii. and finally a variable to hold the post which we will be fetching from an API endpoint 
         const [post,setPost] = useState({})  // the initial value is an empty object
         
   6. now that we have the state variables the next step is to make the API call and set the appropriate state 
      for side-effects we use useEffect it accepts an arrow functions as its first parameter and for the second parameter 
      we pass in an empty dependency array to ensure our API is only called once that is we want the componentDidMount behavior
      now within the error function we make our get request axios.get("") for the end point we will again be using JSON placeholder from 
      this we are going to pick the end point that returns exactly one post click on the link and copy the URL and paste the 
      URL as a parameter to the get request when the get request is made a promise is returned so let's add a then block and a
      catch block 
    7. if the request is successful we make three state transitions first we set loading to false - setLoading(false)
       next we set the post variable to response.data which contains the post object - setPost(response.data)
       finally we set the error message to empty to clear any previous message if at all they were being displayed set error
       an empty string - setError("")
    8. now our request might not success all the time so let's add code in the catch block as well again we first set the loading flag to false - setLoading(false)
       after that we set the post object to an empty object to hide any existing post that might be displayed in the browser
       finally we set the error message to something went wrong 
    9. for the last bit of code let's take care of the jsx. if at all the component is busy loading the data we are going to
       display the string loading else we are going to display the post.title however if there is an error we also need to display that
       so if error display error else return null and that is it .

*/