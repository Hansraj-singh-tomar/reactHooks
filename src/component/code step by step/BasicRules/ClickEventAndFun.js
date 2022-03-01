import React from 'react'
// alert("Hello global alert");
const ClickEventAndFun = () => {
    let data = "hansraj singh tomar";
    function apple() {
        data = "shivani yadav"
        alert(data); // alert me to change ho gya hai but h1 element me to hansraj singh tomar hi show ho rha hai iss chij ka solution hai state and props.
    }
    return (
        <div>
            <h1>Hello {data}</h1>

            {/* isse ye function apne aap hi call ho gya hai bina button par click kiye or click karne par ye call nhi ho rha hai */}
            {/* <button onClick={apple()}>Click Me</button>   */}

            {/* iss problem ke prevent ke liye hame onClick me apple function ke aage ke parenthesis() ko hatana padega */}
            {/* first way */}
            {/* <button onClick={apple}>Click Me</button> */}
            {/* second way */}
            <button onClick={() => apple()}>Click Me</button>

            {/* ab ham onClick ke andar direct alert ko call karenge to vo automatic hi call ho jayega */}
            {/* <button onClick={alert("alert in onClick")}>Click Me</button> */}

            {/* iske liye hame arrow function ka use karna padega onClick ke andar */}
            {/* <button onClick={() => alert("alert in onClick")}>Click Me</button> */}


        </div>
    )
}

export default ClickEventAndFun