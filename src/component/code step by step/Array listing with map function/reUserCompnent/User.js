import React from 'react'

const User = (props) => {
    return (
        <div>
            {/* <h1>User {props.data.name}</h1> */}
            <span style={{ padding: "10px", fontSize: "20px", color: "#fff", backgroundColor: "#666", lineHeight: "60px" }}>{props.sn.i}</span>
            <span style={{ padding: "10px", fontSize: "20px", color: "#fff", backgroundColor: "#666", lineHeight: "60px" }}>{props.data.name}</span>
            <span style={{ padding: "10px", fontSize: "20px", color: "#fff", backgroundColor: "#666", lineHeight: "60px" }}>{props.data.email}</span>
            <span style={{ padding: "10px", fontSize: "20px", color: "#fff", backgroundColor: "#666", lineHeight: "60px" }}>{props.data.contact}</span>
        </div>
    )
}

export default User

// ab iss comopnent ke andar agar hame functions banane hai to functions bna lo, click event lagane hai to vo lga lo  