import React, {useState, useMemo} from 'react'

const MMemo = () => {

    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const IncrementOne = () => {
        setCounterOne(counterOne+1)
    }
    const IncrementTwo = () => {
        setCounterTwo(counterTwo+2)
    }

    // const isEven = () => {
    //     let i = 0;
    //     while(i<2000000) i++;
    //     return counterOne%2 === 0;
    // }

    const isEven = useMemo(() => {
        let i = 0;
        while(i<200000) i++;
        return counterOne%2 === 0;
    },[counterOne])

  return (
    <>
        <button onClick={IncrementOne}>CounterOne - {counterOne}</button>
        <span>{isEven?"Even":"Odd"}</span>
        <button onClick={IncrementTwo}>CounterTwo - {counterTwo}</button>
    </>
  )
}

export default MMemo