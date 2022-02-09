import React, { useRef } from 'react';

const UnControlled2 = () => {
    let inputRef = useRef(null);
    let inputRef2 = useRef(null);

    function submitForm(e) {
        e.preventDefault();
        console.log("input field 1 value:", inputRef.current.value);
        console.log("input field 2 value:", inputRef2.current.value);
        let input3 = document.getElementById("input3").value    // ! js DOM ke through input field ko control kar rhe hai
        console.log("input field 3 value :", input3);
    }

    return (
        <div>
            <h1>Uncontrolled Componenet using Ref & JS.</h1>
            <form onSubmit={submitForm}>
                <input type="text" ref={inputRef} /> <br />
                <input type="text" ref={inputRef2} /> <br />
                <input type="text" id="input3" /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UnControlled2;
