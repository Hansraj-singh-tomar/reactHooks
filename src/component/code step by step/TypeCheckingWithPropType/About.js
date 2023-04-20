import React from 'react'
import PropTypes from 'prop-types';
const About = (props) => {
  return (
    <>
      <h1>About Component. </h1>
      <h2>{props.age}</h2>  
      <h2>{props.name}</h2>  
    </>
  )
}


// console me hame error dekhne ko mil jayegi if their is something fissy
About.propTypes={
    age: PropTypes.number,
    name: PropTypes.string
}

// ProtoTypes.array
// ProtoTypes.bool
// ProtoTypes.func
// ProtoTypes.object
// ProtoTypes.string
// ProtoTypes.number
// ProtoTypes.symbol
// ProtoTypes.node
// ProtoTypes.elementType
// ProtoTypes.element

export default About