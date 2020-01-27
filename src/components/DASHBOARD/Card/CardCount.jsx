import React from 'react'



const CardCount = (props) => {
  const { dataType } = props

  return(
    <div className='card-front__count'>
      <h4 className='card-count'>
        <span>150</span>
        { ' ' + dataType }
      </h4>
    </div>
  )
}

export default CardCount