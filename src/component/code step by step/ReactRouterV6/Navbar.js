import React from 'react'
import { Link,NavLink} from 'react-router-dom';
// NavLink ka use ham className and style and link me styling karne ke liye use karte hai 
export const Navbar = () => {
  return (
    <> 
        <ul className='navbar'>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> */}
            {/* <li><Link to="/user/anil">Anil</Link></li>
            <li><Link to="/user/peter">Peter</Link></li> */}


            <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
            {/* <li><NavLink className="nav-bar-link" style={{backgroundColor:'red'}} to="/">Home</NavLink></li> */}
            <li><NavLink className="nav-bar-link" to="/about">About Us</NavLink></li>
            <li><NavLink className="nav-bar-link" to="/contact">Contact Us</NavLink></li>
            <li><NavLink className="nav-bar-link" to="/filter">Filter</NavLink></li>
            <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li>

            {/* jab bhi ham kisi link ko click karte hai to hame active nam se calss bydefault milti hai uss link ke upar to uss par ham css add kar active link ka code likh sakte hai */}
        </ul>
    </>
  )
}
