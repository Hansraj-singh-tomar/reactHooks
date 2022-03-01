import React from 'react'
import Demo from './Demo'

const FunProps = (props) => {
    return (
        <div>
            <h1>FunProps Component</h1>
            <Demo data2={props.data} />
            {/* <button onClick={() => props.data()}>call data function</button> */}
            {/* <button onClick={props.data}>call data function</button> */}
        </div>
    )
}

export default FunProps