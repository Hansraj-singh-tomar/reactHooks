// Error Boundary kya karta hai ki jis component me error aaya hai ussi component me effect dalega. other jo bhi component hai app me jo import ho rhe hai un par reflect nhi dalega or puri app ko crashed hone se bachayega.

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


 