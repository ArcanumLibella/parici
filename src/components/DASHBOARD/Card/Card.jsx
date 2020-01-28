import React from 'react'

// COMPONENTS
import CardCount from './CardCount.jsx'
import CardRanking from './CardRanking.jsx'
import RestaurantChart from './Charts/RestaurantChart.jsx'
import BackCulture from './Back/BackCulture.jsx'
import BackHostel from './Back/BackHostel.jsx'
import BackRestaurant from './Back/BackRestaurant.jsx'
import BackNature from './Back/BackNature.jsx'
import { Food, Hostel, Monument, Tree, Stadium } from '../../../assets/icons/all-icons'

// DATA
import { restaurantPrices } from '../../../data/restaurantPricesList'

const Card = (props) => {
  const { cardType, dataType, rankingType } = props

  // Function to handle card icon
  const handleCardIcon = (cardType) => {
    if (cardType === 'culture') {
      return <Monument />
    } else if (cardType === 'restaurant') {
      return <Food />
    } else if (cardType === 'hostel') {
      return <Hostel />
    } else if (cardType === 'nature') {
      return <Tree />
    }
  }

  // Function to check card type
  const handleCardBack = (cardType) => {
    if (cardType === 'culture') {
      return <BackCulture cardType={cardType} />
    } else if (cardType === 'restaurant') {
      return <BackRestaurant cardType={cardType} />
    } else if (cardType === 'hostel') {
      return <BackHostel cardType={cardType} />
    } else if (cardType === 'nature') {
      return <BackNature cardType={cardType} />
    }
  }

  // Function to add icon-stadium to nature card 
  const handleCardNature = (cardType) => {
    if(cardType === 'nature') {
      return (
        <div className='card-front__stadium'>
          <span>42x</span>
          <Stadium/>
        </div>
      )
    }
  }

  // Function to add icon-stadium to nature card 
  const handleCardRestaurant = (cardType) => {
    if(cardType === 'restaurant') {
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
            { handleCardIcon(cardType) }
          </div>

          {handleCardNature(cardType)}

          <CardRanking rankingType={ rankingType }/>

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