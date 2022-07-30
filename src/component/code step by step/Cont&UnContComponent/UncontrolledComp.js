// Uncontrolled Component
// there should be an input filed for uncontrolled component 
// or vo input field state se controll nhi ho rhi ho



import React, {useRef} from 'react'

const UncontrolledComp = () => {
    let inputRef = useRef(null);
    let inputRef2 = useRef(null);
    function submitForm(e){
      e.preventDefault(); 
      console.log('input field 1 value :' + inputRef.current.value);
      console.log('input field 2 value :' + inputRef2.current.value);
      let input3 = document.getElementById('input3').value
      console.log("input field 3 value :", input3);
    }
    return (
    <>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={submitForm}>
            <input type="text" ref={inputRef}/> <br/>
            <input type="text"  ref={inputRef2}/> <br/>
            <input type="text"  id='input3'/> <br/>
            <button>Submit</button>
        </form>
    </>
  )
}

export default UncontrolledComp

// Q. man lo me issme state ke through bhi kuch input field ko controll kar rha hu to bhi me isse unControlled component bolunga 