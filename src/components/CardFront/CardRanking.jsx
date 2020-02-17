import React from 'react'



const CardRanking = (props) => {
  const { rankingType } = props

  return(
    <div className='card-front__ranking'>
      <h4 className='card-ranking'>
        10th
        {' ' + rankingType }
      </h4>
    </div>
  )
}

export default CardRanking