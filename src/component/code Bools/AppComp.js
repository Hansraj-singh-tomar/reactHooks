import React from 'react'
import Counter from './Counter'
import ErrorBoundary from './ErrorBoundary'

const AppComp = () => {
  return (
    <div>
        <ErrorBoundary>
            <Counter title={"first"}/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Counter title={"second"}/>
        </ErrorBoundary>
    </div>
  )
}

export default AppComp