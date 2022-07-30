// ! HOC(high order component) - ek component jo ek dusre component ko as an props leta ho or ek alag se component return karta ho
//  yani ki ek simple component hoga jo component hi as a input lega or component hi as a output dega.


import React, { useState } from 'react';

// ye mera main component hai 
const HighOrderFun = () => {
    return (
        <div>
            <h1> HOC </h1>
            {/* HOC component vo compnent hote hai jo component ko as a input le or output bhi as a component de */}
            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />
            <HOCBlue cmp={Counter} />
            {/* Here we are passing Counter Component */}
        </div>
    );
};

function HOCRed(props) {
    return <h6 style={{ backgroundColor: "red", width: "150px" }}>In red <props.cmp /></h6>
}
function HOCGreen(props) {
    return <h4 style={{ backgroundColor: "green", width: "150px" }}>In Green<props.cmp /></h4>
}
function HOCBlue(props) {
    return <h2 style={{ backgroundColor: "blue", width: "150px" }}>In Blue <props.cmp /></h2>
}

// ye mera normal component rhega
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}

export default HighOrderFun;
