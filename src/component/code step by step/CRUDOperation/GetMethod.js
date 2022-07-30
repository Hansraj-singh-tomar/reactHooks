import React,{useState,useEffect} from 'react';

function GetMethod(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/todo').then((result) => {
            result.json().then((resp) => {
                console.log("result" + resp);
                setData(resp);
            })
        })
    },[])
    console.log(data);
    return(
        <>
            <div>
                <h1>Get API call</h1>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                    {
                        data.map((item)=>
                        {
                           <tr>
                                <td>{item.userId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr> 
                        }
                        )}
                </table>
            </div>
        </>
    )
}

export default GetMethod;