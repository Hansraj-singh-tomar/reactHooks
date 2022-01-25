import React, { useEffect, useState } from 'react';
import Loading from './github/Loading';
import GithubUsers from './github/GithubUsers';


const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);  // true hone par Loading component chalega and false hone par hamara ui part return ho jayega

    const getUsers = async () => {
        try {
            const response = await fetch("https://api.github.com/users");
            setLoading(false);  // loading ki initial value true se false kar di hai // ya iske upar bhi rakh sakte hai 
            // console.log(response);
            // const data = await response.json();
            // console.log(data);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("My error is : ", error);
        }
    }

    useEffect(() => {      // useEffect( async () => {...}) async nhi bna sakte useEffect ke andar ke function ko andar kar sakte hai but iss line me nhi but ham isse alag se define kar denge 
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    } // false hone par niche vala code run ho jayega 

    return (
        <>
            <GithubUsers users={users} />
        </>
    );
};

export default UseEffectAPI;
