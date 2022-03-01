import React, { useContext } from 'react'
import { CountContext } from '../App2'
const ComponentD = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component D - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Inc</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Dec</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD