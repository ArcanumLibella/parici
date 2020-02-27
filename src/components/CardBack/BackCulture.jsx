import React from 'react'

// SVG
import { Museum, Monument, Theater } from '../../assets/icons/all-icons'



const BackCulture = (props) => {
  const { cardType, data } = props

  return (
    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{cardType}</h3>

      <div className='card-back__wrapper'>

        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <Museum />
          </div>
          <p className='card-back__data card-data'>
            <span>{data.museum}</span>
            museum
          </p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <Theater />
          </div>
          <p className='card-back__data card-data'>
            <span>{data.theater}</span>
            theaters
          </p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <Monument />
          </div>
          <p className='card-back__data card-data'>
            <span>{data.monument}</span>
            monuments
          </p>
        </div>

      </div>
    </div>
  )
}

export default BackCulture