import React, {memo} from 'react'

const Child = () => {
    console.log("child component");
  return (
    <>
    </>
  )
}

export default memo(Child);

// memo(Child) use na karne ke pehle mujhe ek looop najar aa rha tha
// which is agar me Addition button par click karta hu to mera child component ke andar ka console bhi baar baar render ho rha tha 
// jo ki shi nhi hai to iss problem ka solution hai memo(Child) 

// Addition button ke click hone par hamara child component kyo re-render hai
// iska solution hai agar koi function ya function component re-render ho rha hai to me use useMemo Hook ki help se re-render hone se rok sakta hai  