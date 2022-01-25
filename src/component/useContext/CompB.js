// import React from 'react';
// import CompC from './CompC';


// const CompB = ({ name }) => {
//     return (
//         <div>
//             {/* <h1>Hello from the { name }</h1> */}
//             <CompC name={name} />
//         </div>
//     );
// };

// export default CompB;

// ! After using useContext() method

import React from 'react';
import CompC from './CompC';

const CompB = () => {
    return (
        <div>
            <CompC />
        </div>
    );
};

export default CompB;

// ! after using useContext mujhe CompB se CompC me kuch pass karne ki need hi nhi hai ab 