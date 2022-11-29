// useImprativeHandle - ab mujhe DOM ko access nhi karna hai mujhe, ab mujhe child ka custom object,function,property hai usse access karna hai to me iska use karunga

// useRef - to access DOM Element 
// fowardRef - parent ke ref ko child me forward karega, kyonki vhi ref child ke sath link hokar child me kya-kya access karna hai vo usme help karega 
// useImprativeHandle - jo hamara ref aaya hai parent ka usse kon-kon sa access dena hai vo ye useImprativeHandle btayega.

import React, {useRef} from 'react'
import Child from './Child'

const Parent = () => {
    const ref = useRef()
  return (
    <div>
        <Child ref={ref}/>
        <div>Parent Component.</div>
        <button onClick={() => ref.current.hiii()}>Click</button>
    </div>
  )
}

export default Parent