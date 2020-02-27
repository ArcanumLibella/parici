import React from 'react'
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
        default:
          return '?'
      }
    }
  }

  const sortRanking = () => {
    if (data) {
      let dataRanking = data[district - 1]
      let arrayRanking = []

      for (let [key, value] of Object.entries(dataRanking)) {
        arrayRanking.push(value)
        arrayRanking.sort(function (a, b) {
          return a - b
        });
        console.log('tableau trié -> ', arrayRanking);
      }
      // return arrayRanking
      arrayRanking.forEach((ranking, i) => {
        // console.log(i + 1);
        return i + 1
      })
    }
  }

  // const rankingIndex = () => {
  //   // Récupération d'un tableau trié
  //   // console.log(sortRanking())
  //   // Pour chacun élément du tableau retourner son index + 1
  //   sortRanking.forEach((ranking, i) => {
  //     return i + 1
  //   })
  //   console.log(rankingIndex)
  // }

  // rankingIndex()
  // sortRanking()
  console.log(sortRanking())

  let districtNumber = district + numberToRank(district)

  return (
    <div className={'card card--' + cardType}>
      <div className='podium'>
        <h3 className='podium__title podium-title'>Paris {districtNumber} district ranking</h3>

        <div className='podium__wrapper'>

          <Ranking
            // Si rankingIndex = 1 alors on ajoute la class .first
            // Si rankingIndex = 2 alors on ajoute la class .second
            // Si rankingIndex = 3 alors on ajoute la class .third
            // Si rankingIndex = 4 alors on ajoute la class .fourth
            /* rankingIndex={rankingIndex} */
            rankingType='nature'
            dataRanking={handleRanking("nature")}
          />
          <Ranking
            /* rankingIndex={rankingIndex} */
            rankingType='hotel'
            dataRanking={handleRanking("hotel")}
          />
          <Ranking
            /* rankingIndex={rankingIndex} */
            rankingType='culture'
            dataRanking={handleRanking("culture")}
          />
          <Ranking
            /* rankingIndex={rankingIndex} */
            rankingType='restaurant'
            dataRanking={handleRanking("restaurant")}
          />
        </div>
      </div>
    </div>
  )
}

export default Podium