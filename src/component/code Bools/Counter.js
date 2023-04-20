import React, {useState} from 'react'

const Counter = ({title}) => {
    const [counter, setCounter] = useState();

    if(counter > 5){
        throw new Error("I Crashed")
    }
  return (
    <div>
        <div>Counter {title}</div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default Counter