import React, { useEffect, useRef } from 'react'

const User1 = (props) => {
    const lastVal = useRef(); // ye last vali value ko uthayega DOM se isko current value update hone se pehle hi hamara use effect chal jayega or ye hamari last value ko store kar lega or baad me count me new vali value aayegi
    useEffect(() => {
        lastVal.current = props.count  // yha current useRef() ki property hai 
    })
    const previousProps = lastVal.current
    return (
        <div>
            {/* <h1>current Val {props.count}</h1> */}
            {/* <h1>previous Val {previousProps}</h1> */}
            <h1>Differece btn pre and current count {props.count - previousProps} </h1>
        </div>
    )
}

export default User1