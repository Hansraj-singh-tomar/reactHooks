// import React, {useEffect, useLayoutEffect, useState} from 'react'

// const UseLayoutEffectHook = () => {

// // case - 1
// //     useEffect(() => {
// //         console.log("First useEffect");
// //     },[])
// //     useEffect(() => {
// //         console.log("Second useEffect");
// //     },[])
// //     // output - first useEffect then second useEffect show karega 

// // case - 2
//     useEffect(() => {
//         console.log("First useEffect");
//     },[])
//     useLayoutEffect(() => {
//         console.log("second useEffect");
//     },[])
//     useEffect(() => {
//         console.log("third useEffect");
//     },[])
//     // output - second useEffect then first and third useEffect show karega 
//   return (
//     <div>useLayoutEffectHook</div>
//   )
// }

// export default UseLayoutEffectHook;

// Differnce between useEffect and useLayoutEffect Hook

// useEffect() Hook => (runs asynchronously)
// jab ham useEffect use karte hai to vo two times render karta hai firstly original value and then updated value show karta hai 
// original state show karta hai har bar render hone par but in useLayoutEffect it won't show original value 
// useEffect runs asynchronously and after a render is painted to the screen.
// means jab hamare screen par deta update hoga to hi useEffect run karta hai, thats why hame original state show karta hai 

// jab ham multiple useEffect use karte hai to vo top to bottom approach me kam karta hai


// useLayoutEffect() Hook => (runs synchronously) => it's not that much important
// but in useLayoutEffect vo dom ko manipulate karne se pehle or dom mulation complete hone se pehle or dom me update hone se pehle hame updated value dikh jati hai or ye original value nhi show karta hai 
// useLayoutEffect, runs synchronously after a render but before the screen is updated.
// means, screen ko update karne se pehle hi vo run kar chuka hota hai that's why we are not able to see original value
// agar koi bhi essa data chahiye jo screen update hone se pehle vo vha par update rhe or logo ko dikhe in that case we w'll use useLatoutEffect hook
// to find dimention height/width 


// Another Example =>

import React, {useEffect, useLayoutEffect, useState} from 'react';

const UseLayoutEffectHook = () => {
    const [num, setNum] = useState(0);

// case - 1
    useEffect(() => {
        if(num === 0) setNum(5 + Math.random() * 50);
    },[num]);

// case - 2
    // useLayoutEffect(() => {
    //     if(num === 0) setNum(5 + Math.random() * 50);
    // },[num]);
    
    console.log("ouput is ", num);
    
    return (
        <>
            <h1>{num}</h1>
            <button onClick={() => setNum(0)}>check</button>
        </>
      )
}

export default UseLayoutEffectHook;