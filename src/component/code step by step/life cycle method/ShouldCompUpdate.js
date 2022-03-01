import React, { Component } from 'react'

class ShouldCompnentUpdate extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    shouldComponentUpdate() {
        console.warn("should component updated", this.state.count);

        if (this.state.count > 5 && this.state.count < 10) {
            return true;
        }

        // return true; // return true karne par hi state ko update karne dega 
        // console me to updated value show hogi but in UI part me nhi dekhegi updated value iske liye ham return true karenge tab ham UI part me value dekh payenge
    }
    render() {
        return (
            <div>
                <h1>hello render method is here {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>update name</button>
            </div>
        );
    }
}

export default ShouldCompnentUpdate;
