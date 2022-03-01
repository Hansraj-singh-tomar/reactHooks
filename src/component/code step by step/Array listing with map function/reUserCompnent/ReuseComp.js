import React from 'react'
import User from './User'
const students = [
    { name: "hansraj", email: "hansraj1@tomar", contact: 111 },
    { name: "kana", email: "hansraj2@tomar", contact: 222 },
    { name: "kamendra", email: "hansraj3@tomar", contact: 111 },
    { name: "rohit", email: "hansraj4@tomar", contact: 333 },
    { name: "hamendra", email: "hansraj5@tomar", contact: 111 },
]



const ReuseComp = () => {
    return (
        <div>
            <h1>Reuse Component with List.</h1>
            {
                students.map((item, i) => {
                    return (
                        /* <h1>
                            {item.name}
                        </h1> */
                        /* h1 tag ki jagah component use karu or uss component me dynamic props pass kar du tab kya hoga */
                        <User data={item} sn={i} />
                    );
                })
            }
        </div>
    );
}

export default ReuseComp