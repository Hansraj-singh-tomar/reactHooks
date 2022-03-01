import { useState } from "react";

const UseStateArray = () => {
    const bioData = [   // agar use useState use nhi kar rhe hai tab yha ham const use nhi kar sakte kyonki bioData ke data ko ham clear,update ya delete bhi kar sakte hai that why?
        {
            id: 0, name: "hansraj", age: 25
        },
        {
            id: 1, name: "hansraj", age: 26
        },
        {
            id: 2, name: "hansraj", age: 27
        },
        {
            id: 3, name: "hansraj", age: 28
        },
        {
            id: 4, name: "hansraj", age: 29
        },
    ]
    // console.log(bioData);

    const [myArray, setMyArray] = useState(bioData);

    const clearArray = () => {
        setMyArray([]);  // button par click karne par ab array empty ho jayega 
    }

    //     return (
    //         <>
    //             {/* <h1> Name: hansraj and Age: 25 </h1> */}
    //             {
    //                 // bioData.map((curEle) => {
    //                 //     return <h1 className="h1style"> Name: {curEle.name} and Age: {curEle.age} </h1>
    //                 // })

    //                 // in one line
    //                 myArray.map(curEle => <h1 className="h1style" key={curEle.id}> Name: {curEle.name} and Age: {curEle.age} </h1>) // key={curEle.id} h1 tag ke arribute ke tor par ye na likhne par mujhe error aa rhi thi console me
    //             }
    //             <button className="btnInner" onClick={clearArray}>clear whole list</button>
    //         </>
    //     )
    // }

    // export default UseStateArray;

    // delete feature add karne par h1 tag ke andar  

    const deleteItem = (id) => {
        // alert(id); // button me deleteItem function ko arrow function ke andar nhi likhunga to mujhe alert me ok karne par id milti hi rhegi 
        const myNewArray = myArray.filter((curElm) => {
            return curElm.id !== id;  // jo id pass ki hai deleteItme ne usse ham check karenge myArray ki curElm.id se jo jo equal nhi hai list ke item unhe ham return kar denge myNewArray me or agar id === curElm.id hai to to filte uss item ko nhi pick karega
        })    // ye return kar rha hai myNewArray ko jo jo bhi item ki id equal nhi hai curElm.id ke and hame new array mil jata hai or usse ham setMyArray me update kar dete hai
        setMyArray(myNewArray);
    }

    return ( // return ke andar hamara jo bhi hota hai vo JSX hota hai and JSX ke andar JS ka code likhne ke liye curl bracks { } ka use karenge
        <>
            {
                myArray.map((curElm) => {
                    return (
                        <h1 className="h1style" key={curElm.id}> Name: {curElm.name} and Age: {curElm.age}
                            <button className="btnInner" onClickbutton={() => deleteItem(curElm.id)}>Delete</button>
                        </h1>
                        // <button className="btnInner" onClickbutton={deleteItem(curElm.id)}>Delete</button>  // esa likhne par ye button ke click karne se pehle hi alert or deleteItem ke function ko call kar de rha hai
                        // so iss chij ka solution hai arrow function <button className="btnInner" onClickbutton={() => deleteItem(curElm.id)}>Delete</button>
                    );
                })
            }
            <button className="btn" onClick={clearArray}>clear list</button>
        </>
    )
}

export default UseStateArray;