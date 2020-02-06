import React from 'react'

// COMPONENTS
import { HostelChart } from '../CardChart'

// DATA
import { hostelsStars } from '../../data/hostelsStars'

const BackHostel = ( props ) => {
  const { cardType } = props

  return (
    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{ cardType }</h3>  
      <div className='card-back__graphic'>
        {HostelChart(hostelsStars)}
      </div>
    </div>
  )
}

export default BackHostel