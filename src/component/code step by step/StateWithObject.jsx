import React, {useState} from 'react'

const StateWithObject = () => {
    
  const [data, setData] = useState({name:'anil',age:27});

  return (
    <>
        <h1>State Object with Hooks</h1>
        <input type="text" placeholder='Enter your name' value={data.name}
         onChange= {(e)=> {setData({age:data.age, name: e.target.value})}} />
         {/* onChange= {(e)=> {setData({...data, name: e.target.value})}} /> // we can use spread operator for that if we have a more data in object that time we will use spread operator  */}
        <input type="text" placeholder='enter age' value={data.age}
         onChange= {(e)=> {setData({name:data.name, age: e.target.value})}}/> 
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
    </>
  )
}

export default StateWithObject;
