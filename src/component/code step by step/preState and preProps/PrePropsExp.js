import React from 'react'
import User1 from './User1'
const PrePropsExp = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <User1 count={count} />
            <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update Counter</button>
        </div>
    )
}

export default PrePropsExp