import React from 'react'
import User from './User'


function RenderMethod() {
    const [name, setName] = React.useState("hansraj");
    return (
        <div>
            <h1> Render method in react. </h1>
            <User name={name} />
            <button onClick={() => setName("raj singh tomar")}>Update Name</button>
        </div>
    )
}

export default RenderMethod

// ! Q. ek function ke andar ek se jyada render method ho sakte hai kya ? ya fir me render method ke andar ek or render method likh sakta hu kya ? 

