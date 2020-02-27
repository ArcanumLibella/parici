import React from 'react'
import { numberToRank } from '../../Helpers'

// COMPONENTS
import { Ranking } from './'



const Podium = (props) => {
  const { cardType, district, data } = props
  let districtNumber = district + numberToRank(district)

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

  // FIXME: Manage podium
  // const rankingIndex = () => {
  //   if (data) {
  //     let dataRankingNature = data[district - 1].natureRank
  //     // let dataRankingHotel = data[district - 1].hotelRank
  //     // let dataRankingCulture = data[district - 1].cultureRank
  //     // let dataRankingRestaurant = data[district - 1].restaurantRank
  //     console.log(dataRankingNature);
  //     switch (dataRankingNature) {
  //       case (dataRankingNature < 5):
  //         return 'first'
  //       case (dataRankingNature < 10):
  //         return 'second'
  //       case (dataRankingNature < 15):
  //         return 'third'
  //       default:
  //         return 'fourth'
  //     }
  //   }
  // }
  // console.log(rankingIndex());

  return (
    <div className={'card card--' + cardType}>
      <div className='podium'>
        <h3 className='podium__title podium-title'>Paris {districtNumber} district ranking</h3>

        <div className='podium__wrapper'>

          <Ranking
            rankingType='nature'
            dataRanking={handleRanking("nature")}
          />
          <Ranking
            rankingType='hotel'
            dataRanking={handleRanking("hotel")}
          />
          <Ranking
            rankingType='culture'
            dataRanking={handleRanking("culture")}
          />
          <Ranking
            rankingType='restaurant'
            dataRanking={handleRanking("restaurant")}
          />
        </div>
      </div>
    </div>
  )
}

export default Podium