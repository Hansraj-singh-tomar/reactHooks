import React from 'react'
import { Link, useLocation } from 'react-router-dom';
export const About = () => {
  const location = useLocation();
  console.log(location); 
  // Object 
            // hash: ""   // http://localhost:3000/#100 => hash: "#100"
            // key: "2d7yrlc7"
            // pathname: "/about"
            // search: ""  // http://localhost:3000/?age=10 => search: "?age=10"
            // state: null // http://localhost:3000/anil => state: {name:'anil sidhu',age:23}
  return (
    <>
      <h1>About</h1>
      <p>This is a About Page of our awesome App</p>
      <p>Here we are learning about Router.</p>
      <Link to="/">Go to Home Page</Link>
      <Link to="/user/anil" state={{name:'anil sidhu',age:23}}>Anil</Link>
      <Link to="/user/peter">Peter</Link>
    </>
  )
}



// Protected Router 
// 1. make login page 
// 2. Make protected route 
// 3. use Protected route
// 4. use local storage to complete flow
