import React from 'react'

// COMPONENTS
import { CardRestaurant } from './'



const BackRestaurant = (props) => {
  // PROPS
  const { cardType } = props

  return (
    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{cardType}</h3>

      <div className='card-back__wrapper'>
        <CardRestaurant />
        <CardRestaurant />
        <CardRestaurant />
      </div>
    </div>
  )
}

export default BackRestaurant