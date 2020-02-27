import React from 'react'
import { numberToRank } from '../../Helpers'

// SVG
import { Nature, Culture, Restaurant, Hostel } from '../../assets/icons/all-icons'



const Ranking = (props) => {
  const { rankingType, dataRanking } = props

  const handleIconRanking = (rankingType) => {
    switch (rankingType) {
      case 'culture':
        return <Culture />
      case 'restaurant':
        return <Restaurant />
      case 'hotel':
        return <Hostel />
      case 'nature':
        return <Nature />
      default:
        return 'No icons'
    }
  }



  return (
    <div
      className='ranking'>
      <p className='ranking__title ranking-title'>{rankingType}</p>
      <div className='ranking__inner'>
        <span className='ranking__data ranking-data'>{dataRanking}<sup>{numberToRank(dataRanking)}</sup></span>
        {handleIconRanking(rankingType)}
      </div>
    </div>
  )
}

export default Ranking