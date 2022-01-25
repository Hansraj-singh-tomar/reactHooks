// the effect Hook lets you perform side effects in function components.
// side effects are basically anything that affects something outside of the scope of the current function that's
// being executed. In our dashboard, this includes:
// 1. API requests to our backend service
// 2. calls to our authentication services
// 3. error tracking calls to sentry
// Data fetching, setting up a subscription and manually changing the DOM in react components are all example of side effects (or just "effects").

// useEffect ka kam ye hai ki jab bhi me apne page ko first time load karu to vo bhi call ho jata hai
// ye apne aap ko automatic call karta hai mtlb automatic render ho jata hai
// ab jab bhi page load hote kuch effect dikhana ho to useEffect ka use kar sakta hu

// ham multiple useEffect use kar sakte hai mtlb har functionality ke liye alag useEffect bna sakte hai or vo useEffect usi logic ke liye render hoga 

import React, { useState, useEffect } from 'react'


const UseEffect1 = () => {

    const [countn, setCountn] = useState(0);
    // useState ko ham bhi use karte hai to ye hamare component ko rerender karta hai jiisse ab hamara useEffect bhi bar bar call hoga.  
    // so, component ke bahar hame kuch bhi kam karna rha to ham useEffect ka use karenge
    // useEffect(() => {
    //     // console.log("hii its useEffect feature"); // page load hote hi ye console me dikh jayega, hamara normal console bhi useEffect ki tarah work karta hai 
    //     document.title = `chats (${countn})`;  // ye component ke bahar ka kam hai ye browser APi ke andar aata hai
    // });

    // useEffect(() => {   // call back function ka use kiya hai 
    //     if (countn >= 1) {
    //         document.title = `chats (${countn})`;
    //     } else {
    //         document.title = `chats`;
    //     }
    // });

    // DependencyList in UseEffect
    useEffect(() => {
        console.log("this is first one");
        if (countn >= 1) {
            document.title = `chats (${countn})`;
        } else {
            document.title = `chats`;
        }
    }, [countn]); // [countn] ko [] empty rakhne par ye useEffect ek hi bar render hoga but yha countn ki value jab jab change hogi tab-tab useEffect render hoga

    // ham multiple useEffect use kar sakte hai mtlb har functionality ke liye alag useEffect bna sakte hai or vo useEffect usi logic ke liye render hoga
    useEffect(() => {
        console.log("multiple useEffect");
    }, []); // ye ek hi bar chalega jab page refresh hoga tab

    // console.log("hii out side");  // pehle ye console aayega then useEffect ka console run hoga
    return (
        <div>
            <h1>{countn}</h1>
            <button className='btn' onClick={() => { setCountn(countn + 1) }}> click me </button>
        </div>
    )
}

export default UseEffect1



// ham Hooks me condition use nhi kar sakte hai
// ye galat tarika hai
// if (countn >= 1) {
//     useEffect(() => {
//         document.title = `chats (${countn})`;
//     });
// }

// agar hame condition add karna hai to ham inside hook use kar sakte hai but hooks ke upar nhi
// that's a good/right way
// useEffect(() => {
//     if (countn >= 1) {
//         document.title = `chats (${countn})`;
//     } else {
//         document.title = `chats`;
//     }
//  });


// useEffect(() => {
//     return () => {
//     }
// }, [])      // me jo empty array hai vhi dependencyList in useEffect hai
// yha empty Array ka mtlb ye hai ki useEffect isse ek hi bar run hoga jab ham page ko refresh karenge

// useEffect(() => {
//      if (countn >= 1) {
//           document.title = `chats (${countn})`;
//      } else {
//           document.title = `chats`;
//      }
// }, [countn]);   // ab [countn] ka mtlb ye hai ki jab jab countn ki vlaue change hogi tabhi useeffect chalega

// jab ham multiple useEffect use karenge to usme jo pehle define hai uska output pehle milega
