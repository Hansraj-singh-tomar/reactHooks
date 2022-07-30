import React, { useState } from 'react'

const HandleForm = () => {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");
    function getFormData(e) {
        e.preventDefault();
        console.warn(name, tnc, interest);
    }
    const clearArray = () => {
        setName("");
        setInterest("");
        setTnc(false);
    }
    // value={interest}
    // value={name}
    // checked={tnc}
    return (
        <div>
            <h1>Handle Form in React</h1>
            <h1>{tnc}</h1>
            <h1>{name}</h1>
            <h1>{interest}</h1> 
            <form onSubmit={getFormData}>
                <input value={name} type="text" placeholder='enter your name'  onChange={(e) => setName(e.target.value)} /> 
                <br /><br />
                <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>
                <br /><br />
                <input type="checkbox" checked={tnc} onChange={(e) => setTnc(e.target.checked)} /><span>Accept Term and Condition</span>
                <br /><br />
                <button type='submit'>Submit</button>
                <button onClick={clearArray}>Clear</button>
            </form>
        </div>
    )
}

export default HandleForm




