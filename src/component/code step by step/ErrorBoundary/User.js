import React,{useState} from 'react'

const User = () => {
  // if(false){
  //   throw new Error('custom error from User.js page');   
  // }
  const [counter, setCounter] = useState(0);

    if(counter > 5) {
        throw new Error("I crashed, custom error from User.js page");
    }
  return (
    <div>
        <div>User Component.</div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default User;