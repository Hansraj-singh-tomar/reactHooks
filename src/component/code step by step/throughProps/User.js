import React, { PureComponent } from 'react';

class User extends PureComponent {
    // iske andar jo bhi data aayega vo parent se aayega to ham constructor ka use nhi kar rhe hai 

    render() {
        console.warn("user component check rerendering");
        return (
            <div className="App">
                <h1>pure component through props {this.props.count} </h1>
            </div>
        );
    }
}
export default User;