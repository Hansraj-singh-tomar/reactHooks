import React from 'react'
import FunProps from './FunProps'
// import Demo from './Demo';
const PassFunAsProps = () => {
    function getApp() {
        alert("hello from app");
    }
    return (
        <div>
            <FunProps data={getApp} />
            {/* <div style={{ float: 'right' }}>
                <Demo data={getApp} />
            </div>
             */}
        </div>
    )
}

export default PassFunAsProps

// why we need to pass function because if we want this function in every child component that we will not write this function
// again and again for every component, in this situation we will create only one function in owr parent component and pass it to
// all child component through props

// ! agar kabhi bhi apke pass koi loop ke andar ek child component hai ya bar bar call ho rha hai to uske mostly function parent component me hi rakho to shi rhega
// taki ek hi component se call ho bar bar declairation na ho function ki 