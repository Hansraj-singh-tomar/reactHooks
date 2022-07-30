// import './App.css';








// ! vinod thapa folder and files

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
// import {UseEffect3} from './component/useEffect/UseEffect3';
// import UseEffectAPI from './component/useEffect/UseEffectAPI';
// import UnControlled from './component/forms/UnControlled';
// import UnControlled2 from "./component/forms/UnControlled2";
// import UseReducer from './component/useReducer/UseReducer';
// import CompA from './component/useContext/CompA';
// import Test from './component/customHook/Test';
// import Test2 from "./component/customHook/Test2";
// import Alert from './component/reactToastify/alert';  // React - toastify ka use kiya hai isme
// import Todo from "./component/reactTodo/todo";


// ! code step by step folder and files

// import PureCom from "./component/code step by step/pure,usememo/PureCom";  // Pure Component through state 
// import PureCom2 from "./component/code step by step/pure,usememo/throughProps/PureCom2"; // Pure Component through props 
// import UseMemo from "./component/code step by step/pure,usememo/UseMemo";
// import Ref from "./component/code step by step/ref,useRef/ref";
// import UseRefHook from "./component/code step by step/ref,useRef/useRefHook";
// import UseRefExp from "./component/code step by step/ref,useRef/useRefExp";
// import Home from "./component/code step by step/ref,useRef/forwardRef/Home";
// import HighOrderFun from "./component/code step by step/HOC/HighOrderFun";
// import ParentComp from "./component/code step by step/Lifting state up/ParentComp";
// import ArrListingWithMap from "./component/code step by step/Array listing with map function/ArrListingWithMap";
// import NestedList from "./component/code step by step/Array listing with map function/NestedList";
// import ReuseComp from "./component/code step by step/Array listing with map function/reUserCompnent/ReuseComp";
import Construc from "./component/code step by step/life cycle method/Construc";
// import RenderMethod from "./component/code step by step/life cycle method/render/RenderMethod";
// import CompDidMount from "./component/code step by step/life cycle method/CompDidMount";
// import CompDidUpdate from "./component/code step by step/life cycle method/CompDidUpdate";
// import ShouldCompnentUpdate from "./component/code step by step/life cycle method/ShouldCompUpdate";
// import CompWillUnmount from "./component/code step by step/life cycle method/UnMount/CompWillUnmount";
// import PreStateExp from "./component/code step by step/preState and preProps/PreStateExp";
// import PrePropsExp from "./component/code step by step/preState and preProps/PrePropsExp";
// import ClickEventAndFun from "./component/code step by step/BasicRules/ClickEventAndFun";
// import GetInputBoxVal from "./component/code step by step/BasicRules/GetInputBoxVal";
// import HIdeShowToggle from "./component/code step by step/BasicRules/HIdeShowToggle";
// import HandleForm from "./component/code step by step/BasicRules/HandleForm";
// import ConditionalRendering from "./component/code step by step/BasicRules/ConditionalRendering";
// import BasicFormValidation from "./component/code step by step/BasicRules/BasicFormValidation";
// import PassFunAsProps from "./component/code step by step/BasicRules/PassFunAsProps";
// import StateWithObject from "./component/code step by step/StateWithObject";
// import App2 from "./component/code step by step/ErrorBoundary/App2";
// import App3 from "./component/code step by step/TypeCheckingWithPropType/App3";
// import App1 from "./component/code step by step/Lazy Loading/App1";
// import ControlledComp from "./component/code step by step/Cont&UnContComponent/ControlledComp";
// import UncontrolledComp from "./component/code step by step/Cont&UnContComponent/UncontrolledComp";
// import GetMethod from "./component/code step by step/CRUDOperation/GetMethod";
// import PostMethod from "./component/code step by step/CRUDOperation/PostMethod";
// import DeleteMethod from "./component/code step by step/CRUDOperation/DeleteMethod";
// import PreFilledForm from "./component/code step by step/CRUDOperation/PreFilledForm";
// import UploadFile from "./component/code step by step/CRUDOperation/UploadFile";
// import JWTAuthentication from "./component/code step by step/CRUDOperation/JWTAuthentication";
// import DemoComp from "./component/code step by step/DemoComp";


// import ParentComp from "./component/code step by step/ReactRouterV6/ParentComp";


// ! code evolution folders and files 

// import CounterOne from "./component/code evolution/UseReducer/CounterOne";
// import CounterTwo from "./component/code evolution/UseReducer//CounterTwo";
// import CounterThree from "./component/code evolution/UseReducer//CounterThree";
// import App2 from "./component/code evolution/UseReducer/red_with_context/App2";
// import DataFetchingOne from "./component/code evolution/UseReducer/DataFetchingOne";
// import DataFetchingTwo from "./component/code evolution/UseReducer/DataFetchingTwo";


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
      {/* <UseEffect3 /> */}
      {/* <UseEffectAPI /> */}
      {/* <UnControlled /> */}
      {/* <UnControlled2 /> */}
      {/* <UseReducer /> */}
      {/* <CompA /> */}
      {/* <Test/> */}
      {/* <Test2 /> */}
      {/* <Alert /> */}
      {/* <Todo /> */}

      {/* code step by step component */}
      {/* <PureCom /> */}
      {/* <PureCom2 /> */}
      {/* <UseMemo /> */}
      {/* <Ref /> */}
      {/* <UseRefHook /> */}
      {/* <UseRefExp /> */}
      {/* <Home /> */}
      {/* <HighOrderFun /> */}
      {/* <ParentComp /> */}
      {/* <ArrListingWithMap /> */}
      {/* <NestedList /> */}
      {/* <ReuseComp /> */}
      <Construc />
      {/* <RenderMethod /> */}
      {/* <CompDidMount /> */}
      {/* <CompDidUpdate /> */}
      {/* <ShouldCompnentUpdate /> */}
      {/* <CompWillUnmount /> */}
      {/* <PreStateExp /> */}
      {/* <PrePropsExp /> */}
      {/* <ClickEventAndFun /> */}
      {/* <GetInputBoxVal /> */}
      {/* <HIdeShowToggle /> */}
      {/* <HandleForm /> */}
      {/* <ConditionalRendering /> */}
      {/* <BasicFormValidation /> */}
      {/* <PassFunAsProps /> */}
      {/* <StateWithObject/> */}
      {/* <App1/> */}
      {/* <App2/> */}
      {/* <App3/> */}
      {/* <ControlledComp/> */}
      {/* <UncontrolledComp/> */}
      {/* <GetMethod/> */}
      {/* <PostMethod/> */}
      {/* <DeleteMethod/> */}
      {/* <PreFilledForm/> */}
      {/* <UploadFile/> */}
      {/* <JWTAuthentication/> */}
      {/* <DemoComp/> */}

      {/* React Router V6 - code step by step  */}
      {/* <ParentComp/> */}



      {/* code evolution component */}
      
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <App2 /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}

    </div>
  );
}

export default App;


