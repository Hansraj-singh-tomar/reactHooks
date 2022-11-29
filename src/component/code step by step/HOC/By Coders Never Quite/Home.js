import React from "react";
import withPower from "./withPower";

const Home = (props) => {
    // console.log(props);  // {name: "hansraj"}
    console.log(props);  // {name: "hansraj", status: "coder"}
    return(
        <div>
            <h1>Coders Never Quite.</h1>
        </div>
    )
}

export default withPower(Home);