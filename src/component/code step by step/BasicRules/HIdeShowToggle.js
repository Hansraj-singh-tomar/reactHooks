// ! same button se hide/show karvana toggle kehlata hai 
import React from 'react'

const HIdeShowToggle = () => {
    const [status, setStatus] = React.useState(true);
    return (
        <div>
            {
                status ? <h1>Hello Guy's</h1> : null
            }
            {/* <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button> */}
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default HIdeShowToggle

// ! kya ham js and jQuery me same method use karte hai hide/show ke liye 