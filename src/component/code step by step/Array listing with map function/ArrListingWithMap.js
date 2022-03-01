// ! why we do use map method instead of for loop in our react code
// Q. why use map function, not for loop
// answer - Beacuse return statement map method support karta hai for loop nhi

import React from 'react'

const ArrListingWithMap = () => {
    // Make List with an Array
    // const students = ["Anil", "sidhu", "sam", "peter"];

    // Make List with an Array of object
    let students = [
        { name: "hansraj1", email: "hansraj1@tomar", contact: 111 },
        { name: "hansraj2", email: "hansraj2@tomar", contact: 222 },
        { name: "hansraj3", email: "hansraj3@tomar", contact: 111 },
        { name: "hansraj4", email: "hansraj4@tomar", contact: 333 },
        { name: "hansraj5", email: "hansraj5@tomar", contact: 111 },
    ]

    // // map looping
    // students.map((items) => {
    //     console.log("my name is", items)
    // });
    // // for looping 
    // for (let i = 0; i < students.length; i++){
    //     console.log("in for loop my name is :",students[i])
    // }
    // upar dono map and for loop same result produce kar rhe hai but in this return part we can use only map method
    // not for loop.
    return (
        <div>
            <h1>Handle Array with List</h1>
            <table border='1px'>
                <tr>
                    <td>S.N.</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                {
                    students.map((data, i) => {
                        {/* <h1>My Name is : {data}</h1> */ }
                        {/* <h1>My Name is : {data.name},{data.email}</h1> */ }
                        {/* ye jo error aa rhi thi uska solution hai key={i}*/ }
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td> {/* it will start from 0 thats why we are using i+1 */}
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.contact}</td>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    )
}

export default ArrListingWithMap

// isme ek error aa rhi hai to hame btana hai kya hai vo error
// Each child in a list should have a unique 'key' props


// condition use karne ke liye map method ke andar
// {
//     students.map(( data, i ) =>
//         data.contact === '001' ?
//             <tr key={i}>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.contact}</td>
//             </tr > : null
//     )
// }

