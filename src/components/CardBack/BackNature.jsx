import React from 'react'

// COMPONENTS
import { NatureChart } from '../CardChart'


// DATA
import {natureSpaces} from '../../data/natureSpaces'

const BackNature = ( props ) => {
  const { cardType } = props

  return (
    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{ cardType }</h3>
        
      <div className='card-back__graphic'>
        {NatureChart(natureSpaces)}
      </div>
    </div>
  )
}

export default BackNature