import React from 'react'
import { useParams } from 'react-router-dom';
const User = () => {
    // http://localhost:3000/user/anil
    const params = useParams();
    // console.log(params.name);
    // const {name} = params;
    // console.log(name);
    return (
        <>
            <h1>This is {params.name} page</h1>
            {/* <h1>This is {name} page</h1> */}
        </>
    )
}

export default User;