// useMemo is same as pure component , we will use useMemo in function compnent and pure component use in class component
// kai bar esa hota hai ki ham state or prop ke sath kam kar rhe hote hai or tabhi hamara component unwantedly  update hota rehta
// hai hame uski jarurat nhi hoti but vo update hota rehta hai same values ke sath jaise mene koi state update kari to mere kuch functions apne aap call hote rehte hai jo 
//  hame call nhi karne chahiye the 

import React, { useState, useMemo } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    function multiCount() {
        console.log("multicount"); // yha update count and update item dono button par click karne par multiCount function chal rha hai jo ki sirf update count button par click karne par hi chalna chahiye tha  
        return count * 5;
    }

    // ! iss multiCount function ko useMemo ke through use karenge 
    // const multiCountMemo = useMemo(function multiCount() {
    //     console.warn("multicount");
    //     return count * 5
    // }, [count]);  // [count] ka mtlb ye tabhi chalega jab count update hoga  

    return (
        <>
            <h1>UseMemo Hook in React</h1>
            <h2>Count : {count}</h2>
            <h2>Item : {item}</h2>
            {/* ab me yha par kya karta hu ek function ka use karta hu jo mujhe kuch return karega count ka kuch multiply */}
            <h2>{multiCount()}</h2>
            {/* <h2>{multiCountMemo}</h2> */}
            <button onClick={() => setCount(count + 1)}>Update Count</button>

            <button onClick={() => setItem(item * 10)}>Update Item</button>

        </>
    );
};

export default UseMemo;


// iss program me update item button ko click karne par multiCount function bhi call ho rha hai jo ki nhi hona chahiye tha
// iska solution hai useMemo component ye iss multiCount function ko samjhayega ki isko update kab hona hai 
