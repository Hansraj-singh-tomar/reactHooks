import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();


  const navToPage = (url) => {
    // let x = false;
    // if(x){
    //   navigate('/about')
    // }else{
    //   navigate('/filter')
    // }
    navigate(url)
  }

  return (
    <>
      <h1>Home compoent </h1>
      <p>This is a Home Page of our awesome App</p>
      <p>Here we are learning about Router.</p>
      <Link to="/about">Go to About Page</Link><br/>
      

      {/* <button onClick={() => {navigate('/about')}}>Go to About Page</button><br/>
      <button onClick={() => {navigate('/filter')}}>Go to Filter Page</button> */}
      
      {/* <button onClick={()=>navToPage()}>Go to About Page</button> */}
      <button onClick={()=>navToPage('/about')}>Go to About Page</button>
      {/* <button onClick={()=>navToPage()}>Go to Filter Page</button> */}
      <button onClick={()=>navToPage('/filter')}>Go to Filter Page</button>
    </>
  )
}
