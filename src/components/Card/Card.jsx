import React from 'react'
import { numberToRank } from '../../Helpers'

// COMPONENTS
import { BackCulture, BackHostel, BackRestaurant, BackNature } from '../CardBack'
import { CardCount } from '../CardFront'
import { RestaurantChart } from '../CardChart'

// SVG
import { Restaurant, Hostel, Nature, Culture, ReturnArrow } from '../../assets/icons/all-icons'



const Card = (props) => {
  const { cardType, dataType, rankingType, data } = props

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
    if (data) {
      switch (cardType) {
        case 'culture':
          return <BackCulture cardType={cardType} data={data} />
        case 'restaurant':
          return <BackRestaurant cardType={cardType} />
        case 'hotel':
          return <BackHostel cardType={cardType} data={data} />
        case 'nature':
          return <BackNature cardType={cardType} data={data} />
        default:
          return 'Error back card'
      }
    }
  }

  // Function to add icon-stadium to nature card 
  const handleCardRestaurant = (cardType) => {
    if (cardType === 'restaurant' && data) {
      return (
        <div className='card-front__graphic'>
          <RestaurantChart data={data} />
        </div>
      )
    }
  }

  // Function to handle rank
  const handleRank = () => {
    if (data) {
      return data.rank + numberToRank(data.rank)
    }
  }

  // Function to handle count
  const handleCount = () => {
    if (data) {
      return data.total
    }
  }

  return (
    <div className={'card card--' + cardType}>

      {/* CARD-FRONT */}
      <div className='card__front card-front'>
        <h3 className='card-front__title card-title'>{cardType}</h3>
        <span className='card-front__dash card-title'> - </span>

        <div className='card-front__ranking'>
          <h4 className='card-ranking'>
            {handleRank()}
            {' ' + rankingType}
          </h4>
        </div>

        <div className='card-front__wrapper'>
          <CardCount cardType={cardType} dataType={dataType} count={handleCount()} />

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