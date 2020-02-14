import React, {useState, useEffect} from 'react'

const District = (props) => {


  const handleClick = function() {
    console.log(props.number)
  }

  return (
    <polygon onClick={() => {handleClick()}} id={props.number} data-name="20" className="cls-2" points={props.points} style={{fill: props.color}}/>
  )
}

export default District
