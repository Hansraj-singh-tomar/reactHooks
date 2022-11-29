import React, {useState, useCallback, useMemo} from 'react'
import ChildA from './ChildA'
export const UseCallbackHook = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(10);
    // const Learning = () => {
    //     // some operation 
    // }
    const Learning = useCallback(() => {
        // doSomething(count); 
    },[count]); // count ki value change hone par hi hame childA component ka console re-render hoga
    
  return (
    <div>
        <h1>Learning useCallback</h1>
        <ChildA Learning={Learning} count={count}/>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add + 1)}>Addition</button>  
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 2)}>count</button>
    </div>
  )
}
