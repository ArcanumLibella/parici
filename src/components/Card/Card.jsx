import React from 'react'

// COMPONENTS
import { BackCulture, BackHostel, BackRestaurant, BackNature } from '../CardBack'
import { CardCount, CardRanking } from '../CardFront'
import { RestaurantChart } from '../CardChart'

// SVG
import { Restaurant, Hostel, Nature, Culture, ReturnArrow } from '../../assets/icons/all-icons'

// DATA
import { restaurantPrices } from '../../data/restaurantPricesList'



const Card = (props) => {
  const { cardType, dataType, rankingType } = props

  // Function to handle card icon
  const handleCardIcon = (cardType) => {
    switch (cardType) {
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

  // Function to check card type
  const handleCardBack = (cardType) => {
    switch (cardType) {
      case 'culture':
        return <BackCulture cardType={cardType} />
      case 'restaurant':
        return <BackRestaurant cardType={cardType} />
      case 'hotel':
        return <BackHostel cardType={cardType} />
      case 'nature':
        return <BackNature cardType={cardType} />
      default:
        return 'Error back card'
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
        <span className='card-front__dash card-title'> - </span>
        <CardRanking rankingType={rankingType} />

        <div className='card-front__wrapper'>
          <CardCount dataType={dataType} />

          <div className='card-front__icon'>
            {handleCardIcon(cardType)}
          </div>

          {handleCardRestaurant(cardType)}
        </div>

        <ReturnArrow />
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>
        {handleCardBack(cardType)}
      </div>
    </div>
  )
}

export default Card