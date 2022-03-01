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


// ! kya me ek componenet ki state ko component ke bahar use kar sakta hu kya
// Ans - nhi kar sakte hai
// ! state jo hai public hai ya private
// Ans - public hai
// ! class component ke andar ham useState ka use nhi kar sakte hai kya
// Ans - no
// ! function ko as a props send kar sakte hai jise ham lifting up state bhi kahte hai
// ! kya ham HTML pass kar sakte hai as a props
// Ans - yes, but uske liye hame this.props.children class base component me and props.children use karenge function component me
// ! kya jis component ke andar me props ko receive kar rha hu vha par me kya use change kar sakta hu kya - Ans is Nooo. jha par ham props ko bna rhe hai vha par ham change karenge
// ! jis tarah se ham input box ki value get karte hai usi tarah se check box or radio button ki value get kar sakte hai kya 
 




//! Q. kya me ek component ke andar ek se jyada Ref use kar sakta hu, yes
//! Q. or kya ek hi element ke andar ek se jyada ref use kar paunga 
