import React from 'react'

import {BrowserRouter, Routes,Route, Navigate, Outlet} from 'react-router-dom'
import { Home } from './Home';
import { About } from './About';
import { Navbar } from './Navbar';
// import Page404 from './Page404'; 
import User from './User';
import Filter from './Filter';

import Contact from './Contact';
import Company from './Company';
import Other from './Other';
import Channel from './Channel';

import Login from './Login';
import { Protected } from './Protected';

const ParentComp = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            {/* <Route path="/about" element={<About/>}/> */}
            {/* <Route path="/filter" element={<Filter/>}/> */}
            <Route path="/user/:name" element={<User/>}/>
            {/* <Route path="/*" element={<Page404/>}/> */}
            <Route path="/*" element={<Navigate to="/" />}/> // 404 page ki jagah direct home page dikhane ke liye navigate ka use karenge
            

            {/* Nested Routing of company,channel,other component */}
            {/* and parent component Contact me outlet component ko use karna hai <Outlet/>  */}
            <Route path="/contact" element={<Contact/>}>
              <Route path='company' element={<Company/>}/>
              <Route path='channel' element={<Channel/>}/>
              <Route path='other' element={<Other/>}/>
            </Route>

            {/* protected Routing */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Protected Component={Home} />}/>
            <Route path="/" element={<Protected Component={About} />}/>
            <Route path="/" element={<Protected Component={Filter} />}/>
            

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default ParentComp;

// some inportant Hooks of React Router 
// 1. useParams
// 2. useSearchParams
// 3. useLocation
// 4. useNavigate

// Difference btw useParams and useSearchParams

// useParams :- use to get Dynamic Routing Value
//  const params = useParams();
// exp - localhost:3000/user/100
//       localhost:3000/user/101
//    100 is dynamic value here

// useSearchParams :- Use for get query params
// const [searchParams, setSearchParams] = useSearchParams();
// exp - http://localhost:3000/filter?city=indore&age=10
//       http://localhost:3000/user?id=100
//       id = 100 is query params here
// console.log(searchParams);
// console.log(searchParams.get('age')); // 10
// console.log(searchParams.get('city')); // indore

// Difference btw Hash Route VS Browser Route
// 1. Mostly we use Browser Route
// 2. Hash Route used for hiding route from the server 
// 3. Example Browser Route: localhost:3000/about
// 4. Example Hash Route: localhost:3000#about 