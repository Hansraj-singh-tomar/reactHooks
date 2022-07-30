import React,{useState, useEffect} from 'react';

function DeleteMethod(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        getList();
    },[])
    console.log(data);

    function getList(){
        fetch('http://localhost:4000/todo').then((result) => {
            result.json().then((resp) => {
                console.log("result" + resp);
                setData(resp);
            })
        })
    }

    function deleteUser(id){
        // alert(id);
        fetch(`http://localhost:4000/todo/${id}`,{
            method: 'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                getList(); // isko yha par call katne par hame hamare page ko refresh nhi karna padega or hame delete hone ke baad nyi list mil jayegi
            })
        })
    }
    return(
        <>
            <div>
                <h1>Get API call</h1>
                <table border='1'>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                        <td>Operations</td>
                    </tr>
                    {
                        data.map((item,i)=>
                        {
                           <tr key={i}>
                                <td>{item.userId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                            </tr> 
                        }
                        )
                    }
                </table>
            </div>
        </>
    )
}

export default DeleteMethod;