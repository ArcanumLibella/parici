import React from 'react'

// COMPONENTS
import { BackCulture, BackHostel, BackRestaurant, BackNature } from '../CardBack'
import { CardCount, CardRanking } from '../CardFront'
import { RestaurantChart } from '../CardChart'

// SVG
import { Food, Hostel, Monument, Tree, Stadium } from '../../assets/icons/all-icons'

// DATA
import { restaurantPrices } from '../../data/restaurantPricesList'



const Card = (props) => {
  const { cardType, dataType, rankingType } = props

  // Function to handle card icon
  const handleCardIcon = (cardType) => {
    switch (cardType) {
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

  // Function to check card type
  const handleCardBack = (cardType) => {
    switch (cardType) {
      case 'culture':
        return <BackCulture cardType={cardType} />
      case 'restaurant':
        return <BackRestaurant cardType={cardType} />
      case 'hostel':
        return <BackHostel cardType={cardType} />
      case 'nature':
        return <BackNature cardType={cardType} />
      default:
        return 'Error back card'
    }
  }

  // Function to add icon-stadium to nature card 
  const handleCardNature = (cardType) => {
    if (cardType === 'nature') {
      return (
        <div className='card-front__stadium'>
          <span>42x</span>
          <Stadium />
        </div>
      )
    }
  }

  // Function to add icon-stadium to nature card 
  const handleCardRestaurant = (cardType) => {
    if (cardType === 'restaurant') {
      return (
        <div className='card-front__graphic'>
          {RestaurantChart(restaurantPrices)}
        </div>
      )
    }
  }

  return (
    <div className={'card card--' + cardType}>
      {/* CARD-FRONT */}
      <div className='card__front card-front'>
        <h3 className='card-front__title card-title'>{cardType}</h3>

        <div className='card-front__wrapper'>
          <CardCount dataType={dataType} />

          <div className='card-front__icon'>
            {handleCardIcon(cardType)}
          </div>

          {handleCardNature(cardType)}

          <CardRanking rankingType={rankingType} />

          {handleCardRestaurant(cardType)}
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>
        {handleCardBack(cardType)}
      </div>
    </div>
  )
}

export default Card