import React, { Component } from 'react';

class CompDidUpdate extends Component {
    constructor() {
        super();
        // console.log("constructor method");
        this.state = {
            // name: 'hansraj'
            count: 0
        }
    }
    componentDidUpdate(preProps, preState, snapshot) {
        // preState hame pichle vali state hai na vo provide karvayega isi prakar preProps bhi 
        // console.log("componentDidUpdate", preState);
        //! iska fayda ye hai ki ham ye check karva sakte hai ki iski pichli state or aval/current state kya dono similar hai ya dono fir alag alag hai
        //! man lo ham API se kuch data fetch kar rhe hai or hamne state update karvayi or hamne dekha ki dono chije bilkul same hai to ham user ko message dikha sakte hai ki data already same 
        // console.log("componentDidUpdate", preState.count, this.state.count);
        // if (preState.count === this.state.count) {
        //     alert("data is already same");
        // }

        //! Q. kya ham update karvasakte hai state ko iske andar but with condition, without condition karne par vo infinite loop me chale jayega
        // this.setState({ count: this.state.count + 1 }); // ese direct likhne par ye infinite loop me chale jayega
        // if (this.state.count < 10) {  // agar yha par condition use nhi karte hai to ye infinite chalte hai jayega 
        //     this.setState({ count: this.state.count + 1 });  // ye fta fat se ten times call ho jayega or 10 par aane par ruk jayega kyonki yha par isko condition mil gyi hai 
        // }   // ! iss tarah se ham consition ke sath kuch update karva sakte hai agar hame karvana ho to

        //! snapshot ko normally console karvane ki kosis karenge na to ye hame har bar undefined hi milega 
        console.log("componentDidUdate", snapshot)
        if (this.state.count < 10) {
            this.setState({ count: this.state.count + 1 });  // snapshot ne isko das ke das baar undefined show kar diya hai 
        }

        // console.log("componentDidUpdate");
    }
    render() {
        // console.log("render method");
        return (
            <div>
                {/* <h1>Component Did Update { this.state.name}</h1> */}
                <h1>Component Did Update {this.state.count}</h1>
                {/* <button onClick={() => this.setState({ name: "y_shivani" })}>Update Name</button> */}
                {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update count</button> */}
                <button onClick={() => this.setState({ count: 1 })}>Update count</button>
            </div>
        );
    }
}

export default CompDidUpdate;


// 1. constructor, render and componentDidUpdate ko ek sath console karvane par constructor pehle chalega then render
//    but jab tak props and state ki value update nhi ho jati tab tak componentDidUpdate() method nhi chalegi.
// 2. button click karne par ham state ki value update kar rhe hai tab compnentDidUpdate() call hoga or jab jab ham button par click karenge
//    tab tab compnentDidUpdate call hoga. Isiliye iske andar ham state update nhi karvate kyonki jaise hi me componentDidUpdate ke andar state update karvaunga
//    bina condition ke to ye kya karega usko infinite loop ke andar le jayega

//! Q. kya ham componentDidUpdate ko call hone se rok sakte hai
// Ans- componentDidUpdate() will not be invoked if shouldCompnentUpdate() return false

//! Q. kya hame compnentDidUpdate ke andar API call karni chahiye if yes then why or not then why?
// Ans- yes, but API conditional call karvani ho tab

//! shouldCompnentUpdate() pehle call hota hai ya componentDidUpdate() pehle call hota hai jab bhi hamari sate update hogi ?
// Ans- shouldCompnentUpdate() pehle call hoga . 