import React, { Component } from 'react'

class User extends Component {
    constructor() {
        super();
        this.state = {
            email: "hansraj@gmail.com"
        }
    }
    render() {
        console.warn("Render method", this.props);
        console.warn("Render method", this.state.email);
        return (
            <div>
                <h1>User Component {this.props.name}</h1>
                <button onClick={() => this.setState({ email: "raj@mail.com" })}>Update Email</button>
            </div>
        )
    }
}

export default User