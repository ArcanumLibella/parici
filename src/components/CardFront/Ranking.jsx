import React from 'react'

// SVG
import { Tree, Monument, Food, Hostel } from '../../assets/icons/all-icons'



const Ranking = (props) => {
  const { rankingType, dataRanking } = props

  const handleIconRanking = (rankingType) => {
    switch (rankingType) {
      case 'culture':
        return <Monument />
      case 'restaurant':
        return <Food />
      case 'hostel':
        return <Hostel />
      case 'nature':
        return <Tree />
      default:
        return 'No icons'
    }
  }

  

  return (
    <div className='ranking'>
      <p className='ranking__title ranking-title'>{rankingType}</p>
      <div className='ranking__inner'>
        <span className='ranking__data ranking-data'>{dataRanking}<sup>th</sup></span>
        {handleIconRanking(rankingType)}
      </div>
    </div>
  )
}

export default Ranking