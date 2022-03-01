import React, { useState } from 'react'

const BasicFormValidation = () => {
    // ham four sate define karenge two's for validation and remaining two's for data
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);


    function loginHandle(e) {
        e.preventDefault();
        if (user.length < 3 || password.length < 3) {
            alert("please type correst values")
        } else {
            alert("all good 👍")
        }

    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 5) {
            console.warn("Invalid");
            setUserErr(true);
        } else {
            setUserErr(false);
        }
        setUser(item);
        // console.warn(e.target.value.length); // jo bhi input box me likha hai uski length hame show kar rha hai 
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 5) {
            console.warn("Invalid");
            setPasswordErr(true);
        } else {
            setPasswordErr(false);
        }
        setPassword(item);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder='Enter User Id' autoComplete='nope' onChange={userHandler} /> {userErr ? <span>User Not Valid </span> : ""}
                <br /> <br />
                <input type="password" placeholder='Enter User Password' autoComplete='new-password' onChange={passwordHandler} /> {passwordErr ? <span>Password Not Valid </span> : ""}
                <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default BasicFormValidation;