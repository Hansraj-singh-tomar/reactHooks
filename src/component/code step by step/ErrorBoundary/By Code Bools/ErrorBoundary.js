// Error Boundary kya karta hai ki jis component me error aaya hai ussi component me effect dalega. other jo bhi component hai app me jo import ho rhe hai un par reflect nhi dalega or puri app ko crashed hone se bachayega.

// syntax -

// 1.
// static getDerivedStateFromError(error){
//     return { hasError: true }
// }

// 2. 
// componentDidCatch(error, errorInfo) {
//      logErrorToMyService(error, errorInfo);
// } 


import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            errorInfo : null
        };
    }

    static getDerivedStateFromError(error){
        return { error: error };
    }

    // agar more information chahiye to 
    componentDidCatch(error, errorInfo) {
        this.state({
            error: error,
            errorInfo: errorInfo
        });
    }   
  render() {
    // if(this.state.error){
    if(this.state.errorInfo){  // ab errorInfo me koi message aaye, or agar vo null nhi hai koi data hai tb jakar ye message aaye 
        return( 
            <div>
                Something went wrong.
                <details style={{whiteSpace: "pre-wrap"}}>
                    {this.state.error && this.state.error.toString()} <br/>
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        )
    }
    return this.props.children;
  }
}
