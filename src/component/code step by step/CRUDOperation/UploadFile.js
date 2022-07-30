// http://localhost:8000/api/store
import React from 'react'

const UploadFile = () => {
    function upload(e){
        console.log(e.target.files);
        
        const files = e.target.value;
        
        // const formData = new Object(); // ek object create kiya hai  
        // console.log(formData);  // {}
        const formData = new FormData(); // ek object create kiya hai  
        console.log(formData);  // FormData {}
        
        formData.append('img',files[0]);
        
        fetch('http://localhost:8000/api/store', {
            method: 'POST',
            body: formData
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(result);
            })
        })
    }
  return (
    <>
        <h1>Upload File in React JS</h1>
        <input type="file" onChange={(e)=>{upload(e)}} name='img'/>
    </>
  )
}

export default UploadFile