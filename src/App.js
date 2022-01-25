// import './App.css';
// import react, { useState } from 'react';
// import RulesHook from './component/useState/RulesHook';
// import UseStateArray from './component/useState/UseStateArray';
// import UseStateObject from './component/useState/UseStateObject';
// import ShortCurcuitEval from './component/useState/ShortCurcuitEval';
// import BasicForm from './component/forms/BasicForm';
// import BasicForm2 from './component/forms/BasicForm2';
// import MultipleInputs from './component/forms/MultipleInputs';
// import UseEffect1 from './component/useEffect/UseEffect1';
// import UseEffect2 from './component/useEffect/UseEffect2';
// import UseEffectAPI from './component/useEffect/UseEffectAPI';
// import UnControlled from './component/forms/UnControlled';
// import UseReducer from './component/useReducer/UseReducer';
// import CompA from './component/useContext/CompA';
// import Test from './component/customHook/Test';
// import Test2 from "./component/customHook/Test2";
// import Alert from './component/reactToastify/alert';  // React - toastify ka use kiya hai isme
// import Todo from "./component/reactTodo/todo";
// import PureCom from "./component/code step by step/PureCom";  // Pure Component through state 
// import PureCom2 from "./component/code step by step/throughProps/PureCom2"; // Pure Component through props 

import UseMemo from "./component/code step by step/UseMemo";


const App = () => {

  // without useState karne par ham value change nhi kar pa rhe hai  
  // var val = 'thapa technical';
  // const changeName = () => {
  //   val = "vinod thapa";
  //   console.log(val);
  // }
  // console.log(val);

  // console.log(useState);  // ye ek function hai
  // console.log(useState()); // ye function hame ek array return kar rha hai 0: undefined, 1: function
  // console.log(useState("thapa technical")); // 0: thapa technical 1: function
  // let myfirstval = useState('thapa')[0];
  // console.log(myfirstval);

  // useState hamare component ko re-render karta hai mtlb vapas se isse call kar deta hai without useState me vo usse vapas call nhi kar pa rha tha
  // const [myName, setMyName] = useState("thapa technical"); // myName = "thapa technical" // and ye array destructuring ke form me hai 
  // const changeName = () => {
  //   setMyName("vinod thapa");
  // }

  // const changeName = () => {
  // how to toggle the data onclick using Hook
  // toggle means jab me button ko click karu to mujhe thapa technical ki jagah vinod thapa mile and then again button par click karne par mujhe vinod  thapa ki jagah thapa tachnical mil jaye 
  // let val = myName
  // if (val === "thapa technical") {
  //   setMyName("vinod thapa");
  // } else {
  //   setMyName("thapa technical");
  // }

  // now using ternary operator
  // (val === "thapa technical") ? setMyName("vinod thapa") : setMyName("thapa technical");
  // }
  return (
    <div>
      {/* <h1> {myName}</h1>
      <button onClick={changeName}> click me please </button> */}
      {/* <RulesHook /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <ShortCurcuitEval /> */}
      {/* <BasicForm /> */}
      {/* <BasicForm2 /> */}
      {/* <MultipleInputs /> */}
      {/* <UseEffect1 /> */}
      {/* <UseEffect2 /> */}
      {/* <UseEffectAPI /> */}
      {/* <UnControlled /> */}
      {/* <UseReducer /> */}
      {/* <CompA /> */}
      {/* <Test/> */}
      {/* <Test2 /> */}
      {/* <Alert /> */}
      {/* <Todo /> */}
      {/* <PureCom /> */}
      {/* <PureCom2 /> */}
      <UseMemo />
    </div>
  );
}

export default App;
