import React from 'react'

// SVG
import { Tree, Monument, Food, Hostel } from '../../../../assets/icons/all-icons'



const Ranking = (props) => {
  const { rankingType, dataRanking } = props

  const handleIconRanking = (rankingType) => {
    if (rankingType === 'nature') {
      return <Tree />
    } else if (rankingType === 'culture') {
      return <Monument />
    } else if (rankingType === 'hostel') {
      return <Hostel />
    } else if (rankingType === 'restaurant') {
      return <Food />
    }
  }

  return (
    <div className='ranking'>
      <p className='ranking__title ranking-title'>{rankingType}</p>
      <span className='ranking__data ranking-data'>{dataRanking}<sup>th</sup></span>
      {handleIconRanking(rankingType)}
    </div>
  )
}

export default Ranking