import React from 'react'

const Demo = (props) => {
    return (
        <div>
            <h1>demo component. </h1>
            <button onClick={() => props.data2()}>call data function</button>
        </div>
    )
}

export default Demo