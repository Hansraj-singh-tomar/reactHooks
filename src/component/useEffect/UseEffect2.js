// CleanUp function
// In this example we will use two useEffects 


import React, { useState, useEffect } from 'react'

const UseEffect2 = () => {
    // const [widthCount, setWidthCount] = useState(0);
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const actualWidth = () => {
        // console.log("I am width");
        // console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }
    useEffect(() => {
        // console.log("add event");
        window.addEventListener('resize', actualWidth);
        return () => {
            // console.log("remove event listener")
            window.removeEventListener('resize', actualWidth);  //the movement addEventListener chalega uske within a second hamara removeEventListener chal jayega jisse hamare server par jyada load nhi aayega 
        }
    });

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup       // ye hai clean up function jo hamare event ko sath hi sath clean karta jayega jissse server crash na ho  
    //     }
    // }, [input])

    return (
        <div>
            <p>The actual size of the window is:</p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2
