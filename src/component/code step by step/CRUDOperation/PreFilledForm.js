import React,{useState, useEffect} from 'react';

function PreFilledForm(){
    const [data,setData] = useState([]);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [userId,setUserId] = useState(null);
    useEffect(()=>{
        getList();
    },[])
    // console.log(data);

    function getList(){
        fetch('http://localhost:4000/todo').then((result) => {
            result.json().then((resp) => {
                console.log("result" + resp);
                setData(resp);
                setName(resp[0].name);
                setEmail(resp[0].email);
                setMobile(resp[0].mobile);
                setUserId(resp[0].id);
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
                getList(); // isko yha par call karne par hame hamare page ko refresh nhi karna padega or hame item delete hone ke baad nyi list mil jayegi
            })
        })
    }

    function selectUser(id){
        console.log(id);
        console.log(data[id-1]);
        setName(data[id-1].name);
        setEmail(data[id-1].email);
        setMobile(data[id-1].mobile);
        setUserId(data[id-1].id);
    }

    function updateUser(){
        // console.log(name,email,mobile,userId);
        let item = {name,email,mobile,userId}
        fetch(`http://localhost:4000/todo/${userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                getUsers()
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
                                <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
                            </tr> 
                        }
                        )
                    }
                </table>
                <div>
                    <input type="text" value={name}/> <br/><br/>
                    <input type="text" value={email} /> <br/><br/>
                    <input type="text" value={mobile} /> <br/><br/>
                    <button onClick={updateUser}>Update User</button>
                </div>
            </div>
        </>
    )
}

export default PreFilledForm;