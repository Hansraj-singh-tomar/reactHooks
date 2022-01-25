// Using Controlled component - ye jo hamara react ya react component (BasicForm) hai, ye hamare form ko control kar rha hai
// isme har bar typing ya keypress karne par ek event fire ho rha hai, isme hamare har ek movement par state change ho rha hai or jo state change ho rha hai use mujhe khi na khi store karke rakhna padega that is why we have useState hook


import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);  // allEntry ki value empty array hai

    const submitForm = (e) => {
        e.preventDefault();

        if (email && password) {    // email and password both are true tabhi iske andar ka code chalega else ham alert karva denge 
            const newEntry = { id: new Date().getTime().toString(), email: email, password: password };  // user ne jo bhi enter kiya hai vo mene yha newEntry me enter kar diya hai // object destructuring ka bhi use kar sakte hai
            // const newEntry = { id: new Date().getTime().toString(),email, password };  // key and value same ho tab ham object destructuring use kar sakte hai

            setAllEntry([...allEntry, newEntry]);   // Just need to send the user data to backend 
            // console.log(allEntry);

            setEmail(""); // isse jab me second time dalunga input field me to mujhe usme purana likha hua nhi milega
            setPassword("");  // isse jab me second time dalunga input field me to mujhe usme purana likha hua nhi milega

        } else {
            alert("plz fill the data");
        }
    }

    return (
        <>

            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete='off' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" >Login</button>
            </form>

            <div>
                {
                    allEntry.map((curElem) => {
                        {/* const { id, email, password } = curElem; // object destructuring ka use kar sakta hu */ }
                        return (
                            <div className='showDataStyle' key={curElem.id} >
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default BasicForm


// autoComplete='off' karne par mujhe input box me jo pehle likha hua tha vo nhi milega
// value="" value attribute dene par me ab kuch likh nhi sakta input field me
// error aayegi - A component is changing an uncontrolled input to be controlled.
// onChange={} event se ham ek ek keyPress, ek ek state ki jo value hai, jo value change ho rhi hai uss par proper nazar rakhna
// and uski jo bhi value ya user jo bhi type kar rha hai usse mujhe properly us State variable par change kar dena hai


// new Date().getTime() - 1642216015460 ye integer form me hai
// new Date().getTime().toString() - '1642216084419' now ye ab string form me hai
// isko har bar refresh karne par hame ek unique number milne vala hai kyonki ye har second change hota hai
// to ham isse unique id ke liye use kar sakte hai

// curElem.id =  const newEntry = { id: new Date().getTime().toString(), email: email, password: password };
// yha se mil rha hai




// The Controlled

// A controlled input accepts its current value as a prop, as well as a callback to change that value.
// You could say it's a more "React way" of approaching this (which doesn't mean you should always use it).

/* <input value={someValue} onChange={handleChange} /> */

// Which is fine and all... but the value of this input has to live in the state somewhere.
// Typically, the component that renders the input(aka the form component) saves that in its state


// how does work controlled component
// Every time you type a new character, handleNameChange is called.It takes in the new value of the input and sets it in the state.
//  state = {                                                      calls handleNameChange(a);                                              calls handleNameChange(a);
//     name: " ",    (type 'a') input me a type karne par ->       setState({                                                                 setState({
//  };                                                                    name: 'a',        (type 'b) imput me ab type b karne par  ->                 name: 'ab',
//                                                                       });                                                                           });

// 1. It starts out as an empty string — ''.
// 2. You type a and handleNameChange gets an a and calls setState. The input is then re-rendered to have the value of a.
// 3. You type b. handleNameChange gets the value of ab and sets that to the state. The input is re-rendered once more, now with value="ab".