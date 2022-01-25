import React, { useState } from 'react'

const MultipleInputs = () => {
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        // console.log(name);
        const value = e.target.value;
        // console.log(name, value);
        // setUserRegistration({ ...userRegistration, email: "testing" })
        setUserRegistration({ ...userRegistration, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // phle me ek khud ka new object create karunga usme setUserRegistration({ ...userRegistration, [name]: value }) ka data add karunga and then usko me ek new array me add karne vala hu
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        // console.log(records);
        setRecords([...records, newRecord]); // ...records - purana agar koi data hai to vo isme add ho jayega
        // console.log(records);
        setUserRegistration({ username: "", email: "", phone: "", password: "" });  //isse jab me second time input field me kuch dalunga to mujhe usme purana likha hua nhi milega
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">FullName</label>
                    <input type="text" autoComplete='off' onChange={handleInput} value={userRegistration.username} name='username' id='username' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete='off' onChange={handleInput} value={userRegistration.email} name='email' id='email' />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" autoComplete='off' onChange={handleInput} value={userRegistration.phone} name='phone' id='phone' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete='off' onChange={handleInput} value={userRegistration.password} name='password' id='password' />
                </div>
                <button type='submit'>Registration</button>
            </form>
            <div>
                {
                    records.map((curElem) => {
                        /* const { id, username, email, phone, password } = curElem; */
                        return (
                            <div className='showDataStyle' key={curElem.id}>
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MultipleInputs

// input field me jab ham value attribute ka use karte hai tab hame onChange ka bhi use karna hai tabhi ham input field me kuch likh payenge




