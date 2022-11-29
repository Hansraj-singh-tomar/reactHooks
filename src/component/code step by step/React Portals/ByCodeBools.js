// Portal provides a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent coponent.

// Syntax - ReactDOM.createPortal(child,container)

// Child - this first argument(child) is any renderable React child, such as an element,string or fragment 

// The second argument (container) is a DOM element.

// index.html file me 
// {/* <body>
//     <div id="modal-root">
         
//     </div>
//     <div id="root">

//     </div>
// </body> */}

// ReactDOM.createPortal(<div>Hello World</div>, document.getElementById('modal-root'))


// App.js file me 

import React, {useState} from 'react'
import ReactDOM from 'react-dom';
const container = document.getElementById("modal-root");

const ByCodeBools = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>
        {open && <Modal />}
    </div>
  )

}

export default ByCodeBools

const Modal = () => {
    return ReactDOM.createPortal(<div>Hello World</div>,container);
}


// When to use the Portals ? - For Modal(click karne par modal open ho but vo root reactDOM ke upar popup ho.)

