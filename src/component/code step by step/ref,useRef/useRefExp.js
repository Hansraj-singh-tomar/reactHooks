import React, { useRef } from 'react';

const UseRefExp = () => {

    let usernameRefs = useRef([]);

    usernameRefs.current = [0, 0, 0, 0].map(
        (ref, index) => usernameRefs.current[index] = React.createRef()
    )

    const handleCopyUsername = (e, index) => {
        usernameRefs.current[index].current.select();
        document.execCommand("copy");
    };

    return (

        [0, 0, 0, 0].map((el, index) => {
            return (
                <div>
                    <input type="text" readonly ref={usernameRefs.current[index]} value={index} />
                    <button onClick={handleCopyUsername}>Click to copy text </button>
                </div>
            )
        }
        )


    )

}

export default UseRefExp;