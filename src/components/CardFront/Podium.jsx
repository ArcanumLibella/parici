import React, { useState, useEffect } from 'react'
import { numberToRank } from '../../Helpers'

// COMPONENTS
import { Ranking } from './'



const Podium = (props) => {
  const { cardType, district, data } = props

  const handleRanking = (type) => {
    if (data) {
      switch (type) {
        case "nature":
          return data[district - 1].natureRank
        case "hotel":
          return data[district - 1].hotelRank
        case "culture":
          return data[district - 1].cultureRank
        case "restaurant":
          return data[district - 1].restaurantRank
        default:
          return '?'
      }
    }
  }

  let districtNumber = district + numberToRank(district)

  return (
    <div className={'card card--' + cardType}>
      <div className='podium'>
        <h3 className='podium__title podium-title'>Paris {districtNumber} district ranking</h3>

        <div className='podium__wrapper'>

          <Ranking rankingType='nature' dataRanking={handleRanking("nature")} />
          <Ranking rankingType='hotel' dataRanking={handleRanking("hotel")} />
          <Ranking rankingType='culture' dataRanking={handleRanking("culture")} />
          <Ranking rankingType='restaurant' dataRanking={handleRanking("restaurant")} />

        </div>
      </div>
    </div>
  )
}

export default Podium