// controlled component - which is handled by state not DOM 

import React,{useState} from 'react'

const ControlledComp = () => {
    const [val,setVal] = useState("");
    function handleInput(e){
         setVal(e.target.value)
    }
  return (
    <>
        <h1>hii this is controlled component </h1>
        <h2>{val}</h2>
        <input type="text" value={val} onChange={handleInput}/>

    </>
  )
}

export default ControlledComp