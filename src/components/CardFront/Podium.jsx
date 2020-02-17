import React from 'react'

// COMPONENTS
import { Ranking } from './'



const Podium = (props) => {
  const { cardType } = props

  return (
    <div className={'card card--' + cardType}>
      <div className='podium'>
        <h3 className='podium__title podium-title'>Paris 8th district ranking</h3>

        <div className='podium__wrapper'>
          <Ranking rankingType='nature' dataRanking='1' />
          <Ranking rankingType='hostel' dataRanking='12' />
          <Ranking rankingType='culture' dataRanking='8' />
          <Ranking rankingType='restaurant' dataRanking='4' />
        </div>
      </div>
    </div>
  )
}

export default Podium