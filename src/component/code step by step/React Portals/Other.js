// React portal - kai bar hame react ka jo root element hota hai usse bahar code likhna hota hai  

// {/* <body>
// <noscript>You need to enable JavaScript to run this app.</noscript>
// <div id="root"></div>
// <div id='other-root'></div>
// </body> */}

// ab mujhe iss other-root id vale div me kuch likhna hai to me kiss tarah se likhunga
// iske liye ham react portal ka use karenge

import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
    return(
        <>
            <h1>React Portal</h1>
            <Other/>
        </>
    )
}

const Other = () => {
  return (
    ReactDOM.createPortal(
        <h1>Other Portal</h1>,
        document.getElementById('other-root')
    )
  )
}

export default Other

// Best of use it to create modal or jquery add karne ke liye 