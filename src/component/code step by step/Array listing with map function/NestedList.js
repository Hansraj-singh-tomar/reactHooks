// nested list with nested array

import React from 'react'
let students = [
    {
        name: "hansraj1",
        email: "hansraj1@tomar",
        address: [
            { HNo: 10, city: "noida", country: "India" },
            { HNo: 20, city: "mumbai", country: "India" },
            { HNo: 30, city: "indore", country: "India" },
            { HNo: 40, city: "delhi", country: "India" },
        ]
    },
    {
        name: "hansraj2",
        email: "hansraj2@tomar",
        address: [
            { HNo: 10, city: "noida", country: "India" },
            { HNo: 20, city: "mumbai", country: "India" },
            { HNo: 30, city: "indore", country: "India" },
            { HNo: 40, city: "delhi", country: "India" },
        ]
    },
    {
        name: "hansraj3",
        email: "hansraj3@tomar",
        address: [
            { HNo: 10, city: "noida", country: "India" },
            { HNo: 20, city: "mumbai", country: "India" },
            { HNo: 30, city: "indore", country: "India" },
            { HNo: 40, city: "delhi", country: "India" },
        ]
    },
    {
        name: "hansraj4",
        email: "hansraj4@tomar",
        address: [
            { HNo: 10, city: "noida", country: "India" },
            { HNo: 20, city: "mumbai", country: "India" },
            { HNo: 30, city: "indore", country: "India" },
            { HNo: 40, city: "delhi", country: "India" },
        ]
    },
]
const NestedList = () => {
    return (
        <div>
            <h1>List With Nested Array</h1>
            <table border='1' >
                <tbody>
                    <tr>
                        <td>S.N.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </tbody>

                {
                    students.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <table border='1'>
                                        <tbody>
                                            <tr>
                                                <td>S.N</td>
                                                <td>H No.</td>
                                                <td>City</td>
                                                <td>Country</td>
                                            </tr>
                                        </tbody>
                                        {item.address.map((data, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{data.HNo}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.country}</td>
                                                </tr>
                                            );
                                        })}
                                    </table>
                                </td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    )
}
export default NestedList