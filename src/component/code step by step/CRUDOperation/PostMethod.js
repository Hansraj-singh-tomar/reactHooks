import React, {useState} from 'react'

const PostMethod = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  function saveUser(){
    // console.log(name,email,mobile);
    // console.log({name,email,mobile});
    let data = {name,email,mobile}
    fetch("http://localhost:/4000/todo",{
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    }).then((result)=>{
        // console.log(result);
        result.json().then((resp)=>{  // jo bhi data hamne post method ke through bheja hai usse dekhne ke liye stringify se json me convert kar ke console karva sakte hai  
            console.log(resp);
        })
    })

    setName("");
    setEmail("");
    setMobile("");
  }
  return (
    <>
      <div>
        <h1>POST API Example</h1>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name='name'/> <br/> <br/>
        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name='eamil'/> <br/> <br/>
        <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} name='mobile'/> <br/> <br/>
        <button type='button' onClick={saveUser}>Save New User</button>
      </div>  
    </>
  )
}

export default PostMethod