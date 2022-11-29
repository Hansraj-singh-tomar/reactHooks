import React, {memo} from 'react'

const ChildA = ({Learning, count}) => {
    console.log("child component called");
  return (
    <>
    </>
  )
}

export default memo(ChildA);