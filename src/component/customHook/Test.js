import React, { useState } from 'react'
import useTitleCount from "./useTitleCount"

const Test = () => {

    const [count, setCount] = useState(0);

    //! custom hook
    //! isme ham useEffect ka code jo hamare title par effect dal rha hai uska code hamare custom hook se import kar rhe hai 
    useTitleCount(count);

    // console.log("Hello outside");

    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)} >Click Test😀</button>
        </div>
    )
}

export default Test;