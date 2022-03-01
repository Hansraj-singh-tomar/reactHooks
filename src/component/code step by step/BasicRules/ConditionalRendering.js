import React from 'react'

const ConditionalRendering = () => {
    // jab If_else condition ho tab but ternary operator ka use karenge
    // const [logIN, setLogIN] = React.useState(true);  // ture hone par user Login and false hone par guest Login
    // return (
    //     <div>
    //         {
    //             logIN ? <h1>User LogIn</h1> : <h1>Guest LogIn</h1>
    //         }
    //     </div>
    // )

    // jab if_else_if_else nested if_else ho tab 
    const [logIN, setLogIN] = React.useState(3);
    //  jab teen user ho tab like - 1,2,3 
    return (
        <div>
            {
                logIN === 1 ? <h1>User 1 LogIn</h1> : logIN === 2 ? <h1> User 2 LogIn</h1> : <h1>User 3 LogIn</h1>
            }
        </div>
    )

}

export default ConditionalRendering