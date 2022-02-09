// ! pureCom.js me  state ke upar dekha tha Pure component 
// !NOw we will see Pure component on props 

import React from 'react';
import User from './User';
class PureCom2 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {

        return (
            <div className="App">
                <User count={this.state.count} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    {/* <button onClick={() => this.setState({ count: 1 })}> iss me count ki value 1 hi hai or hamra component rerender ho rha hai to ham PureComponent ka use karenge */}
                    Update Count
                </button>
            </div>
        );
    }
}
export default PureCom2;