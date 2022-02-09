import React, { forwardRef } from 'react';

// fordwardRef apne aap me ek wrapper hota hai to hame isse esse export karna padega export default forwardRef(User);
// itna kar dene par user ke andar forwardRef aa gya hai ab bas use karna hai
// ! class base compenent me same tarike se karne hai, export default forwardRef(User) - yha par classBase component ko wrap kar dena hai 

const User = (props, ref) => {    // ye hame props ke andar nhi milega ye hame second parameter ref me milega 
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
};

// ref={ref} isme {ref} ke alava kuch bhi name use kar sakta hu 

export default forwardRef(User);
