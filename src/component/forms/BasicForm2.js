import React, { useState } from 'react'

const BasicForm2 = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    // both have same but the differce is [ ] i have use array [] in useState([{...}]) like that but code is running fine
    // const BasicForm2 = () => {
    //     const [credentials, setCredentials] = useState([{
    //         email: "",
    //         password: ""
    //     }]);
    const [data, setData] = useState([]);
    const onChange = (e) => {
        // const name = e.target.name;
        // console.log(name);  // ab jab bhi kisi input field par type karunga to mujhe name attribute ke andar ki value mil jayegi jisse me pta lga sakungaki kon se input field par hu me

        const name = e.target.name; // name attribute ki value input field ko identify karne ke liye le rhe hai 
        const value = e.target.value;
        // console.log(name, value);  // username, h  username, a iss type se output milega

        setCredentials({
            ...credentials, [name]: value
            // [e.target.name]: e.target.value,
            // [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...credentials, id: new Date().getTime().toString() }  // yha hamne new object create kiya hai 
        setData([...data, newData]);
        setCredentials({ email: "", password: "" });
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name='email' value={credentials.email} onChange={onChange} autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name='password' value={credentials.password} onChange={onChange} autoComplete="off" />
                </div>
                <button type="submit" >Login</button>
            </form>
            <div>
                {
                    data.map((curElem) => {
                        const { id, email, password } = curElem;
                        return (
                            <div className='showDataStyle' key={id}>
                                <p>{email}</p>
                                <p>{password}</p>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default BasicForm2
