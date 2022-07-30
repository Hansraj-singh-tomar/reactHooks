import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem('login',true)
        navigate('/');
    }
    React.useEffect( () => {
        let login = localStorage.getItem('login')
         if(login){
            navigate('/')
         }
    })
    return (
        <>
          <h2>Login Page</h2> 
          <input type="text" />
          <input type="text" />
          <button onClick={login}>Login</button>
        </>
    )

}

export default Login