import React from 'react'

const District = ({ number, points, color, onDistrictClick }) => {

  const handleClick = function () {
    onDistrictClick(number)
    console.log('N°', number)
  }

  return (
    <path onClick={() => { handleClick() }} id={number} data-name="20" className="cls-2" d={points} style={{ fill: color }} />
  )
}

export default District
