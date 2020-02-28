import React from 'react'



const CardCount = (props) => {
  // PROPS
  const { dataType, cardType, count } = props

  // FUNCTIONS
  // To convert areas 
  const handleCount = () => {
    if (cardType === "nature") {
      if (count <= 99999) {
        return count + "m²"
      } else {
        return Math.round(count / 1000) / 1000 + "km²"
      }
    } else {
      return count
    }
  }

  return (
    <div className='card-front__count'>
      <h4 className='card-count'>
        <span>{handleCount()}</span>
        {' ' + dataType}
      </h4>
    </div>
  )
}

export default CardCount