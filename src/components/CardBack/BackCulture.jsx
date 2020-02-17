import React from 'react'

// SVG
import { Museum, Monument, Theater } from '../../assets/icons/all-icons'



const BackCulture = ( props ) => {
  const { cardType, /* text, cultureActivity */ } = props

  // const handleIconCulture = (cultureActivity) => {
  //   if (cultureActivity === 'museum') {
  //     return <Museum/>
  //   } else if (cultureActivity === 'concert') {
  //     return <Concert/>
  //   } else if (cultureActivity === 'theater') {
  //     return <Theater/>
  //   }
  // }

  return (
    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{ cardType }</h3>

      <div className='card-back__wrapper'>

        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            {/* {handleIconCulture()} */}
            <Museum/>
          </div>
          <p className='card-back__data card-data'>
            <span>2</span>
            museum
          </p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            {/* {handleIconCulture()} */}
            <Theater/>
          </div>
          <p className='card-back__data card-data'>
            <span>3</span>
            theaters
          </p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            {/* {handleIconCulture()} */}
            <Monument/>
          </div>
          <p className='card-back__data card-data'>
            <span>8</span>
            monuments
          </p>
        </div>

      </div>
    </div>
  )
}

export default BackCulture