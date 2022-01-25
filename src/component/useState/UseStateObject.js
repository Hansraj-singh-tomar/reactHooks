// What is Three Dots{...} & Handle Object using UseState Hook

import React from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = React.useState({   // Now,const myObject = { myName: "vinod", myAge: 27, degree: "MCA" }
        myName: "vinod", myAge: 27, degree: "MCA"
    });
    const changeObject = () => {
        // setMyObject('thapa technical'); // isse meri value change nhi hogi kyonki mujhe object ke form me value dalna padegi
        // setMyObject({myName: 'thapa technical'}); // Now ab meri myName ki value change ho jayegi but yha bhi issue hai ab mujhe myAge and degree ki value nhi milegi jo mene initial state me dali thi
        // setMyObject({ myName: "vinod", myAge: 21, degree: "MCA" })  // that's a old way to do but now we have new feature which is spread operator (...)
        setMyObject({
            ...myObject,  // ...myObject =  myName: "vinod", myAge: 27, degree: "MCA"
            myAge: 23      // yha meri myAge:27 se 23 ho gyi hai  and baki ki detail same hi rhegi that's a benefit of using spread operator(...)  
        })
    }
    return (
        <div>
            <h1 className='h1style'> Name: {myObject.myName} $ Age: {myObject.myAge} $ Degree: {myObject.degree} </h1>
            <button className='btn' onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject
