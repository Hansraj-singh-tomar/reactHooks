import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error){
        return { error: error}
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

  render() {
    if(this.state.errorInfo){
      return (
        <div>
            Something Went Wrong.
            <details style={{whiteSpace: "pre-wrap"}}>
                {/* agar error nhi hai to and lga hai to aage jayega */}
                {this.state.error && this.state.error.toString()} 
                <br />
                {this.state.errorInfo.componentStack}
            </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary


// syntax - 
// static getDerivedStateFromError(error){
// Update state so the next render will show the fallback UI.
//      return { hasError: true };
// }

// componentDidCatch(error, errorInfo) {
//     // you can algo log the error to an error reporting service 
//     legErrorToMyService(error, errorInfo);
// }