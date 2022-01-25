// 1: always write it inside the component or function
// 2: component name must be pascalcase (first letter should be uppercase)
// 3: we can directly import or we can directly write it using React.hookName
// 4: don't call hooks inside looops, conditions, or nested function.

import React, { useState } from "react";

const RulesHook = () => {
    // const [myName, setMyName] = React.useState('thapa technical') // upar useState import karne ki jarurat hi nhi hai esa karne par
    const [myName, setMyName] = useState('thapa technical')
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
}

export default RulesHook;
