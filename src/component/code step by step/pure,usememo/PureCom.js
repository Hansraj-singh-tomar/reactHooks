// pure component ek feature hota hai hame ese react se import karke use karn hota hai '
// ye vala component sirf class component ke andar lagega function component ke liye ham useMemo hook ka use karenge

// Pure component - ye hamare component ki re-rendering ko rokta hai. re-rendering mtlb baar baar usko execute hone se
// man lo ek satate ke andar name set karvaya anil or ek button ke click ke upar same name aap bar bar set karva rhe ho or button ke click ke upar bar bar click karvaye hi ja rhe ho
// to har bar kya hota hai ki hamaracomoponent re-render hota hai or check karta hai ki state nyi hai ya nhi hai or uske baad pure component ko re-render karta hai
// pure component ye match karega ki pehle vala jo nam tha state ke andar or ab jo dala hai dono same hai ya alag alag hai agar dono same hai to vo re-rendering nhi karega or alag alag hai to vo re-rendering karega


// ye function component hai
// import React from 'react';
// const PureComponent = () => {
//     return <div></div>;
// };
// export default PureComponent;

// class component
// ! State ke upar dekhenge Pure component 

import React, { PureComponent } from 'react';

class PureCom extends PureComponent {   // yha se bhi PureComponent ko import kar sakte hai React.PureComponent 
    // ab ham yha state define karenge uske liye mujhe constructor use karna padega 
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.warn("check rerendering");
        return (
            <div className="App">
                <h1>pure component in react {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Update Count
                </button>
            </div>
        );
    }


    // upar jo render() method hai usme count ki value change ho rhi hai to component re-render ho rha hai but kya ho agar setCount() ke through count
    // ki value change na ho but tab bhi hamar component rerender ho rha hai jo ek galat baat hai to iss chij ko resolve karne ke liyw hamare pass pure component hai 

    // render() {
    //     console.warn("check rerendering");
    //     return (
    //         <div>
    //             <h1>pure component in react {this.state.count}</h1>
    //             <button onClick={() => this.setState({ count: 1 })}>
    //                 Update Count
    //             </button>
    //         </div>
    //     );
    // }
}
export default PureCom;




