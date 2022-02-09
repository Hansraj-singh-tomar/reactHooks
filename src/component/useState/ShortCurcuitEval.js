// Short Circuit Evaluation with React | Logical && and || Operators in ReactJS
// Short Circuit Evaluation ye bolta hai ki agar aapko HTML ke andar multiple data ko rendering karvana ho then ham Short Circuit Evaluation ka use le sakte ho
// Short Circuit Evaluation me && and || ka use hota hai
// agar ye shi hai to ye dikhao or agar ye shi nhi hai to ye dikhao mtlb if_else condition

// defination - we can do multiple rendering with help of || and && operator


import React from 'react'

const ShortCurcuitEval = () => {
    const [demo, setDemo] = React.useState("");
    // const [demo, setDemo] = React.useState("check check");
    return (
        <div>
            {/* agar demo empty ya false hai to hansraj milega and demo empty ya false nhi hai tab demo ki value milge or(||) ke case me  */}
            <h1 className='h1style'>{demo || "hansraj"}</h1>
            {/* <h1 className='h1style'>{"hansraj" || demo}</h1>  dono alag alag output denge */}
            {/* <h1 className='h1style'>{demo ||
                <>
                    <h1>mast</h1>
                    <p>you can do anything</p>
                </>
            }</h1> */}
            {/* agar demo ke andar koi value hai to hi hame vinod likha hua dikhega or agar demo empty ya false hai to vinod likha hua nhi dikhega  */}
            <h1 className='h1style'>{demo && "vinod"}</h1>
        </div>
    )
}

export default ShortCurcuitEval

// agar OR => || me true milta hai hai to left vala part hi milega and false hone par right vala part milge
// agar AND => && me me true milta hai hai to right vala part milega and false hone par left vala hi part milge

// stackOverFlow example

// 1. ye error dega
// const Filters = () => {
//     const [options, setOptions] = useState([]);

//     return (
//         <div className="row">
//             {options.length > 0 && (
//                 <div className="col-md-3">
//                     <CustomComponent />
//                 </div>
//             )}
//         </div>
//     )
// }

// 1. Updated code
// return (
//     {
//         options.length > 0 && (
//             <div className="row">
//                 <div className="col-md-3">
//                     <CustomComponent />
//                 </div>
//             </div>
//         )
//     }
// )



// 2. ye error dega
// {
//     options.length > 0 && (
//   <div className="col-md-3">
//     <CustomComponent />
//   </div>
//   <div className="col-md-3">
//     <SecondComponent />
//   </div>
//     )
// }


// 2. Updated Code
// {
//     options.length > 0 && (
//         <>
//             <div className="col-md-3">
//                 <CustomComponent />
//             </div>
//             <div className="col-md-3">
//                 <SecondComponent />
//             </div>
//         </>
//     )
// }

