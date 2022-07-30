// Test jwt with postman
// Make Login from with react
// call login from with react 
// Handle jwt token 
// call other api with jwt Auth
// key : Authorization, value :  Bearer token(sdfnfsdinsnfnsdnfkjsjdfkjsdjf)

import React, {useState} from 'react'

const JWTAuthentication = () => {
    const [state,setState] = useState({
        email : null,
        password : null,
        // login : false,
        // token : null
    })
    return (
    <>
        <h1>JWT Token with  </h1>
        <div>
            <h1>{state.email}</h1>
            <h1>{state.password}</h1>
           <input type="text" onChange={(e)=>{setState({email : e.target.value,})}}/> <br/><br/>           
           <input type="text" onChange={(e)=>{setState({password : e.target.value})}}/> <br/><br/> 
           {/* <button onClick={login}>Login </button>           */}
        </div>
    </>
    )
}

export default JWTAuthentication