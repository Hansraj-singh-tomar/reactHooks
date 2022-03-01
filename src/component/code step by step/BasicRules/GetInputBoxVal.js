import React from 'react'

const GetInputBoxVal = () => {
    const [data, setData] = React.useState(null)
    const [print, setPrint] = React.useState(null)
    function getData(e) {
        console.warn(e.target.value);
        setData(e.target.value);
        setPrint(false);  // isse false karne par ham pichle h1 ko hta sakte hai
    }
    return (
        <div>
            {/* <h1>{data}</h1> */}
            {
                print ? <h1>{data}</h1> : null
            }
            Input : <input type="text" onChange={getData} />
            <button onClick={() => setPrint(true)}>Print data</button>
        </div>
    )
}

export default GetInputBoxVal