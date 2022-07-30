import React, { useEffect, useRef } from 'react'

const User1 = (props) => {
    const lastVal = useRef(); // ye last vali value ko uthayega DOM se isko current value update hone se pehle hi hamara use effect chal jayega or ye hamari last value ko store kar lega or baad me count me new vali value aayegi
    useEffect(() => {
        lastVal.current = props.count  // Here, current predefined property hai useRef() ki 
    })
    const previousProps = lastVal.current
    return (
        <div>
            <h1>current Val {props.count}</h1>
            <h1>previous Val {previousProps}</h1>
            <h1>Differece btn pre and current count {props.count - previousProps} </h1>
        </div>
        // output - carrent val - 0
        //          previous val - 
        //          carrent val - 5
        //          previous val - 0
        //          carrent val - 7
        //          previous val - 5 like that and so on       
    )
}

export default User1