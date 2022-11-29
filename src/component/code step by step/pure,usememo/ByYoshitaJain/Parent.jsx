import React, {useState} from 'react'
import Child from './Child'
export const Parent = () => {
    const [add, setAdd] = useState(0);
  return (
    <div>
        <h1>Learning useCallback</h1>
        <Child/>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add + 1)}>Addition</button>
    </div>
)
}

