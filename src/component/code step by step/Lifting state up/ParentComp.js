// send data child to parent component
import React from 'react'
import ChildComp from './ChildComp'
import ChildComp2 from './ChildComp2';

// ! parent to child ka case hai
// const ParentComp = () => {
//     let data = 'Anil Sidhu';
//     return (
//         <div>
//             <h1>Lifting state up or we can say send data child to parent component.</h1>
//             <ChildComp name={data} />
//         </div>
//     )
// }

// export default ParentComp

// ! child to parent ka case hai 
const ParentComp = () => {

    function parentAlert(data) {
        // alert("Hello");
        alert(data);    // ye data hame childComp se mil rha hai 
        alert(data.name);  // agar object ke form me hai data then hame use karna pagega alert(data.name) pura object dekhne ke liye isse console karva lo 
        console.log(data);  // {name: 'anil sidhu', email: 'anil@test.com'} 
    }

    return (
        <div>
            <h1>Lifting state up or we can say send data child to parent component.</h1>
            <ChildComp alert={parentAlert} />
            <ChildComp2 alert={parentAlert} />
        </div>
    );
}

export default ParentComp