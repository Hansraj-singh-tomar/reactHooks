import React from 'react'

const User = () => {
    if(false){
      throw new Error('custom error from User.js page');   
    }
  return (
    <>
        <h1>User Component.</h1>
    </>
  )
}

export default User;