import React from 'react'

// ! parent to child ka case hai
// const ChildComp = (props) => {
//     return (
//         <div>
//             <h1>User Name : {props.name}</h1>
//             <button>Click Me</button>
//         </div>
//     )
// }

// export default ChildComp

// ! child to parent ka case hai
const ChildComp = (props) => {
    // const data = "hansraj singh tomar";
    // we can send object as well but vo alert me show nhi hoga to usse hame console me lena padega
    const data = { name: 'anil sidhu', email: 'anil@test.com' }

    return (
        <div>
            <h1>User Name : </h1>
            {/* <button onClick={props.alert}>Click Me</button>   */}
            {/* ab iss data variable ko parent component me pass karne ke liye ham alert function ko call karenge or usme as a argument pass kar denge alert function ko call karne ke liye arrow function ka use karna padega  */}
            <button onClick={() => props.alert(data)}>Click Me</button>
        </div>
    )
}

export default ChildComp

// button par click karne par ham alert functionality parent component se la rhe hai

// Q. nested child component hone par jo hamare parent component ke andar ka function parentAlert() hai use me baki ke jitne bhi child component hai unme use kar sakta hu  