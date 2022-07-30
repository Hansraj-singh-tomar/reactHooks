import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
    // http://localhost:3000/filter?age=10
    // http://localhost:3000/filter?city=indore
    // http://localhost:3000/filter?city=indore&age=10
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams);
    // console.log(searchParams.get('age')); // 10
    // console.log(searchParams.get('city')); // indore
    return (
        <>
            <h1>Filter Page</h1>
            <h1>My age is : {searchParams.get('age')}</h1>
            <h1>My city is : {searchParams.get('city')}</h1>
            <input type="text" onChange={(e)=>{setSearchParams({text:e.target.value,age:30})}} placeholder="Set Text in Query Params"/>
            <button onClick={()=>{setSearchParams({age:20})}}>Set Age in Query Params</button>
        </>
    )
}

export default Filter;