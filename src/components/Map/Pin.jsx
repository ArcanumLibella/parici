import React, {useState} from 'react'
const pins = require("../../data/pins.js")

const District = ({id,}) => {
  // const handleClick = function () {
  //   onDistrictClick(number)
  //   console.log(number)
  // }

  const data = pins.tag
  var parser = new DOMParser();
  var doc = parser.parseFromString(data, "application/xml");
  console.log(typeof(doc))
  const content = doc.getElementById(id)
  console.log(typeof(doc))
  const icone = content.querySelector("#icone").innerHTML
  const text = content.querySelector("#info").innerHTML

  return (
    <g className="pin" >
      <g className="pin__pin" dangerouslySetInnerHTML={{ __html: icone }}></g>
      <g className="pin__content" dangerouslySetInnerHTML={{ __html: text }}></g>
    </g>
  )
}

export default District
