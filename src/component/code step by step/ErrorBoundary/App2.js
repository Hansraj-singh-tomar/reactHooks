import React from 'react'
import User from './User';
import ErrorBound from './ErrorBound';
const App2 = () => {
  return (
    <>
        <h1>Error Boundary in React</h1>
        <ErrorBound>
            <User/>
        </ErrorBound>
    </>
  )
}

// User component me jo bhi error aayegi vo ErrorBound component me jayegi or iss component me pura execute hoga or agar koi error mili to ye state update kar dega.

export default App2;


// what is Error Boundary - hamare pass ek koi bhi snipped of code hota hai uske andar 
// hame kabhi bhi error aa jati hai to usko handle karne ke liye ham koi custom page/ custom message 
// dikhate hai to usko basically ham error boundary kehte hai  