// Custom Hooks in react
// A custom hook is a js function whose name starts with "use"
// we can use other hooks in custom hooks as well.

// why to use Custom Hook ?
// to remove the duplicated logic in Components and we can extract that logic to custom hook.


import {useState} from 'react'

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    function Increment(){
        setCount(count + 1)
    }
    function Decrement(){
        setCount(count - 1)
    }
  return [count, Increment, Decrement]
}

export default useCounter