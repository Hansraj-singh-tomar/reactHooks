// import React from 'react';
// import CompB from './CompB';

// const CompA = () => {
//     return (
//         <div>
//             <CompB name={"Hansraj Singh Tomar2"} />
//         </div>
//     );
// };

// export default CompA;


// ! useContext - React’s useContext hook makes it easy to pass data throughout your app without manually passing props down the tree.
// TODO: mujhe compA se name nam ka data compC me bhejna hai to pehle mujhe usse compB me bhejna pdega then CompB se CompC me ham usse bhejenge then tab compC usse use kar payega.
// TODO: iss problem ko ham prop drilling kehte hai or isse bachne ke liye ham contextApi ka use karte hai
// ? contextApi ye bolta hai ki jab bhi hame kuch bhi data pass karna rha then we will create createContext

// ! context API and useContext both are different
// ? in contex API we have context,provider and consumer(to lengthey/complicated)
// ! so context API me jo hamara consumer vala part hai usko reduce karke we have something call useContext hook. so consumer ke place par ham useContext ka use karenge
// ! Meaning of context - esi situation jisme kuch hone vala hai ya jiske karan kuch ho sakta hai 

import React, { createContext } from 'react';
import CompB from './CompB';

const BioData = createContext();

const CompA = () => {
    return (
        <BioData.Provider value={"Hansraj Singh Tomar2"}>
            <CompB />
        </BioData.Provider>  //<BioData> ye bhi ab hamara ek component hai 
    );
};

export default CompA;
export { BioData };


//  <BioData.Provider value= { "Hansraj Singh Tomar2",{},[]}>  issmee kuch bhi pass kar sakta hu jaise {}, [] and kuch bhi pass kar sakte hai 