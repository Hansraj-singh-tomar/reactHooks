import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Counter from './Counter'

const Parent = () => {
  return (
    <div>
        <ErrorBoundary>
            <Counter title={"first"} />  
        </ErrorBoundary>
        <ErrorBoundary>
            <Counter title={"second"} />
        </ErrorBoundary>
    </div>
  )
}

export default Parent;

// Counter component me jo bhi error aayegi vo ErrorBoundary component me jayegi or iss component me pura execute hoga or agar koi error mili to ye state update kar dega(return { error: error })