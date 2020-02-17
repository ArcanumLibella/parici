import React from 'react'

// SVG
import { Share } from '../../assets/icons/all-icons'



const CardRestaurant = () => {
  return (
    <div className='card-restaurant'>
      <div className='card-restaurant__header'>
        <h4 className='card-restaurant__title'>Nom du restaurant</h4>
        <Share/>
      </div>

      <div className='card-restaurant__image'></div>

      <div className='card-restaurant__footer'>
        <span className='card-restaurant__price restaurant-price'>€€€</span>
        <span className='card-restaurant__rating'>★★★★★</span>
        <span className='card-restaurant__reviews restaurant-reviews'>(432)</span>
      </div>
    </div>
  )
}

export default CardRestaurant