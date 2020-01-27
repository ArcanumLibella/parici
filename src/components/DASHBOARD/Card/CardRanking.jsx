import React from 'react'



const CardRanking = (props) => {
  const { rankingType } = props

  return(
    <div className='card-front__ranking'>
      <h4 className='card-ranking'>
        <span>10<sup>th</sup></span>
        {' ' + rankingType }
      </h4>
    </div>
  )
}

export default CardRanking