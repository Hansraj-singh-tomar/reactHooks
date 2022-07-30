import React, {useState,useEffect} from 'react'
import User from './User';

const ErrorBound = () => {
  const [error,setError] = useState(null);
  useEffect( () => {
     setError(true)  // error true hone par hame <h1>custom page for error handling</h1> dikhega
  },[])
  return (
    <>
        { error ? <h1>custom page for error handling</h1>:<User/>}
    </>
  )
}

export default ErrorBound


 