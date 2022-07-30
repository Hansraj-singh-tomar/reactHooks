import React, {useEffect,useState} from 'react'

export const UseEffect3 = () => {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);
    useEffect(() => {
        console.log('use effect called with data state');
    },[data])
    useEffect(() => {
        console.log('use effect called with count state');
    },[count])
    // props ke upar iss tarah se call hoga
    // useEffect(() => {
    //     console.log('use effect called with count state');
    // },[props.count])
  return (
    <>
        <h1>Count : {count}</h1>
        <h1>Data : {data}</h1>
        <button onClick={() => {setCount(count+1)}}>Update Count</button>
        <button onClick={() => {setData(data+1)}}>Update Data</button>
    </>
  )
}
